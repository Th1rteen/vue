import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


import Advert from "./advert.vue"
import Content from "./content.vue"
import Showall from "./showall.vue"

import Sj from "./sj.vue"
import Jp from "./jp.vue"
import Sk from "./sk.vue"
import Wd from "./wd.vue"
import Detail from "./detail.vue"

import Boy from "./boy.vue"
import Girl from "./girl.vue"
import Out from "./out.vue"

import Login from "../components/login.vue"
import Register from "../components/register.vue"


var routes=[
    {
        path:"/",
        component:Advert
    },
    {
        path:"/index",
        name:"index",
        component:Showall,
        children:[
            {name:"sj",path:"sj",component:Sj},
            {name:"jp",path:"jp",component:Jp},
            {
                name:"sk",
                path:"/index/sk",
                component:Sk,
                redirect:{name:"boy"},
                children:[
                            {path:"boy",name:"boy",component:Boy},
                            {path:"girl",name:"girl",component:Girl},
                            {path:"out",name:"out",component:Out},
                            {path:"*",redirect:"/index/sk/boy"}
                        ]
            },
            {name:"wd",path:"wd",component:Wd},
            {path:"*",redirect:"/index/jp"}
        ]
    },
    {
        name:"detail",path:"/detail/:id",component:Detail
    },
    {
        path:"/login",name:"login",component:Login
    },
    {
        path:"/register",name:"register",component:Register
    }
]

var router=new VueRouter({
    routes
})

export default router;