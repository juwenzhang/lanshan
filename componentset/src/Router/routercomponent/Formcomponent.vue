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