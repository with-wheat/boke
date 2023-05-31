// 定义LocalStorageUtil类
class LocalStorageUtil {
  // 获取LocalStorage中指定键的值
  static getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  // 设置LocalStorage中指定键的值
  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  // 删除LocalStorage中指定键的值
  static removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  // 清空LocalStorage中的所有键值对
  static clear(): void {
    localStorage.clear()
  }
}

export default LocalStorageUtil
