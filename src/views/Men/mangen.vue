<template>
  <div class="mangen">
      <div class="mangen-top" @click="Hui">
          <img src="../../assets/left.png"/>
          <i>管理钱包</i>
      </div>
      <!-- 列表 -->
      <div class="manList" v-for="(item,index) in list" :key="index" @click="Xiang(index)">
          <div class="listtop">
              <div class="top1">
                   <img  src="../../assets/top1.jpg"/>
              </div>
               <div class="top2">
                   <i>{{item.name}}</i>
                   <em> {{item.address | ellipsis}}</em>
              </div>
               <div class="top3">
                   <img src="../../assets/right.png"/>
              </div>
          </div>
          <div class="listfot">
              <i>0</i>
              <em>ether</em>
          </div>
      </div>
      <div style="width:100%;height:4rem"></div>




    <div class="mangen-footer">
        <div class="mfoot1" @click="found">
            <img  src="../../assets/bz.png"/>
            <i>创建钱包</i>
        </div>
        <div class="mfoot1" style="background:#046eb8" @click="daoru">
            <img  src="../../assets/bz.png"/>
            <i>导入钱包</i>
        </div>

    </div>

  
  </div>
</template>

<script>
export default {
  name: 'Mangen',
  data:function(){
    return{
        hashName:'',
        list:[],
    
    }
  },
  mounted:function(){
    // 获取地址和昵称
   var itemList=JSON.parse(localStorage.getItem("qconnt"))
   console.log(itemList,"看看")
   this.list=itemList


  },
  // 方法
  methods:{
    //  返回上一页
    Hui(){
        this.$router.go(-1)
    },
    // 去创建
    found(){
        this.$router.push({ 
            path: "/Found" ,
        
        });
    },
    // 去详情页
    Xiang(index){

        var value=index
        this.$router.push({ 
            path: "/Xiang",
            query:{
               value
            }

        })
    
    
    },
    // 去导入钱包
     daoru(){
      this.$router.push({ 
        path: "/Daoru" ,
        
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
body{
    overflow-y:auto
}
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
    font-size: 1.1rem;
    font-weight: bold;
    
}
/* 列表 */
.manList{
    width:94%;
    height:9rem;
    background:#ececec;
    margin:1rem 0.5rem 0 0.8rem;
    border-radius: 0.6rem;
    overflow:hidden
}
.listtop{
    width:100%;
    height:4rem;
    display: flex;
    margin-top:1rem
}
.top1{
    width:20%;
    height:4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top1 img{
    width:3rem;
    height:3rem;
    border-radius:50%
}
.top2{
    width:60%;
    height:4rem;
   
}
.top2 i{
    text-align: left;
    margin-top: 0.5rem;
}
.top2 em{
    color:#b8bec0;
    margin-top:0.5rem
}
.top3{
    width:20%;
    height:4rem;
   
}
.top3 img{
    width:2rem;
    height:2rem;
    margin-left:2rem
}
.listfot{
    width:95%;
    height:3rem;
    display:flex;
    justify-content: flex-end;
   margin-top: 2rem;
}
.listfot i{
    width:5%;
    font-size:1.5rem
}
.listfot em{
    margin-top: 0.5rem;
    margin-left: 0.3rem;
    color:#b8bec0
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