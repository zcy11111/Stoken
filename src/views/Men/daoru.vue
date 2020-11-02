<template>
  <div class="daoru">
    <!-- 头部 -->
    <div class="daoru-top" @click="Hui">
        <img src="../../assets/left.png"/>
        <i>导入钱包</i>
    </div>
    <!-- 导航 -->
    <div id="app">
        <ul class="tab-tilte">
            <li @click="cur=0" :class="{active:cur==0}">助记词</li>
            <li @click="cur=1" :class="{active:cur==1}">官方钱包</li>
            <li @click="cur=2" :class="{active:cur==2}">私钥</li>
            <li @click="cur=3" :class="{active:cur==3}">观察</li>
           
        </ul>
       
        <div class="tab-content">
           
            <div class="content1" v-show="cur==0">
            
                <textarea placeholder="助记词，按空格分隔" v-model="zhujici" @click="qing" ></textarea>
                <div class="founn1">
                    <!-- <input type="text" placeholder="密码" /> -->
               <select name="public-choice" v-model="couponSelected" >                                        
                    <option :value="item.id" v-for="(item,index) in couponList" :key="index" @click="jin(index)" >{{item.name}}</option>                                    
                </select>
                            
                  
                </div>
     

                <div class="founn1">
                    <input type="password" placeholder="密码"  v-model="password"/>
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
  
                <button :class="show==false?'btn1':'btn2'" @click="zhubtn">开始导入</button>
               
            </div>

           
            <div class="content1"  v-show="cur==1">

                <div style="margin-top:2rem;color:#858c92">
                    直接复制粘贴以太坊官方钱包keystore文件内容至输入框。或者通过生成keystore内容的二维码，扫描录入。
                </div>
                    

                 <textarea placeholder="keystore 文本内容" @click="qing"  v-model="ketcontent" ></textarea>
               
                <div class="founn1">
                    <input type="password" placeholder="Keystore密码" />
                </div>
                <div class="founn2">
                    <div :class="show==false?'yuan':'yuan2'" @click="chcekRadio">
                        <img v-if="show" src="../../assets/dui.png"/>
                    </div>
                    <i>我已经仔细阅读并同意</i><em>服务及隐私条款</em>
                </div>
  
                <button :class="show==false?'btn1':'btn2'" @click="keybtn" >开始导入</button>
                
                <div style="width:100%;text-align:center;color:#3cbcbb;margin-top:5rem">
                    什么是Keystore？
                </div>
                <div style="width:105%;height:86%;background:#000;position:absolute;top:15%;opacity:0.4;text-align:center;margin-left:-10%;color:#fff">
                        <p style="margin-top:50%">暂未开启</p>
                </div>

            </div>


            
            <div class="content1" v-show="cur==2">
                 <textarea placeholder="铭文私钥" @click="qing"  v-model="siyao"></textarea>
               
                <div class="founn1">
                    <input type="password" placeholder="密码" v-model="siword" />
                </div>
                <div class="founn1">
                    <input type="password" placeholder="重复密码" v-model="siword1"/>
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
  
                <button :class="show==false?'btn1':'btn2'" @click="siyaobtn" >开始导入</button>
                <div style="width:100%;text-align:center;color:#3cbcbb;margin-top:5rem">
                    什么是私钥？
                </div>

            </div>



           
            <div class="content1" v-show="cur==3">
                <div style="margin-top:2rem;color:#858c92">
                   观察钱包不需要导入私钥，只导入钱包地址，进行日常查看账户、交易和接受通知。大额资金的私钥建议使用冷钱包或硬件钱包管理，避免泄露被盗。
                </div>
                <div class="founn1">
                    <input type="text" placeholder="输入钱包地址" v-model="addresss" />
                </div>

                <button style="background:#3fb5d1;margin-top:1.5rem" @click="dibtn">开始导入</button>

                <div style="width:83%;height:5rem;background:#fdf8e5;margin-top:2rem;color:#876f49;padding:1.5rem">
                    注意:观察钱包发送交易时需要冷钱包配合签名。你可以使用另一台闲置手机，开飞行模式作为冷钱包，导入钱包私钥，配合离线签名。
                </div>
                
                <div style="width:100%;text-align:center;color:#3cbcbb;margin-top:5rem">
                    如何使用冷钱包进行离线签名
                </div>
            </div>
        </div>

    

    </div>


    
  </div>
</template>
<script>

import { ethers } from '../../static/js/ethers-v4.min.js'

export default {
  name: 'Daoru',
  data:function(){
    return{
        cur:0, //默认选中第一个tab
        show:false,
        couponList:[
            {
                id: 'A',
                name: 'm/44/60/0/0/0'
            },
            {
                id: '1',
                name: 'm/44/60/0/'
            },
            {
                id: '2',
                name: 'm/44/60/1/0'
            }
        ],
        couponSelected: '',
        couponName:'',
        zhujici:'',
        password:'',
        password1:'',
        address:'',
        sky:'',
        nicheng:"Pk-新钱包",
        listzhu:'',
        // 私钥得信息
        siyao:'',
        siword:'',
        siword1:'',
        passzhu:'',
        ketcontent:'',
        // 地址
        addresss:'',
       wordd:'000000'

        
       
    }
  },
   mounted() {
       this.couponSelected = this.couponList[0].id;
      
     

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
    //   切
    qie(index){
         this.couponName=this.couponList[index].name
    },
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
    //vue中radio单选框单击取消选中状态
    chcekRadio(){
       
        this.show=!this.show  
    },
    // 清空文本框
    qing(){
        this.zhujici=''
        this.siyao=''
        
    },
    // 助记得导入
    zhubtn(){
        var that=this

        if(that.zhujici=='' || that.zhujici.length<30 || that.zhujici[0]==0){
             that.$toast("请输入正确的助记词");
        }else if(that.password<6){
             that.$toast("密码不能少于六位");
        }else if(that.password != that.password1){
             that.$toast("密码不一致，请重新输入");
        }else if(that.show==false){
             that.$toast("请勾选条款");
        }else{
            console.log("存进来")
            

            var wallet = ethers.Wallet.fromMnemonic(that.zhujici, that.couponName);
            console.log(wallet,"助记词")
            var comment={name:that.nicheng,password:that.password,address:wallet.address,sky:wallet.privateKey,passzhu:wallet.mnemonic}
                var templist=JSON.parse(localStorage.getItem("qconnt") || "[]")
                templist.push(comment)
                localStorage.setItem('qconnt',JSON.stringify(templist))

                
        }

        


    },
    // 私钥按钮
    siyaobtn(){
        var that=this
         if(that.siyao=='' || that.siyao.length<30 || that.siyao[0]!=0){
             that.$toast("请输入正确的私钥");
        }else if(that.siword<6){
             that.$toast("密码不能少于六位");
        }else if(that.siword != that.siword1){
             that.$toast("密码不一致，请重新输入");
        }else if(that.show==false){
             that.$toast("请勾选条款");
        }else{
            console.log("存进来")
           

            var wallet = new ethers.Wallet(that.siyao)
            console.log(wallet,"私钥的钱包")
             var comment={name:that.nicheng,password:that.siword,address:wallet.address,sky:wallet.privateKey}
                var templist=JSON.parse(localStorage.getItem("qconnt") || "[]")
                templist.push(comment)
                localStorage.setItem('qconnt',JSON.stringify(templist))

                
        }
       

            

    },
    // keystory
    keybtn(){


    },
    // 地址按钮
    dibtn(){
        var that=this

        if(that.addresss=='' || that.addresss<45){
             that.$toast("请输入正确的地址");
        }else{
              var comment={name:that.nicheng,password:that.wordd,address:wallet.addresss,sky:that.sky}
                var templist=JSON.parse(localStorage.getItem("qconnt") || "[]")
                templist.push(comment)
                localStorage.setItem('qconnt',JSON.stringify(templist))
        }



       

    }
  }
 
}
</script>
<style scoped>



.daoru{
    overflow-x: hidden
}
/* 头部 */
.daoru-top{
    width:100%;
    height:3rem;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.daoru img{
    width: 2rem;
    height: 2rem;
}

.daoru i{
    width: 88%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
  
}
/* 导航 */
 ul li {
    margin: 0;
    padding: 0;
    list-style: none;
}
#app {
    width: 100%; 
}
.tab-tilte{
    width: 100%;
    height:3.5rem;
    border-bottom:solid 1px #c9c9c9;
    display:flex;
    color:#858c92
}
.tab-tilte li{
   display:flex;
   flex:1;
   justify-content: center;
   align-items: center;



}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active{
    border-bottom:solid 3px #3fb5d1;
    color: #3fb5d1;
}
.content1{
   width:89%;
   height:100%;
    margin:0 1.5rem;
}
/* 助记词内容 */
.content1 textarea{
    width:91%;
    height: 5rem;
    margin-top: 2.5rem;
    border:solid 1px #c2c2c2;
    font-size: 1.2rem;
    padding: 1rem;
    outline:none;
}
/* 填写信息 */
.founn1{
    width:98%;
    height:3rem;
    border-bottom:solid 1px #c5c5c5 ;
    margin:1rem 1rem 0 0.5rem
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
/* 下拉框 */
select{
    width:100%;
    height:100%;
    border:none;
    outline:none;
    font-size:1.1rem;
    color:#8f9094
}
.founn2{
    width:98%;
    height:3rem;
    margin:1rem 1rem 0 0.5rem
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
.btn1{
    background:#d7d7d7
}
.btn2{
    background:#40b5a5
}



</style>