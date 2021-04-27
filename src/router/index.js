import Vue from 'vue'
import Router from 'vue-router'
//登录页面
import login from '@/views/login.vue'
//首页
import home from '@/views/home.vue'
//发布文章页面
import articleNew from '@/views/articleNew.vue'
//站点信息页面
import siteInfo from '@/views/siteInfo.vue'
//登录信息页面
import loginInfo from '@/views/loginInfo.vue'
//标签管理
import tags from '@/views/tags.vue'
//随笔管理
import essays from '@/views/essays.vue'
//文章管理
import articles from '@/views/articles.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: home
  },{
    path:'/home',
    component:home
  },{
    path:'/login',
    component:login
  },{
    path:'/articleNew',
    component:articleNew
  },{
    path:'/siteInfo',
    component:siteInfo
  },{
    path:'/loginInfo',
    component:loginInfo
  },{
    path:'/tags',
    component:tags
  },{
    path:'/essays',
    component:essays
  },{
    path:'/articles',
    component:articles
  }
] ; 

export default new Router({
  routes: routes,
  mode:'history'
})
