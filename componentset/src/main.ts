// 这个里面的模块进行的是全局使用的
import { createApp } from 'vue'
import router from "./Router/index"
import App from './App.vue'
// 然后将我们的element-plus进行全局引入
import ElementPlus from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 导入样式
import "element-plus/dist/index.css"
// 导入element-plus中的所有的图标
import * as ElementPlusIconVue from "@element-plus/icons-vue"
import * as SubMenu from 'element-plus/es/components/sub-menu/style/css';


let app = createApp(App);
// 然后开始使用路由
app.use(router)
// 然后进行使用
app.use(ElementPlus,{
    locale: zhCn,
})

// 如果想要使用element-plus中的图标，我们首先要进行注册
for(const [key, component] of Object.entries(ElementPlusIconVue)){
    app.component(key, component);
}

// 进行挂载app
app.mount("#app")