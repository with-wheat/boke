import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

import Message from '@/hooks/message'
const DEFAULTS_LOADING = true

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading: boolean
  loading?: any

  constructor(config: RequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULTS_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        if (this.showLoading) {
          this.loading = Message.loading('加载中')
        }

        return config
      },
      (err: any) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res: { data: any }) => {
        // 将loading移除
        this.loading && this.loading()
        const data = res.data
        if (data.code !== 200) {
          console.log('请求失败~, 错误信息')
          Message.error('请求失败~ ' + data.message)
        } else {
          return data
        }
      },
      (err: { response: { status: number } }) => {
        // 将loading移除
        this.loading && this.loading()

        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res: T) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULTS_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err: any) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULTS_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
