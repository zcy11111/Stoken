<template>
  <div class="home1">
    <div class="home-top">
      <div class="top1">

      </div>
      <div class="top2">
        <img  src="../assets/top1.jpg"/>
        <i>{{myname}}</i>
      </div>
      <div class="top3" @click="shouk">
        <i> {{hashName | ellipsis}}</i>
        <img  src="../assets/er.png"/>
      </div>
      <div class="top4">
        <div class="top41">
          <i>{{money}}</i>
          <em>总资产（￥）</em>
        </div>
        <div class="top42">
             <img  src="../assets/jia.png"/>
        </div>

      </div>
      

    </div>
    <!-- 列表 -->
    <div class="homeList" @click="hlist">
        <div class="homeList1">
          <img  src="../assets/ETH.jpg"/>
          <h4>ETH</h4>
        </div>
        <div class="homeList2">
          <i>0</i>
          <em>￥0</em>
        </div>
    </div>
   
   <Footer ></Footer>
  </div>
</template>

<script>

import { ethers } from '../static/js/ethers-v4.min.js'

import {request} from'../utils/index'
import axios from'axios'

export default {
  name: 'Home',
  data:function(){
    return{
      passvate:'',
      passzhu:'',
      hashName:'',
      show:false,
      myname:'',
      Zzichan:'',
      key:'',
      money:''
    }
  },
  mounted:function(){
    //  setTimeout(() => {
    //   this.show = true
    // },4000)
    
      var list=JSON.parse(localStorage.getItem("qconnt"))
      console.log(list,"看列表")
      var index=list.length-1
      this.myname=list[index].name
      this.hashName=list[index].address

      // 私钥
      this.key=list[index].sky
     

      // 请求余额接口
       axios({
          method: 'GET',
           url:'http://api-cn.etherscan.com/api?module=account&action=tokenbalance&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&tag=latest&apikey=4Y681I8SVGRZ6XHFSVRDV3TUKS675VRTH2',
						params: {
              address:this.hashName
						}
					}).then((res) => {
           console.log(res.data,"kankan ")
           this.money=res.data.status
				})



  },
    
   



  // 方法
  methods:{
    // 去收款
    shouk(){
      var address=this.hashName
     
      this.$router.push({ 
        path: "/Index",
         query:{
        
          address
        }
        
      });
    },
    // 去转账页面
    hlist(){
     
      this.$router.push({ 
        path: "/carry" 
       
      });
    }
    

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
   watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    },
 
}
</script>
<style scoped>

.home-top{
  width:100%;
  height:20rem;
  background: linear-gradient(to top, #3673ac  , #37b1c8);
  color:#fff
}
.top1{
  width:100%;
  height:3rem
}
.top2{
  width:100%;
  height:6rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top2 img{
  width:3rem;
  height:3rem;
  border-radius: 50%;
  margin-bottom: 0.8rem;
}
.top3{
  width:100%;
  height:3rem;
  display:flex;
  justify-content: center;
  align-items: center;
}
.top3 img{
  width:2rem;
  height:2rem;
 
}
.top4{
  width:100%;
  height:5rem;
  margin-top:2rem
}
.top41{
  width:30%;
  float:left;
 margin-left:1rem
}
.top41 i{
  display:block;
  font-size:2.2rem
}

.top42{
  width:15%;
  float:right;
 
}
.top42 img{
  width:2.5rem;
  height:2.5rem;
  margin-top:1.5rem
}
/* 列表 */
.homeList{
  width:100%;
  height:4rem;
  margin-top:1rem;
   border-bottom: solid 1px #efefef;
}
.homeList1{
  width:30%;
  height:4rem;
  float:left;
  margin-left:1rem;
  display:flex;
  align-items: center;
  color:#424a55;
  font-size:1.2rem;
 
}
.homeList1 img{
  width:3rem;
  height:3rem;
  margin-right:1rem
}
.homeList2{
  width:30%;
  height:4rem;
  float:right;
  margin-right:1rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.homeList2 i{
  font-size:1.6rem;
  color:#56606c
}
.homeList2 em{
  color:#8f9ca4
}
</style>
