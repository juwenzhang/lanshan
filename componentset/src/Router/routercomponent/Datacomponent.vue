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
    <div><img src="@/Router/images/01.jpg" alt="" ></div>
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