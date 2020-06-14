<template>
         <tab-bar>
  <tab-bar-item path="/home" activeColor="deepPink">
   <img slot="item-icon" src="../../../assets/img/tabbar/home.jpg" >
    <img slot=item-active-icon src="../../../assets/img/tabbar/active_home.jpg" >
  <div slot="item-text"> 首页</div>
  </tab-bar-item>
  <tab-bar-item path="/category" activeColor="blue">
   <img slot="item-icon" src="../../../assets/img/tabbar/timg.jpg" >
    <img slot=item-active-icon src="../../../assets/img/tabbar/active_timg.jpg" >
  <div slot="item-text"> 分类</div>
  </tab-bar-item>
  <tab-bar-item path="/cart">
   <img slot="item-icon" src="../../../assets/img/tabbar/shop.jpg" >
      <img slot=item-active-icon src="../../../assets/img/tabbar/active_shop.jpg" >
  <div slot="item-text"> 购物车</div>
  </tab-bar-item>
  <tab-bar-item path="/proflie">
   <img slot="item-icon" src="../../../assets/img/tabbar/me.jpg" >
      <img slot=item-active-icon src="../../../assets/img/tabbar/active_me.jpg" >
  <div slot="item-text"> 我的</div>
  </tab-bar-item>
  </tab-bar> 
</template>
<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
export default {
    name:"maintabbar",
    components: {
       TabBar,
        TabBarItem 
    }
}
</script>