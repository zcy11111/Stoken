<template>
  <div class="carry">
    <!-- 头部 -->
    <div class="carry-top" @click="Hui">
          <img src="../../assets/left.png"/>
          <i>管理钱包</i>
    </div>
    <!-- 列表 -->
    <div class="carrylist">
      <div class="carrylist1">
          <img src="../../assets/top1.jpg"/>
          <i>{{hashName | ellipsis}}</i>
      </div>
      <div class="carrylist2">
          0 ethers
      </div>
    </div>


    <!-- 底部 -->
    <div class="mangen-footer">
        <div class="mfoot1" @click="found">
            <img  src="../../assets/shou.jpg"/>
            <i>转账</i>
        </div>
        <div class="mfoot1" style="background:#046eb8" @click="daoru">
            <img  src="../../assets/kuan.jpg"/>
            <i>收款</i>
        </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'carry',
  data:function(){
    return{
      hashName:'gfhjgsd878hduhcjdhcjhddsg'
    }
  },
  mounted:function(){
    







  },
  // 方法
  methods:{
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
     // 去转账
    found(){
        this.$router.push({ 
        path: "/Zcarry"
        
      });
    },
    // 去收款
     daoru(){
      this.$router.push({ 
        path: "/Index"
        
      });
    },

  },
   // 过滤器 
  filters: {
      ellipsis (value) {
      let len=value.length;
      if (!value) return ''
      if (value.length > 20) {
        return value.substring(0,8) + '...' +value.substring(len-8,len)
      }
      return value
      }
  },
  
 
}
</script>
<style scoped>
.carry{
  background:#ececec;
  height:100vh;
}
/* 头部 */
.mangen{
   
    background:#ececec
}
.carry-top{
    width:100%;
    height:3rem;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carry img{
    width: 2rem;
    height: 2rem;
}

.carry i{
    width: 88%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
}
/* 列表 */
.carrylist{
  width:100%;
  height:5rem;
  display:flex;
  align-items: center;
  background: #fff;
    margin-top: 1rem;

}
.carrylist1{
  width:50%;
  display:flex;
  align-items: center;
 
}
.carrylist1 img{
  width:3rem;height:3rem;border-radius:50%;
  margin-right:1rem;
  margin-left:1rem
}
.carrylist1 i{
  font-size:1rem
}
.carrylist2{
  text-align:right;
  width:46%
}

/* 底部 */
.mangen-footer{
    width:100%;
    height:3rem;
    display:flex;
    position:fixed;
    bottom:0px;
}
.mfoot1{
    width:50%;
    height:3rem;
    background:#36bac9;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff
}
.mfoot1 img{
    width:1.5rem;
    height:1.5rem;
 
}
.mfoot1 i{
    width:43%;
    font-size:1rem
}

</style>
