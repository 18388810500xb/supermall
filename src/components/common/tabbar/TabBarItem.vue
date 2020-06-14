<template>
    <div class="tab-bar-item" @click="itemClick">
  <div v-if="isactive" ><slot name="item-icon"></slot></div>
  <div v-else><slot  name="item-active-icon"></slot></div>
    <div  :style="activeStyle"> <slot name="item-text"></slot></div>
     
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
           // isactive:true
        }
    },
    computed: {
        isactive(){
            return this.$route.path.indexOf(this.path)
        },
        activeStyle(){
            return this.isactive?{}:{color:this.activeColor}
        }
    },
    methods: {
        itemClick(){
            //重点，多练多写
            this.$router.replace(this.path) !==-1
           // console.log("打印出来！！")
        }
    },
}
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>