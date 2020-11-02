import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from'../views/user.vue'
import Mangen from'../views/Men/mangen.vue'
import Found from'../views/Men/found.vue'
import Daoru from'../views/Men/daoru.vue'
import Index from'../views/home/index.vue'
import Login from'../views/login/login.vue'
import keylogin from'../views/login/keylogin.vue'
import zhulogin from'../views/login/zhulogin.vue'
import carry from'../views/home/carry.vue'
import Zcarry from'../views/home/Zcarry.vue'
import Xiang from'../views/Men/manxiang.vue'
import Sao from'../views/home/sao.vue'

Vue.use(VueRouter)



const router = new VueRouter({
  // routes
  mode: "hash",
  
  routes: [
    {
      path: '/'
     
    },
    {
      path: "/Home",
      name: "Home",
      meta: {
        title: "首页",
        keepAlive: true,
      },
      component: Home
    },
    {
      path: "/User",
      name: "User",
      meta: {
        title: "我的",
        keepAlive: true,
        footer: true,
        backgroundColor: "#fff"
      },
      component: User
    },
    {
      path: "/Mangen",
      name: "Mangen",
      component: Mangen
    },
    {
      path: "/Found",
      name: "Found",
      component: Found
    },
    {
      path: "/Daoru",
      name: "Daoru",
      meta: {
        title: "导入",
      },
      component: Daoru
    },
    {
      path: "/Index",
      name: "Index",
      component: Index
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/keylogin",
      name: "keylogin",
      meta: {
        title: "获助记词",
      },
      component: keylogin
    },
    {
      path: "/zhulogin",
      name: "zhulogin",
      meta: {
        title: "填助记词",
      },
      component: zhulogin
    },
    {
      path: "/carry",
      name: "carry",
      meta: {
        title: "转账",
      },
      component: carry
    },
    {
      path: "/Zcarry",
      name: "Zcarry",
      meta: {
        title: "转账里",
      },
      component: Zcarry
    },
    {
      path: "/Xiang",
      name: "Xiang",
      meta: {
        title: "详情",
      },
      component: Xiang
    },
    {
      path: "/Sao",
      name: "Sao",
      meta: {
        title: "详情",
      },
      component: Sao
    }
  
  
   
  ]
})

// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆


const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};


export default router
