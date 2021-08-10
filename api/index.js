/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
const BASE_URL = 'https://dev-video-h5-server-api.xiangleba.com.cn/h5/service/activity/red/'

// 排行榜
topApi = () => ajax(`${BASE_URL}getTop10`)
