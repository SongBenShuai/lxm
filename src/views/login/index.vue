<template>
  <div class='logins'>
    <el-container>
      <el-aside width='70%' height='100%'>
        <h1 class='logins-left'>欢迎光临</h1>
      </el-aside>
      <el-main>
        <div class='logins-right'>
          <h3>欢迎回来</h3>
          <div class='logins-center'>
            <p class='logins-title'></p>
            <span class='logins-text'>账号密码登录</span>
            <p class='logins-title'></p>
          </div>
          <el-form
            ref='loginFormRef'
            :model='loginForm'
            :rules='rules'
            class='demo-ruleForm'
            status-icon
          >
            <el-form-item prop='username'>
              <el-input v-model='loginForm.username' placeholder='请输入用户名'>
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop='password'>
              <el-input v-model='loginForm.password' placeholder='请输入密码'>
                <template #prefix>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-button round @click='getLogin'>登录</el-button>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// 绑定校验
const loginFormRef = ref('')
// 表单内容
const loginForm = reactive({
  username: 'admin',
  password: 'admin'
})
// 校验规则
const rules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ]
})
// 请求登录
const getLogin = async (ruleForm) => {
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('user/getLogin', loginForm)
      console.log(response)
    }
  })
}
</script>

<style scoped lang='scss'>
.logins {
  .el-aside {
    height: 100vh;
    background: #6366f1;
    display: flex;
    justify-content: center;
    align-items: center;

    .logins-left {
      font-size: 50px;
      color: #ffffff;
    }
  }

  .el-main {
    display: flex;
    justify-content: center;
    align-items: center;

    .logins-right {
      padding: 0 90px;
      width: 100%;
      height: 400px;
      //background: #6366f1;
      text-align: center;

      .logins-center {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;

        .logins-title {
          width: 66px;
          height: 2px;
          background: #cccccc;
        }

        .logins-text {
          color: #cccccc;
          padding: 0 8px;
          font-size: 14px;
        }
      }

      h3 {
        font-size: 30px;
        padding-bottom: 20px;
      }
    }
  }
}

.el-button {
  width: 100%;
  background: #626aef;
  color: #ffffff;
}
</style>
