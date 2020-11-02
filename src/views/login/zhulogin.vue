<template>
  <div class="zhulogin">
    <div class="foun">
        <b style="margin-top: 0.2rem;">。</b><i style="margin-top:0.6rem">助记词用于创建钱包，非常重要，请务必牢记</i>
        <b style="margin-top: -0.4rem;">。</b><i>imToken不存储密码，也无法帮您找回，请务必牢记</i>
    </div>
    <div class="zhu">
        <i>输入助记词</i>
         <!-- <textarea   v-model="pasWorder" style="font-size:1.5rem;color:#8f9094" rows="5"  maxlength="200"  @click="qing"   ></textarea> -->
        <div class="zci" >
                <i v-for="(item,index) in passzhu" :key="index" @click="selent(index)">{{item}}</i>
        </div>
         
         
        
    </div>

    <ul class="szhu" >
        <li id="chooselabel" v-for="(item,index) in Slist" :key="index" @click="Zhu(index)"  >{{item}}</li>
        
    </ul>

    <button  style="color:#fff" @click="btn" >下一步</button>
  </div>
</template>

<script>
import { ethers } from '../../static/js/ethers-v4.min.js'

export default {
  name: 'zhulogin',
  data:function(){
    return{
        pasWorder:'',
        passzhu:[],
        Szhu:'',
        Slist:'',
       
    }
  },
  mounted:function(){
    
    // 获取上一个页面的助记词
   var mnemonic1=this.$route.query.mnemonic
    
    this.Szhu=mnemonic1
    console.log(mnemonic1,"看助记词")
    this.Slist=mnemonic1.split(" ")

 
  },
  // 方法
  methods:{
    //   下一步
    btn(){
        
        if(this.pasWorder !=this.Szhu){
            this.$toast("请检查你的助记词");
        }else{
        
            this.$router.push({ 
                path: "/Home"
                
            });
        }
    },
    // 点击助记词  选择
    Zhu(index){
       
       this.passzhu.push(this.Slist[index])
       
       this.pasWorder=this.passzhu.join(" ")
    

    },
    qing(){
        this.pasWorder.length-1
        this.passzhu=[]
        console.log(this.pasWorder,"点击清除  文本框")
    },
    selent(index){
        this.passzhu.splice(index,1)
    }

  },
  
 
}
</script>
<style>
.zci{
    width:90%;
    margin-left:10px;
    min-height:5rem;
    border:solid 1px;
    margin-top:10px;
    border-radius:10px;
    display:flex;
    flex-wrap: wrap;
}
.zci i{
    width:20%;height:2rem;background:#efefef;display:block;
    text-align:center;line-height:2rem;
    margin-left:10px;
    margin-bottom:0.5rem
}
.foun{
    width:100%;
    height:4rem;
    background:#0869b6;
    color:#edfffd;
    overflow:hidden
}
.foun b{
    float: left;
    margin-left: 1rem;
}
.foun i{
    font-size: 0.9rem;
    text-align: left;
    margin-left: 1rem;
    font-weight: normal;
    width:100%;
    font-weight: normal;
}
/* 填写信息框 */
.founn1{
    width:93%;
    height:3rem;
    border-bottom:solid 1px #c5c5c5 ;
    margin:1rem 1rem 0 1rem
}
input{
    width:100%;
    height:100%;
    border:none;
    font-size:1.09rem;
    outline:none;
    color:#8f9094

}
input::-webkit-input-placeholder {
    color: #c6c6c6
}
textarea::-webkit-input-placeholder {
    color: #c6c6c6
}
.zhu{
    width: 90%;
    margin-left: 5%;
}
.zhu i{
    margin-top:1rem
}
.zhu ul{
    width:100%;
    height:11rem;
    border:solid 1px;
    display:flex;
    flex-wrap: wrap;
}
.zhu ul li{
    width:18%;
    height:2rem;
    background:#d2d3d6;
    color:#fff;
   margin-left:3px;
    display: flex;
    justify-content: center;
    align-items: center;

}

button{
    width:90%;
    height:3rem;
    margin-left:1rem;
    background:#0869b6;
    border:none;
    color:#fff;
    border-radius:0.6rem;
    margin-top:2rem
}

/* 对应的助记词 */
.szhu{
    width:89%;
    height:7rem;
    display:flex;
    flex-wrap: wrap;
    margin-top:1rem;
    margin-left:1.5rem;
}
.szhu li{
    width:20%;
    height:2rem;
    border-bottom:solid 1px #ededed;
    color:#797979;
    margin-right:0.8rem;
    text-align: center;
    line-height: 2rem;
}
.acative{
    background:cyan
}

</style>
