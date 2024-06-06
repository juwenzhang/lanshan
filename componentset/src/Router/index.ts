// 首先先开始配置我们的路由选项
import {createRouter, createWebHistory} from "vue-router"

// 开始导入我们的需要进行路由配置的选项
import Datacomponent from "./routercomponent/Datacomponent.vue"
import Formcomponent from "./routercomponent/Formcomponent.vue"
import Modelcomponent from "./routercomponent/Modelcomponent.vue"
import Drawercomponent from "./routercomponent/Drawercomponent.vue"
import Navcomponent from "./routercomponent/Navcomponent.vue"
import Home from "./routercomponent/Home.vue"
import Buttoncomponent from "./routercomponent/Buttoncomponent.vue"
import Messagecomponent from "./routercomponent/Messagecomponent.vue"



// 开始创建路由器
const router = createRouter({
    // 首先先确定工作模式
    history:createWebHistory(),
    routes:[
        {
            name:"Home",
            path:"/home", 
            component:Home,
        },
        {
            name:"datacomponent",
            path:"/datacomponent",
            component:Datacomponent
        },
        {
            name:"formcomponent", 
            path:"/formcomponent", 
            component:Formcomponent
        },
        {
            name:"drawercomponent",
            path:"/drawercomponent",
            component:Drawercomponent
        },
        {
            name:"navcomponent",
            path:"/navcomponent",
            component:Navcomponent
        },
        {
            name:"modelcomponent",
            path:"/modelcomponent",
            component:Modelcomponent
        },
        {
            name:"buttomcomponent",
            path:"/buttoncomponent",
            component:Buttoncomponent
        },
        {
            name:"messagecomponent",
            path:"/messagecomponent",
            component:Messagecomponent
        },
        // 开始进行一些操作来解决我们的/的问题
        {
            path:"/",
            redirect:"/home"
        }
    ]
})

// 最后一步，将路由器进行暴露并且给外部使用
export default router;