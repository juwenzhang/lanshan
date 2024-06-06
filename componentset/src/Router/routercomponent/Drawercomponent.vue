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
