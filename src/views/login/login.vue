<template>
  <div class="login">
    <div class="foun">
        <b style="margin-top: 0.2rem;">。</b><i style="margin-top:0.6rem">密码用于保护私钥和交易授权，强度非常重要</i>
        <b style="margin-top: -0.4rem;">。</b><i>imToken不存储密码，也无法帮您找回，请务必牢记</i>
    </div>
    <div class="founn1">
        <input type="text" placeholder="昵称"  v-model="nicheng" />
    </div>
    <div class="founn1">
        <input type="password" placeholder="密码"  v-model="password" />
    </div>
    <div class="founn1">
        <input type="password" placeholder="重复密码" v-model="password1"/>
    </div>
    <div class="founn1">
        <input type="text" placeholder="密码提示信息（可不填）" />
    </div>

    <button style="color:#fff" @click="btn">下一步</button>
   
  </div>
</template>

<script>

import { ethers } from '../../static/js/ethers-v4.min.js'

export default {
  name: 'login',
  data:function(){
    return{
        password:'',
        password1:'',
        nicheng:'',
        address:'',
        templist:[],
        sky:'',
        passzhu:''
    }
  },
  mounted:function(){
      var privateKey = ethers.utils.randomBytes(32);
        var wallet = new ethers.Wallet(privateKey);
        this.address=wallet.address
     let randomNumber = ethers.utils.bigNumberify(ethers.utils.randomBytes(32)); 
        this.sky=randomNumber._hex
       console.log(randomNumber._hex,"生成私钥")
     
      var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));

     this.passzhu=mnemonic
 


  },
  // 方法
  methods:{
    btn(){
        var that=this

          var list=JSON.parse(localStorage.getItem("qconnt"))
          console.log(list,"ppppp")
             
            if(list===null){
                console.log("00000")
                var comment={name:that.nicheng,password:that.password,address:that.address,sky:that.sky,passzhu:that.passzhu,key:1}
                var templist=JSON.parse(localStorage.getItem("qconnt") || "[]")
                    templist.push(comment)
                    localStorage.setItem('qconnt',JSON.stringify(templist))
                
                // 单独在存名字密码
              
                that.$router.push({ 
                    path: "/keylogin"
                
                });
            }else{
                  if(that.password.length<6){
                    
                        that.$toast("密码不能少于六位");
                    }else if(that.password !=that.password1){
                        that.$toast("密码不一致，请重新输入");
                    }else {
                    
                        that.$router.push({ 
                            path: "/keylogin"
                        
                        });
                        // 存储密码和名字
                         
                        var comment={name:that.nicheng,password:that.password,address:that.address,sky:that.sky,passzhu:that.passzhu}
                        var templist=JSON.parse(localStorage.getItem("qconnt") || "[]")
                            templist.push(comment)
                            localStorage.setItem('qconnt',JSON.stringify(templist))
                        
                       

                    }
             
            }


             

                   

       
       
       
        
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
