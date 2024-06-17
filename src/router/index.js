import { createRouter,createWebHistory } from "vue-router";
 const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/login",
            name:'login',
            component:()=>import('../views/Login.vue')
        }
    ]

})

export default router