// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

const BASE_URL = process.env.REACT_APP_BASE_URL
const TIME_OUT = 10000

export { BASE_URL, TIME_OUT }
