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