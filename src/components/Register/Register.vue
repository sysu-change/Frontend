<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="regist-box">
    <div id="header" class="text">请填写基本信息</div>

    <el-form-item label="学号" prop="number">
      <el-input v-model="ruleForm.number"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="年龄/年级" required>
      <el-col :span="5">
        <el-form-item prop="age">
          <el-select placeholder="选择年龄" v-model="ruleForm.age" style="width: 100%;">
            
            <el-option label="18" value=18></el-option>
            <el-option label="19" value=19></el-option>
            <el-option label="20" value=20></el-option>
            <el-option label="21" value=21></el-option>
            <el-option label="22" value=22></el-option>
            <el-option label="23" value=23></el-option>
            <el-option label="24" value=24></el-option>
            <el-option label="25" value=25></el-option>
            <el-option label="26" value=26></el-option>
            <el-option label="27" value=27></el-option>
            <el-option label="28" value=28></el-option>
            <el-option label="29" value=29></el-option>
            <el-option label="30" value=30></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="5"></el-col>
      <el-col :span="5">
        <el-form-item prop="semester">
          <el-select placeholder="选择年级" v-model="ruleForm.semester" style="width: 100%;">
            <el-option label="大一" value="1"></el-option>
            <el-option label="大二" value="2"></el-option>
            <el-option label="大三" value="3"></el-option>
            <el-option label="大四" value="4"></el-option>
            <el-option label="研一" value="5"></el-option>
            <el-option label="研二" value="6"></el-option>
            <el-option label="研三" value="7"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="性别" prop="sex">
      <el-radio-group v-model="ruleForm.sex">
        <el-radio label="男"></el-radio>
        <el-radio label="女"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="专业" prop="major">
      <el-input v-model="ruleForm.major" placeholder="请输入专业"></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="常用手机号" prop="phone_num">
      <el-input v-model="ruleForm.phone_num" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="验证码" prop="code">
      <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="regist-button" type="success" @click="submitForm('ruleForm')">注册</el-button>
    </el-form-item>

    <el-link class="link" type="success" @click="onLogin">已有账号？立即登录！</el-link>
  </el-form>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        number: "",
        name: "",
        sex: "男",
        age: 20,
        semester: "",
        major: "",
        pass: "",
        checkPass: "",
        phone_num: "",
        code: ""
      },
      rules: {
        number: [
          { required: true, message: "请输入8位学号", trigger: "change" },
          { min: 8, max: 8, message: "请输入8位学号", trigger: "change" }
        ],
        name: [{ required: true, message: "请输入姓名", trigger: "change" }],

        age: [{ required: true, message: "请输入年龄", trigger: "change" }],
        semester: [
          { required: true, message: "请选择年级", trigger: "change" }
        ],
        major: [{ required: true, message: "请输入专业", trigger: "change" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone_num: [
          { required: true, message: "请输入手机号", trigger: "change" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.updateRegister();
          alert("submit");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    updateRegister: function() {
      
      var jj = {
        sid: this.ruleForm.number,
        name: this.ruleForm.name,
        age: this.ruleForm.age,
        sex: this.ruleForm.sex==='男'?"0":"1",
        grade: this.ruleForm.semester,
        major: this.ruleForm.major,
        phone_num: this.ruleForm.phone_num,
        password: require('crypto').createHash('sha512').update(this.ruleForm.pass).digest('hex').toUpperCase()
      };

      this.$http({
        method: "post",
        url: "http://localhost:8082/module/register",
        widthCredentials: false,
        data: jj
      })
        .then(function(res) {
          alert("445");
          if (res.status == 400) {
            alert("注册失败");
          } else if (res.status == 200) {
            alert(res.data.msg);
          }
        })
        .catch(function(err) {
          //console.log(err);
          alert("1");
        });
    },
    onLogin() {
      this.$router.push("/Signin");
    }
  }
};
</script>
<style scoped>
.regist-box {
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
.regist-button {
  position: relative;
  left: 60px;
  width: 60%;
}
.link {
  position: relative;
  left: 200px;
}
.text {
  color: #00b38a;
}
#header {
  text-align: center;
  margin-top: 4px;
}
</style>