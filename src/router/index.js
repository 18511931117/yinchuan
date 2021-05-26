import Vue from 'vue'
import Router from 'vue-router'
import login from "@/view/login/index"
import home from "@/components/home/home"
import index from "@/view/index/index"
import notfind from "@/view/error/notFind"

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:'login',
      component:login
    },
    {
      path: '*',
      name: 'notfind',
      component: notfind
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/index',
      children:[
        {
          path: "/index",
          name: "index",
          component:index
        }
      ]
    },
    
  ]
})
