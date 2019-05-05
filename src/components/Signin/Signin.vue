<template>

  <el-container >
  <el-header></el-header>
  <el-main>
       <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="手机号" prop="phone_num" >
        <el-input type="text" placeholder="请输入手机号" v-model="form.phone_num"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" placeholder="请输入验证码" v-model="form.code"/>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" type="success" v-on:click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="温馨提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>请输入正确信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
  </el-main>
  <el-footer></el-footer>
</el-container>


	
 
</template>


  <script>
     export default {
    name: "Login",
    data() {
      return {
        form: {
          username: '',
          password: '',
          code:''
        },

        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          phone_num: [
            {required: true, message: '手机号不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ],
          code:[
            { required: true, message: '验证码不可为空', trigger: 'blur'}
        ]

        },
        

        // 对话框显示和隐藏
        dialogVisible: false
      }
    },
    methods: {
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            this.$router.push("/index");
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      }
    }
  }
  </script>

<style scoped>
  
  .el-header {
    background-color: #00b38a;
    color: #333;
    height: 40vh;
    width: 100%;
    
  }

  .el-footer{
    background-color: #999999;
    color:#fcfcfc;
    width: 100%;
    height: 20vh;
  }
  
  .el-main {
    background-color: #fcfcfc;
    color: #333;
    text-align: center;
    height: 60vh;
  }
   .el-container {
    background-color: #00b384;
    margin-bottom: 0px;
    
    width: 100%;
    height: 100vh;
    position: absolute;
  }
   

   .line1{
    position: absolute;
    
}
  
  .login-box {
    border: 1px solid #DCDFE6;
    width: 400px;
    height:300px;
    margin: 180px auto;
    padding: 0px 200px 20px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .submit{
    position: relative;
    width: 200px;
    left: -100px;
  }
  
 

.login-title {
    text-align: left;
    font: 1em sans-serif;
    color: #00b38a;
  }

.login_button{
  position: absolute;
  left: 150px;
  width: 150px;
  height: 40px;
  top: 260px;
}

.bar{
  position: absolute;
  left: 50px;
  width: 150px;
  height: 40px;
  top: 260px;
}

</style>
