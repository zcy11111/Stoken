<template>
  <div class="index">
      <div class="index-top" @click="Hui">
          <img src="../../assets/cuo.png"/>
          <i>收款码</i>
      </div>
      <div style="width:100%;height:7rem;background:#36bac7;position:relative"></div>
      <div class="touxing">
            <img src="../../assets/top1.jpg"/>
      </div>
     

      <!-- 内容 -->
      <div class="content">
            <i>{{hashName}}</i>
            <div class="founn1">
                <input type="text" placeholder="输入金额" />
            </div>
             <div class="qrcode" ref="qrCodeUrl"></div>
            <button :data-clipboard-text="hashName" @click="copy" id="copy_text" v-if="value==0" >复制收款地址</button>
             <button  v-if="value==1" >已复制</button>
      </div>
        
     



   

  
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import Clipboard from'clipboard'
export default {
  name: 'Mangen',
  data:function(){
    return{
        hashName:'',
        name:"",
        value:0
      
    }
  },
  mounted:function(){
      this.creatQrCode();
     var list=JSON.parse(localStorage.getItem("qconnt"))
       var index=list.length-1
      this.hashName=list[index].address
      this.value=0

  },
  // 方法
  methods:{
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
    creatQrCode() {
        var qrcode = new QRCode(this.$refs.qrCodeUrl, {
            text: '0x7c79ab4f7e49fc0239bcda8f7e3a8a1766cd201d', // 需要转换为二维码的内容
            width: 150,
            height: 150,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        })
    },
    // 复制
    copy: function () {
        var _this = this;
        var clipboard = new Clipboard('#copy_text');

        clipboard.on('success', e => {
            this.value=1
       
            console.log('复制成功')
        // 释放内存
        clipboard.destroy()
        })
        clipboard.on('error', e => {
        // 不支持复制
        Message({
            message: '该浏览器不支持自动复制',
            type: 'warning'
        });
        console.log("获取失败")
        // 释放内存
        clipboard.destroy()
        })
    }
    
    
  },
  // 过滤器 
  
 
}
</script>

<style scoped>
.qrcode{
    display: inline-block;
    margin-top:20px;
    margin-left:24%
}
.qrcode img {
        width: 132px;
        height: 132px;
        background-color: #fff; 
        padding: 6px; 
        box-sizing: border-box;
}
 
.index-top{
    width:100%;
    height:3rem;
    background:#36bac7;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff
}
.index-top img{
    width: 1.5rem;
    height: 1.5rem;
}

.index-top i{
    width: 83%;
    text-align: center;
    font-size: 1.2rem;
   margin-right:1rem
}
.touxing{
    width:4rem;
    height:4rem;
    background:yellow;
    position:absolute;
    top:8rem;
    left:44%;
    border-radius: 50%;
}
.touxing img{
    width:100%;
    height:100%;
    border-radius:50%
}
/* 内容 */
.content{
    width:73%;
    height:33rem;
  
    margin-left:3.5rem;
    margin-top:2rem
}
.content i{
    word-wrap: break-word;
    word-break: break-all;
    height: 2rem;
    margin-top: 2.5rem;
    color:#989da1
}
/* 填写信息 */
.founn1{
    width:100%;
    height:3rem;
    border-bottom:solid 1px #c5c5c5 ;
    margin:2rem 1rem 0 0rem
}
input{
    width:100%;
    height:100%;
    border:none;
    font-size:1.09rem;
    outline:none;
    color:#989da1

}
input::-webkit-input-placeholder {
    color: #c6c6c6
}
.erwei{
    width:100%;
    height:16rem;
    background:yellow;
    margin-top:2rem
}
button{
    width:100%;
    height:3rem;
    margin-top:3rem;
    background:#d7d7d7;
    border:none;
    color:#fff;
    border-radius:0.6rem
}

</style>