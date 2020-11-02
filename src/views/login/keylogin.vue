<template>
  <div class="keylogin">
    <div class="foun">
        <b style="margin-top: 0.2rem;">。</b><i style="margin-top:0.6rem">助记词用于创建钱包，非常重要，请务必牢记</i>
        <b style="margin-top: -0.4rem;">。</b><i>imToken不存储密码，也无法帮您找回，请务必牢记</i>
    </div>
    <div class="zhu">
        <i>获取助记词</i>
         <textarea  style="font-size:1.5rem;color:#8f9094" v-model="passzhu" disabled="true" ></textarea>
    </div>

    <button style="color:#fff" @click="btn">下一步</button>
  </div>
</template>

<script>
import { ethers } from '../../static/js/ethers-v4.min.js'


export default {
  name: 'keylogin',
  data:function(){
    return{
        passzhu:''
    }
  },
  mounted:function(){
    // var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));

    //  this.passzhu=mnemonic
    // console.log(mnemonic,"助记词")
     var list=JSON.parse(localStorage.getItem("qconnt"))
      var index=list.length-1
      this.passzhu=list[index].passzhu

  },
  // 方法
  methods:{
   btn(){
       var mnemonic=this.passzhu
        var value=this.$route.query.value
        console.log(value,"kankan")
        this.$router.push({ 
            path: "/zhulogin",
            query:{
                mnemonic,
                value
            }
          
        });
    }

  },
  
 
}
</script>
<style>
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
textarea{
    width:91%;
    height: 6rem;
    margin-top: 1.5rem;
    border:solid 1px #c2c2c2;
    font-size: 1.5rem;
    padding: 1rem;
    outline:none;
    font:normal
    
}

button{
    width:90%;
    height:3rem;
    margin-left:1rem;
    background:#0869b6;
    border:none;
    color:#fff;
    border-radius:0.6rem;
    margin-top:3rem
}




</style>
