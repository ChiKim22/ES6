import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from '../views/ReadMemo.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, },
  { path: '/add', name: 'Add', component: Add, meta:{reqAuth:true} }, // 전역 가드
  { path: '/read', name: 'Read', component: Read, meta:{reqAuth:true} },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/signin', name: 'Signin', component: Signin }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record)=>record.meta.reqAuth)){
    if(localStorage.getItem('accessToken') == null){
      alert('Signin please.')
      next('/signin');
    }
  }else {
    next();
  }
})

export default router;