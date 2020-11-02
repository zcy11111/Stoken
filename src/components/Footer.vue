<template>
  <div class="footer" >
    
    <div class="tab-item" @click="switchTo('/Home')">
            <img :src="'/Home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="">
            <span :class="{on: '/Home' === $route.path}">首页</span>
        </div>
    <div class="tab-item" @click="switchTo('/User')">
            <img :src="'/User' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="">
            <span :class="{on: '/User' === $route.path}">我的</span>
        </div>
   
  </div>
</template>
<script>
export default {
  name: "Footer",
  props: {},
  data: function() {
    return {
      //图片切换
      tabBarImgArr:[   
        {normal: require('../assets/zc.png'), selected: require('../assets/zc_active.png')},
        {normal: require('../assets/gr.png'), selected: require('../assets/gr_active.png')},
       
      ]
    }
  },
  methods:{
    switchTo(path){
      this.$router.replace(path)
    }
  }
};
</script>
<style scoped>
a{
  color:#000;
  text-decoration:none
}
.footer{
  width:100%;
  height:3.5rem;
  display:flex;
  position:fixed;
  bottom:4px;
  border-top:solid 1px #bbbbbb;
  justify-content: center;
  align-items: end;
  background:#fff
}
.tab-item{
  flex:1;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:0.5rem;
  font-size:0.8rem

}
.on{
  color:#3fb1bc;
  font-size:0.8rem
}
</style>
