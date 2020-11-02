<template>
  <div class="mangen">
      <div class="mangen-top" @click="Hui">
          <img src="../../assets/left.png"/>
          <i>{{nicheng}}</i>
      </div>

    <div class="Xiang_top">
            <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1906469856,4113625838&fm=26&gp=0.jpg"/>
            <i>0 Ether</i>
            <em>{{hashName | ellipsis}}</em>
    </div>
    <div class="Xiang1">
        <h4>钱包名</h4>
        <h5>{{nicheng}}</h5>
    </div>

    <div class="Xiang2">
        <h4 class="Xingi">修改密码</h4>
        <img src="../../assets/right.jpg"/>
    </div>
    <div class="Xiang2">
        <h4 class="Xingi">导出私钥</h4>
        <img src="../../assets/right.jpg" @click="onClick"/>
    </div>
    <div class="Xiang2">
        <h4 class="Xingi">导出Keystore</h4>
        <img src="../../assets/right.jpg"  @click="onClick1"/>
    </div>
   
 <!-- <van-button type="default"  @click="onClick">正在审批</van-button> -->
    
    <!--私钥-->
    <van-dialog v-model="show" title="输入密码" show-cancel-button :beforeClose="chargeBtn">
        <van-field  v-model="message" autosize type="input" style="border:solid 1px;height:3rem;width:90%;margin-left:1rem  "/>
    </van-dialog>

    <div class="meng" v-if="value==1" >
        <div class="tanchu">
            <div style="width:100%;display:flex;">
                <h3 >导出私钥</h3>
                <img style="margin-left:5rem;margin-top:0.6rem" src="../../assets/cou1.jpg" @click="guan"/>
            </div>
            <div class="count1">
                安全警告:私钥未经加密，导出存在风险，建议使用助记词和 Keystore进行备份
            </div>
            
            <div class="count">
                {{siyao}}
            </div>
            <button style="background:#36bac7;color:#fff" :data-clipboard-text="siyao" @click="copy" id="copy_text" v-if="copyy==0" >复制</button>
             <button  v-if="copyy==1" >已复制</button>
        </div>
    </div>
    

    





      <button @click="selent">删除钱包</button>
  
  </div>
</template>

<script>
import Clipboard from'clipboard'
export default {
  name: 'Mangen',
  data:function(){
    return{
        hashName:'',
        nicheng:'',
        show:false,
        message:'',
        password:'',
        siyao:'',
        value:0,
        input:0,
        copyy:0,
        indexx:'',
        itemListt:''
    }
  },
  created(){
      console.log("0000")

    var index=this.$route.query.value
    this.indexx=this.$route.query.value
    console.log(this.$route.query.value,"看一下急")

    
    var itemList=JSON.parse(localStorage.getItem("qconnt"))
        // console.log(itemList[index],"看一下列表长什么样子")
        this.nicheng=itemList[index].name
        this.hashName=itemList[index].address
        this.password=itemList[index].password
        this.siyao=itemList[index].sky

  },
  // 方法
  methods:{
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
    // 关闭弹窗
    guan(){
         this.value=0
         this.copyy=0
    },
    // 获取私钥的
    onClick() {
       this.show = true;
    },
    chargeBtn(action, done) {//确认or取消
      if (action === 'cancel') {//取消按钮
        done();
      } else if (action === 'confirm') {//确定按钮
          //向后端传值并关闭dialog弹出框
            this.show = false;
            if(this.message !=this.password){
                 this.$toast("密码不正确");
            }else{
               this.value=1
            }
          };
        this.message='';
        done();
    },
 
    // 复制
    copy: function () {
        // var _this = this;
        var clipboard = new Clipboard('#copy_text');

        clipboard.on('success', e => {
            this.copyy=1
       
            this.$toast("复制成功");
            this.value=0
        // 释放内存
        clipboard.destroy()
        })
        clipboard.on('error', e => {
        // 不支持复制
        Message({
            message: '该浏览器不支持自动复制',
            type: 'warning'
        });
         this.$toast("复制失败");
        // 释放内存
        clipboard.destroy()
        })
    },
    // 复制
    onClick1(){
         this.$toast("暂未开启");
    },
    // 删除钱包
    selent(){
        var index=this.indexx
        
        var itemListt=JSON.parse(localStorage.getItem("qconnt"))
        itemListt.splice(index,1)
       
        localStorage.setItem('qconnt',JSON.stringify(itemListt))
        this.$toast("删除成功");
        this.$router.push({ 
            path: "/Mangen"
        
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
.mangen{
   height:100vh;
    /* background:#ececec */
}
.mangen-top{
    width:100%;
    height:3rem;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mangen img{
    width: 2rem;
    height: 2rem;
}

.mangen i{
    width: 88%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}
/*  */
.Xiang_top{
    width:100%;
    height:13rem;
    background:#f8f8f8;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Xiang_top img{
    width:3rem;
    height:3rem;
    border-radius:50%
}
.Xiang_top i{
    margin:0.6rem 0
}
.Xiang_top em{
   color:#c2c3c5
}
.Xiang1{
    width:90%;
    height:4rem;
    margin-left:1rem;
    border-bottom:solid 1px #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.Xiang1 h5{
    color:#919ba4;
    margin-top:0.3rem

}
.Xiang1 h4{
    color:#919ba4
}
.Xiang2{
    width:90%;
    height:3rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-left:1rem;
    border-bottom:solid 1px #f2f2f2
}
.Xingi{
    color:#919ba4;
    font-size:0.9rem
}

.Xiang2 img{
    width:1rem;
    height:1.5rem
}
/* 按钮 */
button{
    width:80%;
    height:3rem;
    text-align:center;
    line-height:3rem;
    background:#f1f2f4;
    color:#939aa4;
    margin-left:11%
}
/* 弹出框 */
.meng{
    background: #000;
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
}
.tanchu{
    width: 80%;
    background: #fff;
    height: 22rem;
    margin: 11%;
    margin-top: 45%;
    border-radius: 10px;


}
.count{
    width:82%;
    height:3rem;
    background:#eff3f6;
    margin-left:1rem;
    overflow: hidden;
    word-break: break-all;
    padding:1rem;
    margin-top:2rem
}
.count1{
    width:82%;
    height:2rem;
    background:#fef0ef;
    border:solid 1px #7c635e;
    margin-left:1rem;
    overflow: hidden;
    word-break: break-all;
    padding:1rem;
    margin-top:2rem;
    color:#9b6257
}
 h3{
  
    margin-top: 1rem;
    margin-left:8rem
}
</style>