import { request } from "./request"

export function getHomeMultidata() {
    return request({
        url: "/user/getList",

    })
}

export function testApi() {
    return request({
        url: "/test"
    })
}
export function testHome() {
    return request({
        url: "/home"
    })
}