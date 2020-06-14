import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


import { request } from "./network/request";
request({
        url: "/user/getList"
    },
    config => {
        console.log(config);
        //console.log("12345");
    },
    err => {
        console.log(err);
        console.log("失败！");
    }
)