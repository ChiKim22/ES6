import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../components/Books.vue'
import BookInfo from '../components/BookInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:bookId',
    name: 'BookInfo',
    component: BookInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router