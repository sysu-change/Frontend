<template>
	<el-container>
		<el-header></el-header>
		<el-main>
			<el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
				<h3 class="login-title" >登录</h3>
				<el-divider class="line1" content-position="center"><span class="text">开始你的快乐之旅吧</span></el-divider>
        <div class="former">
          <div class="phone_num">
            <el-input  placeholder="请输入手机号" @input="checkThePhone" v-model="input1" :disabled="false" ></el-input>
            <span class="Err">{{ErrPhone}}</span>
          </div>
          <div class="pass_word">
            <el-input  placeholder="请输入密码" @change="checkThePassword" v-model="input2" :disabled="false" show-password></el-input>
            <span class="Err">{{ErrPassword}}</span>
          </div>
          <div class="pass_code">
            <el-input  placeholder="请输入验证码" @change="checkTheMessage" v-model="input3" :disabled="false" ></el-input>
            <span class="Err">{{ErrMessage}}</span>
          </div>
        </div>
				<el-button type="success" class="login_button" @click="SigninforUser">登录</el-button>
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
      input3: '',
      ErrMessage:'...',
      ErrPhone:'...',
      ErrPassword:'...'
		}
	},
	methods:{
    Sign:function() {
      alert(this.input1+" "+this.input2+" "+this.input3);
    },
    checkThePhone:function(){
        var reg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(!reg.test(this.input1)) {
          this.ErrPhone="请输入正确的格式"; 
        }
        else this.ErrPhone="正确";
    },
    checkThePassword:function() {
        if(this.input2==='') this.ErrPassword="请输入密码";
        else this.ErrPassword="...";
    },
    checkTheMessage:function() {
        if(this.input3==='') this.ErrMessage="请输入验证码";
        else this.ErrMessage="...";
    },
    SigninforUser:function(){
       this.$http.jsonp('http://localhost:8082/module/login',{phone_num:this.input1,password:this.input2}).then(function(res){
          if(res.code===404) {alert("账户或密码错误");this.input1='';this.input2=''; }
          else if(res.data.code==200) {
            alert(res.data.msg);
          }
        },
        function(res){
          console.log(res.status);
        });
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
   

   
  
  .login-box {
    position: absolute;
    border: 1px solid #DCDFE6;
    width: 400px;
    height:350px;
    left: 35%;
    top: 125px;
    box-shadow: 0 0 25px #909399;
  }
  
  .pass_num{
    position: relative;
    left: 5px;
    width:200px;
  }
  
  .phone_word{
    position: relative;
    left: 5px;
    top:80px;
    width:200px;
  }

  .pass_code{
    position: relative;
    width:150px;
  }

.login-title {
    text-align: center;
    font: 1em sans-serif;
    color: #00b38a;
  }

.login_button{
  position: relative;
  left: 10px;
  width: 150px;
  height: 40px;
  top:30px;
}

.bar{
  position: absolute;
  left: 50px;
  width: 150px;
  height: 40px;
  top: 260px;
}

.former{
  background-color:#fcfcfc;
}

.text{
  font-size: 10px;
  color: #00b38a;
}

.Err{
  display: block;
  text-align: left;
  color:red;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  opacity:0.5;
}
</style>