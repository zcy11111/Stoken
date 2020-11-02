<template>
  <div class="user">
    <div class="usertop">
      <h2>我</h2>

      <div class="top">
        <div class="top1" @click="mangen">
          <img  src="../assets/qb.png"/>
          <i>管理钱包</i>
        </div>

        <div class="top1">
          <img  src="../assets/sj.png"/>
          <i>交易记录</i>
        </div>
      </div>

    </div>
    <!-- 下面 -->
    <div class="ulist1">
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/xx.png"/>
                <i>消息中心</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/lx.png"/>
                <i>联系人</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/sz.png"/>
                <i>系统设置</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
    </div>
    <div class="ulist1-1" style="background:#fff;margin-top:1.5rem;margin-bottom:1.5rem">
      <div class="ulist1-11">
          <img  src="../assets/gr.png"/>
          <i>个人中心</i>
      </div>

      <img class="uright" src="../assets/right.png"/>
    </div>

    <div class="ulist1">
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/bz.png"/>
                <i>帮助中心</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/gy.png"/>
                <i>关于我们</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
        <div class="ulist1-1">
            <div class="ulist1-11">
                <img  src="../assets/ai.png"/>
                <i>升级</i>
            </div>

            <img class="uright" src="../assets/right.png"/>
        </div>
    </div>



     <Footer></Footer>
  </div>
</template>
<script>

;

export default {
  name: 'User',
  data:function(){
    return{
     
    }
  },
  mounted:function(){
   


  },
  // 方法
  methods:{
    // 跳管理钱包
    mangen(){
      this.$router.push({ 
        path: "/Mangen" ,
        
      });
    },
    
  }
 
}
</script>
<style scoped>
.user{
  height:100vh;
  background:#ececec
}
.usertop{
  width:100%;
  height:14rem;
  background:#36bac9;
  color:#e4ffff;
  overflow:hidden
}
.top{
  width:100%;
  height:7rem;
  display:flex;
  margin-top:3rem
}
h2{
  text-align:center;
  width:100%;
  margin-top:1rem
}
.top1{
  flex:1;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top1 img{
  width:3rem;
  height:3rem;
  margin-bottom:0.8rem
}
/* 下面 */
.ulist1{
  width:100%;
  height:11rem;
  background:#fff;
  overflow:hidden
}
.ulist1-1{
  width:100%;
  height:3.5rem;

}
.ulist1-11{
  width:40%;
  float:left;
  display:flex;
  align-items: center;
  height:3rem
}
.ulist1-11 img {
  width:1.8rem;
  height:1.8rem;
  margin-left:1.5rem;
  margin-right:1rem
}
/* 右 */
.uright{
  float:right;
  width:1.5rem;
  height:1.5rem;
  margin-right:0.6rem;
  margin-top:0.8rem
}
</style>