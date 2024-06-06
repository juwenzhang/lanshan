# componentset

## 简介

一个 Vue 组件

## 使用

1. 安装

```
npm i componentset
```

2. 全局注册

```ts
import {createApp} from "vue" 
import componentset from 'componentset'
let app = createApp()
app.use(componentset)
```

<br>

## 1.路由的配置

src/Router/index.ts
```ts
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
```
<br>

## 2.用于进行全局配置的配置

```ts
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
```

<br>

## 3.轮播图组件

组件所在位置：src/Router/routercomponent/Home.vue

```
1.普通的轮播图效果

2.卡片式的轮播图效果
```
```html
<template>
    <!-- 开始我们的第一个轮播图的组件开始 -->
    
    <div class="block text-center" style="text-align:center">
        <h3>这个是普通的轮播图效果</h3>
        <el-carousel height="300px">
            <el-carousel-item v-for="image in imageList" :key="image.id">
                <img :src="image.image" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>

    <div class="block text-center" style="text-align:center">
        <h3>这个是卡片式的轮播图效果</h3>
        <el-carousel height="300px" type="card">
            <el-carousel-item v-for="image in imageList" :key="image.id">
                <img :src="image.image" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts" name="Home01">
    // 开始导入图片
    import image01 from "@/components/images/01.jpg"
    import image02 from "@/components/images/02.jpg"
    import image03 from "@/components/images/03.jpg"
    import image04 from "@/components/images/04.jpg"
    import image05 from "@/components/images/05.jpg"

    // 导入渲染页面的图片
    import {reactive} from "vue"


    let imageList = reactive([
        {image:image01, id:1},
        {image:image02, id:2},
        {image:image03, id:3},
        {image:image04, id:4},
        {image:image05, id:5},
    ])
</script>

<style scoped>
    h3{
        margin: 10px auto;
        clear:both;
    }
    

    :deep(.el-carousel__arrow--left){
        color:red;
        font:50px solid;
        opacity: 0.5;
        background: skyblue;
    }

    :deep(.el-carousel__indicators--horizontal){
        background-color: red;
    }
</style>
```

<br>

## 4.data数据展组件

文件路径： src/Router/routercomponent/Datacomponent.vue

```
1.普通日期表组件

2.普通card卡片组件

3.图片的卡片组件

4.折叠面板组件

5.空状态描述组件

6.空状态和折叠面板的混合使用
```

```html
<template>
  <!--开始我们的数据展示的组件-->
  <hr>
  <p>普通日期表的展现</p>
  <el-calendar v-model="date"></el-calendar>

  <hr>
  <p>普通card卡片的展现</p>
  <el-card style="max-width: 500px;">
    <template #header>
        <p>一个卡片的插槽头部</p>
    </template>
    <div v-for="i in 4" :key="4" class="text-item">部分{{i}}<br></div>
    <temalate #footer>
      <p>一个卡片的插槽底部</p>
    </temalate>
  </el-card>

  <hr>
  <p>图片的卡片实现</p>
  <el-card style="max-width: 500px">
    <template #header>
      图片
    </template>
    <div><img src="@/components/images/01.jpg" alt="" ></div>
    <div></div>
  </el-card>

  <hr>
  <p>折叠面板的实现</p>
  <el-collapse v-model="activeNames" @change="handleGet">
    <el-collapse-item title="折叠面板实现自我介绍" name="1">
      <div>大家好，我叫鞠志鸿，来自于重庆市垫江县沙河乡，就读于重庆邮电大学</div>
      <div>我们的年龄是2024年满18岁</div>
      <div>我的专业是：软件工程专业</div>
    </el-collapse-item>
  </el-collapse>

  <hr>
  <p>空状态的实现</p>
  <el-empty description="description" />
  <hr>
  <el-collapse v-model="activename" @change="handleGet">
    <el-collapse-item title="空描述和折叠面板的使用" name="1">
      <el-empty description="description" />
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
  import {ref, reactive} from "vue"
  let date = ref(new Date());

  let activeNames = ref<string[]>([""]);
  let activename = ref<string>()
  function handleGet(val:string) {
    console.log(val)
  }
</script>
```

<br>

## 5.表单组件

文件路径：src/Router/routercomponent/Formcomponent.vue

```
注意：下面的文本域都进行了禁止拖拉

1.普通的输入框组件

2.密码框组件

3.普通文本域组件

4.设置输入文本长度的文本域组件

5.限制输入长度以及行数的文本域组件

6.前置组件

7.后置组件

8.前后置混合组件

9.前后置的升级使用组件

10.单选框组件

11.多选框组件

12.下拉框组件

13.多选下拉框组件

14.日期/日期时间组件

15.表单综合组件
```

```html
<template>
  <hr>
  <div class="box">
    <p>普通的输入框</p>
    <el-input type="text" v-model="name" placeholder="请输入你的名字" clearable style="width: 300px;" />
    <hr>
    <p>密码框</p>
    <el-input type="password" v-model="password" show-password placeholder="请输入密码" clearable style="width: 300px;"/>
    <hr>
    <p>普通文本域</p>
    <el-input type="textarea" v-model="content" placeholder="请输入内容" clearable resize="none"
    style="width:300px"/>
    <hr>
    <p>设置输入文本长度的文本域</p>
    <el-input type="textarea" v-model="content01" placeholder="请输入内容"  maxlength="10" clearable resize="none"
    style="width:300px"/>
    <hr>
    <p>限制输入长度以及行数的文本域</p>
    <el-button @click="show"><label for="three">显示/隐藏文本框</label></el-button>
    <el-input type="textarea" id="three" v-model="content02" placeholder="请输入内容" rows="10"
              clearable resize="none" v-show="isShow" maxlength="100" show-word-limit style="width: 500px">
    </el-input>

    <hr>
    <p>前置</p>
    <el-input style="width:500px">
      <template #prepend>前置</template>
    </el-input>
    <hr>
    <p>后置</p>
    <el-input style="width:500px">
      <template #append>后置</template>
    </el-input>
    <hr>
    <p>前后置</p>
    <el-input style="width:500px">
      <template #prepend>前置</template>
      <template #append>后置</template>
    </el-input>


    <hr>
    <p>前后置的升级使用</p>
    <el-input style="width: 500px" placeholder="请输入你要从事的职业" type="text">
      <!--首先先来开始我们的前置部分-->
      <template #prepend>
        <el-select placeholder="请选择" style="width: 100px">
          <el-option v-for="select in selected" :label=select.name :value=select.index />
        </el-select>
      </template>

      <template #append>
        <el-button info style="width: 50px">
          <el-icon><Search /></el-icon>
        </el-button>
      </template>
    </el-input>

    <hr>
    <p>单选框</p>
    <el-radio v-model="radio" value="1">前端</el-radio>
    <el-radio v-model="radio" value="2">后端</el-radio>
    <el-radio v-model="radio" value="3">全栈</el-radio>


    <hr>
    <p>多选框</p>
    <el-checkbox-group v-model="checkbox">
      <el-checkbox value="1">前端</el-checkbox>
      <el-checkbox value="2">后端Java组</el-checkbox>
      <el-checkbox value="3">后端Go组</el-checkbox>
      <el-checkbox value="4">后端Rust组</el-checkbox>
      <el-checkbox value="5">运维</el-checkbox>
    </el-checkbox-group>


    <hr>
    <p>下拉框</p>
    <el-select v-model="select" style="width:220px" placeholder="请选择你想加入学习的部门">
      <el-option value="前端">前端</el-option>
      <el-option value="后端Java组">后端Java组</el-option>
      <el-option value="后端Go组">后端Go组</el-option>
      <el-option value="后端Rust组">后端Rust组</el-option>
      <el-option value="运维">运维</el-option>
    </el-select>

    <hr>
    <p>多选下拉框</p>
    <el-select v-model="select" style="width:220px" placeholder="请选择你想加入学习的部门" multiple>
      <el-option value="前端">前端</el-option>
      <el-option value="后端Java组">后端Java组</el-option>
      <el-option value="后端Go组">后端Go组</el-option>
      <el-option value="后端Rust组">后端Rust组</el-option>
      <el-option value="运维">运维</el-option>
    </el-select>

    <hr>
    <p>日期/日期时间/</p>
    <el-date-picker v-model="date" type="date" placeholder="请选择你的日期" />
    <br>
    <el-date-picker v-model="datetime" type="datetime" placeholder="请选择你的日期时间"></el-date-picker>


    <hr>
    <p>表单</p>
    <p>表单就是将前面的一些内容进行整合到一起</p>

    <el-form>
      <el-form-item>
        请选择时间&nbsp&nbsp<el-date-picker placeholder="请选择时间" v-model="date01"/>
      </el-form-item>

      <el-form-item>
        请选择你要从事的工作&nbsp&nbsp
        <el-radio-group v-model="radio01">
          <el-radio value="1">前端</el-radio>
          <el-radio value="2">后端Java组</el-radio>
          <el-radio value="3">后端Go组</el-radio>
          <el-radio value="4">前端Rust组</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        今天吃什么<el-icon><Bowl /></el-icon>&nbsp&nbsp
        <el-checkbox-group v-model="checkbox01">
          <el-checkbox value="1">红烧肉</el-checkbox>
          <el-checkbox value="2">糖醋排骨</el-checkbox>
          <el-checkbox value="3">鱼香肉丝</el-checkbox>
          <el-checkbox value="4">宫保鸡丁</el-checkbox>
          <el-checkbox value="5">回锅肉</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import {ref, reactive} from "vue"

  let name = ref<string>()
  let password = ref<number | string>("")
  let content = ref<string>()
  let content01 = ref<string>()
  let isShow = ref(false)
  let content02 = ref<string>()
  let selected = reactive([{name:"前端", index:1}, {name:"后端", index:2}, {name:"全栈", index:3}])

  let radio = ref()
  let checkbox = ref()
  let select = ref()
  let date = ref()
  let datetime = ref()


  let radio01 = ref()
  let date01 = ref()
  let checkbox01 = ref()

  // 通过给按钮一个行为来控制文本框的展现
  function show(){
    if(isShow.value === false){
      isShow.value = true
    }
    else{
      isShow.value = false
    }
  }

</script>
```


<br>

## 6.导航组件

文件路径：src/Router/routercomponent/Navcomponent.vue

```
1.默认的垂直导航组件

2.水平导航组件

3.添加背景色导航

4.添加字体颜色导航

5.设置点击后的颜色导航

6.面包屑导航

7.触碰后的下拉菜单导航
```
```html
<template>
  <!--进行导航的书写的时候，使用额标签是我们的el-menu-->
  <!--导航默认的是我们的垂直导航-->
  <hr>
  <h3>默认的垂直导航</h3>
  <el-menu :default-active="selectedIndex" @select="selected">
    <el-sub-menu index="1">
      <template #title>第一部分（点击收回或者显示）</template>
      <el-menu-item index="1-1">重庆</el-menu-item>
      <el-menu-item index="2-2">四川</el-menu-item>
      <el-menu-item index="3-3">云南</el-menu-item>
      <el-menu-item index="1-4">贵州</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>第二部分</template>
      <el-menu-item index="2-1">我是2-1</el-menu-item>
      <el-menu-item index="2-2">我是2-2</el-menu-item>
      <el-menu-item index="2-3">我是2-3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>第三部分</template>
      <el-menu-item index="3.1">王者荣耀</el-menu-item>
      <el-menu-item index="3.1">和平精英</el-menu-item>
      <el-menu-item index="3.1">原神启动</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <hr>

  <h3>水平导航</h3>
  <el-menu :default-active="selectedIndex" @select="selected" mode="horizontal">
    <el-sub-menu index="1">
      <template #title>第一部分（点击收回或者显示）</template>
      <el-menu-item index="1-1">重庆</el-menu-item>
      <el-menu-item index="1-2">四川</el-menu-item>
      <el-menu-item index="1-3">云南</el-menu-item>
      <el-menu-item index="1-4">贵州</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>第二部分</template>
      <el-menu-item index="2-1">我是2-1</el-menu-item>
      <el-menu-item index="2-2">我是2-2</el-menu-item>
      <el-menu-item index="2-3">我是2-3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>第三部分</template>
      <el-menu-item index="3.1">王者荣耀</el-menu-item>
      <el-menu-item index="3.1">和平精英</el-menu-item>
      <el-menu-item index="3.1">原神启动</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <hr>
  <h3>设置背景色的导航</h3>
  <el-menu :default-active="selectedIndex" @select="selected" mode="horizontal" background-color="yellow">
    <el-sub-menu index="1">
      <template #title>第一部分（点击收回或者显示）</template>
      <el-menu-item index="1-1">重庆</el-menu-item>
      <el-menu-item index="1-2">四川</el-menu-item>
      <el-menu-item index="1-3">云南</el-menu-item>
      <el-menu-item index="1-4">贵州</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>第二部分</template>
      <el-menu-item index="2-1">我是2-1</el-menu-item>
      <el-menu-item index="2-2">我是2-2</el-menu-item>
      <el-menu-item index="2-3">我是2-3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>第三部分</template>
      <el-menu-item index="3.1">王者荣耀</el-menu-item>
      <el-menu-item index="3.1">和平精英</el-menu-item>
      <el-menu-item index="3.1">原神启动</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <hr>
  <h3>设置字体颜色的导航</h3>
  <el-menu :default-active="selectedIndex" @select="selected" mode="horizontal" text-color="red">
    <el-sub-menu index="1">
      <template #title>第一部分（点击收回或者显示）</template>
      <el-menu-item index="1-1">重庆</el-menu-item>
      <el-menu-item index="1-2">四川</el-menu-item>
      <el-menu-item index="1-3">云南</el-menu-item>
      <el-menu-item index="1-4">贵州</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>第二部分</template>
      <el-menu-item index="2-1">我是2-1</el-menu-item>
      <el-menu-item index="2-2">我是2-2</el-menu-item>
      <el-menu-item index="2-3">我是2-3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>第三部分</template>
      <el-menu-item index="3.1">王者荣耀</el-menu-item>
      <el-menu-item index="3.1">和平精英</el-menu-item>
      <el-menu-item index="3.1">原神启动</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <hr>
  <h3>设置的点击后的颜色导航</h3>
  <el-menu :default-active="selectedIndex" @select="selected" mode="horizontal"
           text-color="skyblue" active-text-color="red">
    <el-sub-menu index="1">
      <template #title>第一部分（点击收回或者显示）</template>
      <el-menu-item index="1-1">重庆</el-menu-item>
      <el-menu-item index="1-2">四川</el-menu-item>
      <el-menu-item index="1-3">云南</el-menu-item>
      <el-menu-item index="1-4">贵州</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>第二部分</template>
      <el-menu-item index="2-1">我是2-1</el-menu-item>
      <el-menu-item index="2-2">我是2-2</el-menu-item>
      <el-menu-item index="2-3">我是2-3</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>第三部分</template>
      <el-menu-item index="3.1">王者荣耀</el-menu-item>
      <el-menu-item index="3.1">和平精英</el-menu-item>
      <el-menu-item index="3.1">原神启动</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <h3>同时我们还可以通过设置style来控制每一个导航的大小，这里就不做展示了</h3>

  <br>
  <hr>
  <h3>面包屑的实现</h3>
  <el-breadcrumb separator=",">
    <el-breadcrumb-item>王者荣耀</el-breadcrumb-item>
    <el-breadcrumb-item>和平精英</el-breadcrumb-item>
    <el-breadcrumb-item>原神启动</el-breadcrumb-item>
  </el-breadcrumb>

  <hr>
  <h3>下拉菜单的实现</h3>
  <el-dropdown element-loading-background="#fff">
    <span>
      选择你要就业的岗位<el-icon><User /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>前端</el-dropdown-item>
        <el-dropdown-item>后端</el-dropdown-item>
        <el-dropdown-item>全栈</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
  import { defineComponent as _defineComponent } from "vue";
  import {ref} from "vue"
  // 开始数据的创建
  let selectedIndex = ref("2-2")

  const selected = ()=>{
    console.log("主键创建完成")
  }
</script>
```

<br>

## 7.model对话组件

文件路径：src/Router/routercomponent/Modelcomponent.vue

```
1.显示表单的Model组件(普通对话框)

2.不同的alert对话框组件
```
```html
<template>
  <hr>
  <p>普通的对话框</p>
  <el-button @click="dialog=true">点击打开表单</el-button>
  <el-dialog v-model="dialog" width="30%" title="表单" @close="dialog=false">
    <el-form>
      <!--开始表单的第一个部分，日期的使用-->
      <el-form-item>
        日期&nbsp&nbsp
        <el-date-picker type="datetime" v-model="data.date" placeholder="请选择时间"></el-date-picker>
      </el-form-item>

      <!--单选框-->
      <el-form-item>
        选择你想参与的部门(单选)&nbsp&nbsp
        <el-radio-group v-model="data.radio">
          <el-radio value="前端">前端</el-radio>
          <el-radio value="后端Java组">后端Java组</el-radio>
          <el-radio value="后端Go组">后端Go组</el-radio>
          <el-radio value="后端Rust组">后端Rust组</el-radio>
          <el-radio value="运维">运维</el-radio>
          <el-radio value="产品">产品</el-radio>
          <el-radio value="全栈">全栈</el-radio>
        </el-radio-group>
      </el-form-item>

      <!--多选框-->
      <el-form-item>
        今天中午吃什么<el-icon><Bowl /></el-icon>(多选)&nbsp&nbsp
        <el-checkbox-group v-model="data.checkbox">
          <el-checkbox value="糖醋排骨">糖醋排骨</el-checkbox>
          <el-checkbox value="青椒肉丝">青椒肉丝</el-checkbox>
          <el-checkbox value="红烧肉">红烧肉</el-checkbox>
          <el-checkbox value="酸菜鱼">酸菜鱼</el-checkbox>
          <el-checkbox value="回锅肉">回锅肉</el-checkbox>
          <el-checkbox value="番茄炒蛋">番茄炒蛋</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-button @click="LookYourSelect">查看你的具体选择</el-button>
      <el-button @click="ResetYourSelect">重置你的选择</el-button>
    </el-form>
  </el-dialog>


  <!--开始显示不同的提示框-->
  <hr>
  <h3>不同颜色的自定义的alert框</h3>
  <p>默认的light组</p>
  <el-alert type="success" title="success alert" style="width: 300px"></el-alert>
  <el-alert type="warning" title="warning alert" style="width: 300px"></el-alert>
  <el-alert type="info" title="info alert" style="width: 300px"></el-alert>
  <el-alert type="error" title="error alert" style="width: 300px"></el-alert>
  <p>设置的dark组</p>
  <el-alert type="success" title="success alert" style="width: 300px" effect="dark"></el-alert>
  <el-alert type="warning" title="warning alert" style="width: 300px" effect="dark"></el-alert>
  <el-alert type="info" title="info alert" style="width: 300px" effect="dark"></el-alert>
  <el-alert type="error" title="error alert" style="width: 300px" effect="dark"></el-alert>
  <p>设置图标dark组</p>
  <el-alert type="success" title="success alert" style="width: 300px" effect="dark" show-icon></el-alert>
  <el-alert type="warning" title="warning alert" style="width: 300px" effect="dark" show-icon></el-alert>
  <el-alert type="info" title="info alert" style="width: 300px" effect="dark" show-icon></el-alert>
  <el-alert type="error" title="error alert" style="width: 300px" effect="dark" show-icon></el-alert>
  <p>文字居中组</p>
  <el-alert type="success" title="success alert" style="width: 300px" show-icon center></el-alert>
  <el-alert type="warning" title="warning alert" style="width: 300px" show-icon center></el-alert>
  <el-alert type="info" title="info alert" style="width: 300px" show-icon center></el-alert>
  <el-alert type="error" title="error alert" style="width: 300px" show-icon center></el-alert>
</template>

<script setup lang="ts">
  // 导入模块
  import {ref, reactive} from "vue";

  // 数据
  let dialog = ref(false);



  let data = reactive({
    date:"",
    radio:"",
    checkbox:[]
  })

  // 方法
  function LookYourSelect(){
    alert("日期："+data.date+",工作选择是："+data.radio+",中午想吃的是："+data.checkbox)
  }

  function ResetYourSelect(){
    data.date=""
    data.radio=""
    data.checkbox=[]
  }

</script>
```

<br>

## 8.抽屉组件

文件路径：src/Router/routercomponent/Drawercomponent.vue

```
1.普通的抽屉组件
   
   1.1 primary抽屉组件
   
   1.2 warning抽屉组件
   
   1.3 info抽屉组件
   
   1.4 success抽屉组件

2.嵌套组件
```

```html
<template>
  <hr>
  <p>普通的抽屉组件</p>
  <el-button-group>
    <el-button type="primary" style="margin-left: 16px" @click="drawer01 = true">primary</el-button>
    <el-button type="warning" style="margin-left: 16px" @click="drawer02 = true">warning</el-button>
    <el-button type="info" style="margin-left: 16px" @click="drawer03 = true">info</el-button>
    <el-button type="success" style="margin-left: 16px" @click="drawer04 = true">success</el-button>
  </el-button-group>
  <el-drawer v-model="drawer01" title="Header">
    <span>primary drawer</span>
  </el-drawer>

  <el-drawer v-model="drawer02" title="Header">
    <span>warning drawer</span>
  </el-drawer>

  <el-drawer v-model="drawer03" title="Header">
    <span>info</span>
  </el-drawer>

  <el-drawer v-model="drawer04" title="Header">
    <span>success drawer</span>
  </el-drawer>


  <hr>
  <p>嵌套抽屉</p>
  <p>这个的话，我们如果想要嵌套，理论上是可以完成一直嵌套下去的，但是如果你实践下去就不是你想要的效果</p>
  <p>但是我们是可以实现基本的一个套多个抽屉的操作的</p>
  <el-button @click="Drawer=true" type="danger">点击开始嵌套抽屉循环</el-button>
  <el-drawer v-model="Drawer" title="我喜欢你" size="40%" :show-close="false">
    <el-button @click="Drawer01=true" type="info">点击第二阶段</el-button>
    <el-drawer v-model="Drawer01" title="我一直梦想着有朝一日我可以娶你，但是不可能咯" size="30%" show-close="false">
      <el-button @click="Drawer01=false" type="danger">点击返回上一层</el-button>
    </el-drawer>
    <br><br>
    <el-button @click="Drawer02=true" type="warning">点击第三阶段</el-button>
    <el-drawer v-model="Drawer02" title="我想说我用来爱你，小露儿" size="30%" show-close="false">
      <el-button @click="Drawer02=false" type="danger">点击返回上一层</el-button>
    </el-drawer>
    <br>
    <br>
    <el-button @click="Drawer=false" type="success">关闭抽屉，拜拜，露儿</el-button>
  </el-drawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const drawer01 = ref(false)
  const drawer02 = ref(false)
  const drawer03 = ref(false)
  const drawer04 = ref(false)

  const Drawer = ref(false)
  const Drawer01 = ref(false)
  const Drawer02 = ref(false)
</script>

```

<br>

## 9.Button组件

文件路径：src/Router/routercomponent/Buttoncomponent.vue

```
1.不同颜色式设计的Button组件

2.不同形状的Button组件

3.不同大小的Button组件

4.图表组件

5.组件组
```

```html
<template>
    <!-- 开始完成我们的button组件的设计 -->
    <div>
        <h1><el-button>我们使用的按钮组件的标签是:el-button</el-button></h1>
        <h3>不同颜色的button组件</h3>
        <el-button type="primary">蓝色按钮</el-button>
        <el-button type="success">绿色按钮</el-button>
        <el-button type="info">灰色按钮</el-button>
        <el-button type="warning">棕色组件</el-button>
        <el-button type="danger">红色组件</el-button>
        <hr>
        <h3>不同形状组件</h3>
        <el-button plain>朴素按钮</el-button>
        <el-button round>圆角按钮</el-button>
        <el-button circle>圆按钮</el-button>
        <el-button disabled>禁用按钮</el-button>
        <el-button loading>加载组件</el-button>
        <hr>
        <h3>不同大小组件</h3>
        <el-button size="large">大按钮</el-button>
        <el-button>普通按钮</el-button>
        <el-button size="small">小按钮</el-button>
        <hr>
        <h3>开始使用el-button-group来实现组合式的按钮</h3>
        <h3>注意这里结合了我们的el-icon来一起使用</h3>
        <!-- 我们可以通过size以及color来控制图标的颜色 -->
        <el-button type="primary"><el-icon><Plus /></el-icon></el-button>
        <el-button type="primary"><el-icon size="30"><Open /></el-icon></el-button>
        <el-button type="primary"><el-icon size="30"><TurnOff /></el-icon></el-button>
        <el-button type="primary"><el-icon color="red"><Unlock /></el-icon></el-button>

        <h3>按钮组</h3>
        <el-button-group>
            <el-button type="primary"><el-icon><Plus /></el-icon></el-button>
            <el-button type="primary"><el-icon size="30"><Open /></el-icon></el-button>
            <el-button type="primary"><el-icon size="30"><TurnOff /></el-icon></el-button>
            <el-button type="primary"><el-icon color="red"><Unlock /></el-icon></el-button>
        </el-button-group>
        
    </div>
</template>

<script setup lang="ts">

</script>
```

<br>

## 10.Message组件

文件路径：src/Router/routercomponent/Messagecomponent.vue

```
1.消息通知的三组件

2.气泡提示信息组件
```

```html
<template>
<!--  开始添加html结构-->
  <hr>
  <p>消息通知的三个种类</p>
  <el-button type="primary" @click="openMessage">获取消息且自动消失</el-button>
  <el-button type="primary" @click="openMessage01">获取消息人为手动取消</el-button>

  <el-button type="primary" @click="openConfirm">确认消息</el-button>

  <el-button type="primary" @click="openNotification">提示消息</el-button>

  <br><br>
  <hr>
  <p>气泡确认框</p>
  <el-popconfirm title="你确定删除？">
    <template #reference>
      <el-button type="success">删除</el-button>
    </template>
  </el-popconfirm>
  <el-popconfirm title="你确定删除？">
    <template #reference>
      <el-button type="danger">删除</el-button>
    </template>
  </el-popconfirm>
  <el-popconfirm title="你确定删除？">
    <template #reference>
      <el-button type="info">删除</el-button>
    </template>
  </el-popconfirm>
  <el-popconfirm title="你确定删除？">
    <template #reference>
      <el-button type="primary">删除</el-button>
    </template>
  </el-popconfirm>
</template>

<script setup name="Messagecomponent">
    // 首先我们先开始导入使用的模块
    import {ElMessage, ElMessageBox, ElNotification} from "element-plus"

    // 然后开始使用他们的函数
    // 获取的到消息
    // 所以说，在这里我们是不可以使用ts模式的，否则报错
    const openMessage = () => {
        ElMessage({
            message:"欢迎来到vue组件库",
            type:"primary",
            showClose:false
        })
    }

    const openMessage01 = () => {
      ElMessage({
        message:"欢迎来到vue组件库",
        type:"primary",
        showClose:true
      })
    }

    // 确认消息
    const openConfirm = () => {
        ElMessageBox.confirm("确认消息", "欢迎来到vue组件库", {
            type:"warning",
            confirmButtonText:"确认",
            concelButtonText:"取消"
        }).then(()=>{
            console.log("确认")
        }).catch(()=>{
            console.log("取消")
        })
    }

    // 消息通知
    const openNotification = () => {
      ElNotification({
        type:"warning",  // 经过多次调试，这个里面的按钮类型不可为：primary
        title:"vue",
        message:"hello vue",
        duration:1500,
        position:"bottom-right",  // 注意这里是没有那个居中的位置属性的，只可以在四个角进行位置的展现
      })
    }
</script>
```

# 注意事项
```
注意：可能网页中的命名和这个readme上的组件命名不同
放心后面还是会进行修改的
```
参考网页
<a>https://element-plus.midfar.com/zh-CN/component/button.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95</a>