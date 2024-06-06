<template>
    <!-- 开始设计主页面的结构样式为 -->
    <div class="app">
        <!-- <h3>欢迎来到组件库</h3> -->
        <div class="box">
            <!-- 用于进行存放每个组件点击事件 -->
            <div class="box01">
                <span><RouterLink to="/home" active-class="active-link" class="link">轮播图</RouterLink></span>
                <span><RouterLink to="/datacomponent" active-class="active-link" class="link">data数据组件</RouterLink></span>
                <span><RouterLink to="/formcomponent" active-class="active-link" class="link">表单组件</RouterLink></span>
                <span><RouterLink to="/navcomponent" active-class="active-link" class="link">导航组件</RouterLink></span>
                <span><RouterLink to="/modelcomponent" active-class="active-link" class="link">model对话组件</RouterLink></span>
                <span><RouterLink to="/drawercomponent" active-class="active-link" class="link">抽屉组件</RouterLink></span>
                <span><RouterLink to="/Buttoncomponent" active-class="active-link" class="link">Button组件</RouterLink></span>
                <span><RouterLink to="/Messagecomponent" active-class="active-link" class="link">Message</RouterLink></span>
            </div>
        </div>
        <div class="showcomponent">
            <!-- 用于进行展示路由组件的位置 -->
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
    // 开始导入我们的几个路由组件
    import {RouterView, RouterLink} from "vue-router" 
</script>

<!-- 开始我们的样式的设计 -->
<!-- 首先样式的话含有我们的导航区 -->
<!-- 展示区 -->
<style scoped>
    /* 先开始样式的初始化 */
    .app{
        /* 先进行清除链接的下划线 */
        text-decoration: none;
        font:bold 20px "宋体";
    }

    .link{
        text-decoration: none;
        color:#fff;
        box-shadow: 0 0 10px;
        border-radius: 10px;
    }
    .box{
        height: 50px;
        width: 100%;
        background-color: black;
        border:3px solid red;
        box-sizing: border-box;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        position:relative
    }

    .box01{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    span{
        width: 200px;
        height: 100%;   
        /* float:left; */
        text-align: center;
        line-height: 50px;
        border-radius: 10px;
        /* border-top:3px solid red; */
        /* border-bottom: 3px solid red; */
        /* position:absolute */
    }

    .active-link{
        color:black;
        background-color: #fff;
        box-shadow: 0 0 10px;
    }

    .showcomponent{
        width: 100%;
        height: auto;
        background-color: #c7c5c5;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        border:3px solid grey;
        box-sizing: border-box;
        margin-top:10px

    }
</style>