<template>
  <div class="carry">
    <!-- 头部 -->
    <div class="carry-top" >
           <img src="../../assets/left.png" @click="Hui"/>
          <i>ETH转账</i>
           <!-- <img src="../../assets/sao.jpg" @click="sao"/> -->
    </div>
    <div class="founn1">
        <input type="text" placeholder="收款人钱包地址"  v-model="dizhi" />
    </div>
    <div class="founn1">
        <input type="text" placeholder="转账金额"  v-model="jine" />
    </div>
    <div class="founn1">
        <input type="text" placeholder="备注"  v-model="beizhu" />
    </div>
    <div class="founn1">
        <input type="text" placeholder="自定义 Gas Price"  v-model="gasprice" />
    </div>
    <div class="founn1">
        <input type="text" placeholder="自定义 Gas"  v-model="gas" />
    </div>
    


    <button  @click="xbtn"> 下一步</button>
   
  </div>
</template>

<script>
import { ethers } from '../../static/js/ethers-v4.min.js'
import axios from'axios'

export default {
  name: 'carry',
  data:function(){
    return{
        dizhi:'',
        jine:'',
        beizhu:'',
        gasprice:'',
        gas:''
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
    // 下一步
    xbtn(){
        var that=this
        // 请求余额接口
       axios({
          method: 'POST',
          url:'https://api.etherscan.io/api?module=proxy&action=eth_estimateGas&apikey=4Y681I8SVGRZ6XHFSVRDV3TUKS675VRTH2',
		    params: {
                to:that.dizhi,
                value:that.jine,
                gasPrice:that.gasprice,
                gas:that.gas,
			}
		}).then((res) => {
            console.log(res.data,"kankan ")
           
		})

    },
    sao(){
        this.$router.push({ 
            path: "/Sao"
        });
    }
   

  },
  
 
}
</script>
<style scoped>
/* 头部 */

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
    background:#3fbcb6;
    border:none;
    color:#fff;
    border-radius:0.6rem
}




</style>
