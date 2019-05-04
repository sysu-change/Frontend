<template>

  <el-container >
  <el-header></el-header>
  <el-main>
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
    <h3 class="login-title" >登录</h3>
    <el-divider class="line1" content-position="left">开始你的快乐之旅吧</el-divider>
      
    <el-input class="pass_word" placeholder="请输入密码" v-model="input1" :disabled="false" show-password></el-input>
    <el-input class="phone_num" placeholder="请输入手机号" v-model="input2" :disabled="false" ></el-input>
    <el-input class="pass_code" placeholder="请输入验证码" v-model="input3" :disabled="false" ></el-input>
       
       <el-breadcrumb separator-class="el-icon-arrow-right">
       <el-breadcrumb-item :to="{ path: '/' }" class="bar">注册</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-button type="success" class="login_button">
            登录
        </el-button>
      </el-form>
  </el-main>
  <el-footer></el-footer>
</el-container>


	
 
</template>


  <script>
    export default{
      el: '#app',
      data() {
      return {
        input1: '',
        input2: '',
        input3: ''

      }
    }
    }
  </script>

<style scoped>
  
  .el-header {
    background-color: #00b38a;
    color: #333;
    height: 20vh;
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
    position: absolute;
    border: 1px solid #DCDFE6;
    width: 500px;
    height:350px;
    left: 60vh;
    top: 125px;
     
    box-shadow: 0 0 25px #909399;
  }
  
  .pass_word{
    position: absolute;;
    left: 5px;
    top:80px;
    width:300px;
    
  }
  
  .phone_num{
    position: absolute;
    left: 5px;
    top:140px;
    width:300px;
  }

  .pass_code{
    position: absolute;
    left: 5px;
    top:200px;
    width:150px;
  }

.login-title {
    text-align: center;
    font: 1em sans-serif;
    color: #00b38a;
  }

.login_button{
  position: absolute;
  left: 50px;
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