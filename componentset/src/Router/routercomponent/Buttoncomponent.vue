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