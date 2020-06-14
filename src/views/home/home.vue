<template>
    <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
        <h2><button @click="btn">点击</button></h2>
      <!-- <img src="@/assets/img/me.jpg" /> -->
      <div><img :src="img" alt="" srcset=""></div>
    </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar"
import {getHomeMultidata,testApi,testHome}from "../../network/home"
export default {
    name:'home',
    components:{
        NavBar
    },
    data() {
        return {
            result:null,
            img:null
        }
    },
    created() {
        //1.请求很多个数据
       getHomeMultidata().then(res=>{
          console.log(res);
           this.result=res;
       })
      testApi().then(res =>{
          console.log(res);
      })
       testHome().then(res =>{
          console.log(res.data.data);
          this.img=res.data.data.img
      })
    },
     methods: {
           btn(){
               console.log(this.result)
           }
       }
}
</script>
<style  scoped>
.nav-bar{
    background-color:var(--color-tint);
    color: #fff;
}
</style>