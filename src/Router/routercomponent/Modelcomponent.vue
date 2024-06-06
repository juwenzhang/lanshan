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