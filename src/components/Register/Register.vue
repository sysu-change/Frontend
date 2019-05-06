<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="regist-box">
  <div id="header" class=text>请填写基本信息</div>

  <el-form-item label="学号" prop="number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="年龄/年级" required>
    <el-col :span="5">
      <el-form-item  prop="age">
        <el-input  type="text" placeholder="年龄" v-model="ruleForm.age" style="width: 100%;"></el-input>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="5"></el-col>
    <el-col :span="5">
      <el-form-item prop="semester">
        <el-select  placeholder="选择年级" v-model="ruleForm.semester" style="width: 100%;">
            <el-option label="大一" value="大一"></el-option>
            <el-option label="大二" value="大二"></el-option>
            <el-option label="大三" value="大三"></el-option>
            <el-option label="大四" value="大四"></el-option>
            <el-option label="研一" value="研一"></el-option>
            <el-option label="研二" value="研二"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-form-item>
 
  <el-form-item label="性别" prop="resource" >
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>

<el-form-item label="专业" prop="major">
    <el-input  v-model="ruleForm.major" placeholder="请输入专业"></el-input>
  </el-form-item>
  

<el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
    
    <el-form-item label="常用手机号" prop="phone_num">
    <el-input  v-model="ruleForm.phone_num" autocomplete="off"></el-input>
  </el-form-item>
    
    <el-form-item label="验证码" prop="code" >
    <el-input  v-model="ruleForm.code" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button class="regist-button" type="success" @click="submitForm('ruleForm')" >注册</el-button>
    
  </el-form-item>

     <el-link class="link" type="success" @click="onLogin">已有账号？立即登录！</el-link>
</el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          number: '',
          name:'',
          age: '',
          semester: '',
          major:'',
          pass:'',
          checkPass:'',
          phone_num:'',
          code:''
        },
        rules: {
          number: [
            { required: true, message: '请输入8位学号', trigger: 'change' },
            { min: 8, max: 8, message: '请输入8位学号', trigger: 'change' }
          ],
          name:[
            { required: true, message: '请输入姓名', trigger: 'change' }
          ],
          
          age: [
            {  required: true, message: '请输入年龄', trigger: 'change' }
          ],
          semester: [
            {  required: true, message: '请选择年级', trigger: 'change' }
          ],
          major:[
            {required: true, message: '请输入专业', trigger: 'change'}
          ],
         pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
           phone_num: [
            { required: true, message: '请输入手机号', trigger: 'change' }
          ],
          code:[
            {required: true, message: '请输入验证码', trigger: 'change'}
          ]
       
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.updateRegister();
            alert("submit");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      updateRegister:function() {
        var jj={"sid":this.ruleForm.number,"name":this.ruleForm.name,"age":this.ruleForm.age,"sex":"男","grade":this.ruleForm.semester,"major":this.ruleForm.major,"phone_num":this.ruleForm.phone_num,"password":this.ruleForm.pass};
        this.$http.post('http://localhost:8080/module/register',jj).then(function(res){
                    alert("445");
                    if(res.status==400) {
                      alert("注册失败");
                    }
                    else if(res.status==200) {
                      alert(res.data.msg);
                    }
                }).catch(function(err){
                    //console.log(err);
                    alert("1");
                });
      },
      onLogin(){
          this.$router.push("/Signin");
      }
    }
  }
</script>
<style scoped>
  .regist-box{
    margin: 180px auto;
    width: 500px;
    height: 700px;
    padding: 0px 50px 20px 35px;
     border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    background-color: white;
  }
  .regist-button{
    position: relative;
     left: 60px;
    width: 60%;
  }
  .link{
    
     position: relative;
     left: 200px;
  }
  .text{
    color:#85CE61;
  }
  #header{
    text-align: center;
    margin-top:4px;
  }
</style>