import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Menus from '@/components/Menus.vue'
import MenuItem from '@/components/MenuItem'
import Events from '@/components/Events.vue'
import Reviews from '@/components/Reviews.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    mode:'history',
    routes: [
        { path:'/', component:Home},
        { path:'/menus', component:Menus},
        { path:'/menuitem', component:MenuItem},
        { path:'/events', component:Events, props:(route)=>({query_id:route.query.event_id})}, // 권장하지는 않는 방법.
        { path:'/events/:event_id', component:Events, props:true},
        { path:'/reviews', component:Reviews}
    ]
});