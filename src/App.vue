<template>
  <div>
    <div class="app" >
      <div class="app1" v-if="show">
            <video-player class="video-player vjs-custom-skin" style="height:100%;width:100%" v-if="show"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions"
                      
                      @ended="onPlayerEnded($event)">
         
        </video-player>
        
         
        
      </div>


      <keep-alive  :max="10">
        <router-view class="router" ref="router"></router-view>
      </keep-alive>
  
    </div>
   
  </div>
</template>
<script>




export default {
  data() {
    return {
      show:false,
       playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: true, //如果true,浏览器准备好时开始回放。
            controls: false, //控制条
            preload: 'auto', //视频预加载
            muted: true, //默认情况下将会消除任何音频。
            // loop: false, //导致视频一结束就重新开始。
            language: 'zh-CN',
            // aspectRatio: '2:1', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            // fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        
             sources: [{
                type: 'video/mp4',  
                src:  require('./assets/shipin.mp4'),  // 路径
               
               
              }],

            // poster: "", //你的封面地址（覆盖在视频上面的图片）
            width: document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            // controlBar: {
            //   timeDivider: true,
            //   durationDisplay: true,
            //   remainingTimeDisplay: false,
            //   fullscreenToggle: false  //全屏按钮
            // },
        },
      
    
    };
  },
 

  watch: {
   
  },
  mounted(){
   
   
    //  判断页面是首次加载还是刷新
    if (window.performance.navigation.type === 1) {
      console.log('页面被刷新')
     
    } else {
       //  首次加载的话显示启动页内容，设置延时器再取消显示
      console.log('首次加载')
      this.show = true
      // setTimeout(() => {
      //   this.show = false
      // }, 4000)
      //  var list=JSON.parse(localStorage.getItem("qconnt"))
      //     console.log(list,"ppppp")
       
   
      // if(list.length>0){
      //   this.$router.push({ 
      //       path: "/Home" 
      //     })
          
      // }else{
      //     this.$router.push({ 
      //       path: "/Login" 
      //     })
         
      // }

     

       

      
    }
    

  },
  methods:{
      // 视频播完回调
    onPlayerEnded($event) {
     
        var list=JSON.parse(localStorage.getItem("qconnt"))
        
      if(list !=null && list.length>0){
        this.$router.push({ 
            path: "/Home" 
          })
           this.show = false
      }else{
          this.$router.push({ 
            path: "/Login" 
          })
           this.show = false
      }
      
     
    },
  }
 
 

 
}
</script>
<style >
body{
  margin:0px
}
*{margin:0;padding:0}
i{font-style:normal;display:block}
em{font-style:normal;display:block}
.app1{
  width:100%;
  height:100vh;
 
}

</style>
