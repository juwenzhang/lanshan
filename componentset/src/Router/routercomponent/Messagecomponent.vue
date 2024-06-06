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