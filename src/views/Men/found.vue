<template>
  <div class="found">
    <!-- 头部 -->
    <div class="found-top" @click="Hui">
        <img src="../../assets/left.png"/>
        <i>创建钱包</i>
    </div>

    <div class="foun">
        <b style="margin-top: 0.2rem;">。</b><i style="margin-top:0.6rem">密码用于保护私钥和交易授权，强度非常重要</i>
        <b style="margin-top: -0.4rem;">。</b><i>imToken不存储密码，也无法帮您找回，请务必牢记</i>
    </div>
     <!-- 填写资料 -->
    <div class="founn1">
        <input type="text" placeholder="钱包名称"  v-model="nicheng" />
    </div>
    <div class="founn1">
        <input type="password" placeholder="密码" v-model="password" />
    </div>
    <div class="founn1">
        <input type="password" placeholder="重复密码" v-model="password1" />
    </div>
    <div class="founn1">
        <input type="text" placeholder="密码提示信息（可不填）" />
    </div>
    <div class="founn2">
        <div :class="show==false?'yuan':'yuan2'" @click="chcekRadio">
            <img v-if="show" src="../../assets/dui.png"/>
        </div>
        <i>我已经仔细阅读并同意</i><em>服务及隐私条款</em>
    </div>
  
  <button ref="ygdwkgmj" @click="xbtn"> 创建钱包</button>


    <div class="daobao" @click="daoru">
        导入钱包
    </div>




    

  
  </div>
</template>

<script>
import { ethers } from '../../static/js/ethers-v4.min.js'
export default {
  name: 'Found',
  data:function(){
    return{
       radio2:'',
       show:false,
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
    this.password=''
    this.nicheng=''
    this.show=false

    let randomNumber = ethers.utils.bigNumberify(ethers.utils.randomBytes(32)); 
    this.sky=randomNumber._hex
    console.log(randomNumber._hex,"生成私钥")
     
    var mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(16));

    this.passzhu=mnemonic






  },
  // 方法
  methods:{
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
    //vue中radio单选框单击取消选中状态
    chcekRadio(){
       
        this.show=!this.show
        if(this.show==true){
            this.$refs.ygdwkgmj.style.backgroundColor = "#40b5a5";
          
        }else{
            this.$refs.ygdwkgmj.style.backgroundColor = "#d7d7d7";
            
        }
        
        
    },
    // 去导入
    daoru(){
        this.$router.push({ 
        path: "/Daoru" ,
        
      });
    },
    // 创建新得钱包
    xbtn(){
        var that =this
          var list=JSON.parse(localStorage.getItem("qconnt"))
            console.log(list,"看一下")
            //   for(let i in list){
            //     //   console.log(list[i].name,"看一下名字")
            //     //   console.log(this.nicheng,"看昵称")
            //       if(that.nicheng ==list[i].name){
            //           console.log("909090")
            //            that.$toast("昵称重复");
            //       }
            //   }
               if(that.password.length<6){
                    
                        that.$toast("密码不能少于六位");
                    }else if(that.password !=that.password1){
                        that.$toast("密码不一致，请重新输入");
                    }else if( that.show ==false) {
                    
                    that.$toast("必须同意条款");

                    }else{
                           console.log("成功")
                        // 存储密码和名字
                         var  value=1
                        var comment={name:that.nicheng,password:that.password,address:that.address,sky:that.sky,passzhu:that.passzhu}
                        var templist=JSON.parse(localStorage.getItem("qconnt"))
                            templist.push(comment)
                            localStorage.setItem('qconnt',JSON.stringify(templist))

                         that.$router.push({ 
                            path: "/keylogin",
                            query:{
                                value
                            }
                        });
                       
                        
                    }
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
/* 头部 */
.found-top{
    width:100%;
    height:3rem;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.found img{
    width: 2rem;
    height: 2rem;
}

.found i{
    width: 88%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
  
}
/*  */
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
/* 填写信息 */
.founn1{
    width:88%;
    height:3rem;
    border-bottom:solid 1px #c5c5c5 ;
    margin:1rem 1rem 0 1.5rem
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
.founn2{
    width:88%;
    height:3rem;
    margin:1rem 1rem 0 1.5rem
}
.yuan{
    width:1.5rem;
    height: 1.5rem;
    border:solid 1px #c3c3c3;
    float: left;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.yuan2{
     width:1.5rem;
    height: 1.5rem;
    border:solid 1px #40b5a5;
    float: left;
    border-radius:50%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.yuan img{
    width:1.5rem;
    height:1.5rem;
}
.yuan2 img{
    width:1.5rem;
    height:1.5rem
}
.founn2 i{
    font-size: 1rem;
    width: 46%;
    float: left;
    text-align: left;
    font-weight: normal;
    margin-left:0.5rem;
    color:#89909a
}
.founn2 em{
    color:#3fbcb6
}

button{
    width:90%;
    height:3rem;
    margin-left:1rem;
    background:#d7d7d7;
    border:none;
    color:#fff;
    border-radius:0.6rem
}
.daobao{
    width:100%;
    text-align:center;
    color:#3fbcb6;
    margin-top:4rem
}
</style>