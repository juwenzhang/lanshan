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
    // 开始解决图片的导入问题
    import {path} from "path"

    import image01 from "@/Router/images/01.jpg"
    import image02 from "@/Router/images/02.jpg"
    import image03 from "@/Router/images/03.jpg"
    import image04 from "@/Router/images/04.jpg"
    import image05 from "@/Router/images/05.jpg"

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