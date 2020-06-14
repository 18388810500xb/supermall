import axios from 'axios'

// export function request(config, success, failure) {

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        // baseURL: 'http://152.136.111.216:8081',
        baseURL: 'https://mock.lanyanxi.com/mock/192b987d73a5eafba392b3dff5e96f6f/api',
        timeout: 5000
    })

    // 2.2 响应式拦截
    instance.interceptors.request.use(res => {
            console.log(res);
            return res;
        }, err => {
            console.log(err);
            return err.data
        })
        //3发送网络请求
    return instance(config)
        // instance(config).then(res => {
        //     success(res)
        // }).catch(err => {
        //     failure(err)
        // })
}