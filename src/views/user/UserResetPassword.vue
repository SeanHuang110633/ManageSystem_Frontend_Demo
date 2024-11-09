<script setup>
import { ref } from 'vue'
import { userPwdUpdate } from '@/api/user.js'
import { ElMessage } from 'element-plus'
import { useTokenStore } from '@/stores/index.js'
import { useRouter } from 'vue-router'
//定義數據模型
const form = ref({
  oldPwd: '',
  newPwd: '',
  confirmedPwd: ''
})
//清空數據模型
const clearForm = () => {
  form.value.oldPwd = ''
  form.value.newPwd = ''
  form.value.confirmedPwd = ''
}
//定義校驗規則
const rules = {
  oldPwd: [{ required: true, message: '請輸入舊密碼', trigger: 'blur' }],
  newPwd: [
    { required: true, message: '請輸入新密碼', trigger: 'blur' },
    {
      validator: (rule, value) => {
        if (value === form.value.oldPwd) {
          return new Error('新密碼不能與舊密碼相同')
        }
        return true
      },
      trigger: 'blur'
    }
  ],
  confirmedPwd: [
    { required: true, message: '請再次輸入新密碼', trigger: 'blur' },
    {
      validator: (rule, value) => {
        if (value !== form.value.newPwd) {
          return new Error('兩次輸入的新密碼不一致')
        }
        return true
      },
      trigger: 'blur'
    }
  ]
}
//發送給服務端
const router = useRouter()
const Submit = async () => {
  await userPwdUpdate(form.value)
  ElMessage.success('成功修改密碼，將跳轉登入頁')
  setTimeout(() => {
    router.push('/login')
  }, 1000)
  clearForm()
}
const tokenStore = useTokenStore()
console.log(tokenStore.token)
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>修改用戶密碼</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :model="form" :rules="rules">
          <el-form-item label="舊密碼" prop="oldPwd">
            <el-input v-model="form.oldPwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="新密碼" prop="newPwd">
            <el-input v-model="form.newPwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="確認新密碼" prop="confirmedPwd">
            <el-input v-model="form.confirmedPwd" type="password" @keyup.enter="Submit"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Submit">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped>
.page-container {
  box-sizing: border-box;
}
.header {
  height: 15px;
}
</style>
