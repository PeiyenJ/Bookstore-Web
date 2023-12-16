<template>
  <div class="backgroundLogin">
    <div class="background">
      <div class="shape"></div>

      <div class="shape"></div>
    </div>

    <form>
      <h3>Hi Friend</h3>

      <label for="username">Username</label>
      <input
        v-model="username"
        type="text"
        name="username"
        placeholder="username"
        id="username"
      />

      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        name="code"
        placeholder="Password"
        id="password"
      />

      <div v-if="isShowLoginError" class="login-failed">登入失敗</div>

      <button @click.prevent="login()">Login</button>
      <div class="signup-connect">
        <!-- 第三方Google登入 -->
        <div id="signinDiv"></div>
        <!-- <button >Sign with Google</button> -->
      </div>
      <!-- 以下為變數的替換語法 -->
      <!-- <ButtonNo1 message="登入" @click.prevent="login()" /> -->

      <div class="btn">
        <a class="c-btn" href="./signup.html">Sign up</a>
        <!-- <a class="c-btn">Forget Password</a> -->
        <a class="r-btn" href="./faq.html"></a>
      </div>
    </form>

  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import { jwtDecode } from "jwt-decode";
import { inject } from 'vue';

export default {
  data() {
    return {
      // count:0,
      // message:'Hello Vue',
      // test:'Hi , Friend',
      username: "",
      password: "",
      isShowLoginError: false,
    };
  },
  // Vue要使用的方法
  methods: {
    testClick() {
      //alert('Hi');  彈出視窗
      // this.test = "John";
    },
    // Vue登入方法
    login() {
      console.log("login");
      console.log("username=" + this.username);
      console.log("password=" + this.password);
      // 串接登入API
      axios.get("/login?username=" +
            this.username +
            "&password=" +
            this.password
        )
        .then((response) => {
          console.log(response);
          // 處理API回應

          if (response.status == 200) {
            console.log("呼叫API成功");
            if (response.data.code > 0) {
              console.log(response.data.code);
              console.log("登入失敗:" + response.data.message);

              this.isShowLoginError = true;
              ElMessage.error("Oops, 登入失敗.");
            } else {
              console.log(response.data.code);
              console.log("登入成功");
              localStorage.setItem('loginUser',this.username);
              this.username = '';
              location.href = "./prod.html"; //跳轉網頁
            }
          }
        });
    },
  },
  // components: { ButtonNo1 },
  mounted() {
    // 官方文件: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=en
    //google.accounts.id.initialize
    google.accounts.id.initialize({
      // Google用戶端編號
      client_id:
        "483947196664-ikg4jeegsei735rcvoet2vqrvvgvdkha.apps.googleusercontent.com",
      callback: (response) => {
        console.log(response.credential);

        // 解碼憑證 JWT，需 yarn add install jwt-decode套件
        const decoded = jwtDecode(response.credential);

        const jwtStr = JSON.stringify(decoded, null, 4);
        console.log(jwtStr);
        // 幫使用者自動註冊API
          axios.post("/account", {
            userName: decoded.name,
            passWord: decoded.sub,
            email: decoded.email,
            phone: "",
          })
          .then((response) => {
            // 註冊成功
            if (response.status == 200 && response.data.code == 0) {
              this.username = decoded.name;
              console.log(decoded.sub);
              localStorage.setItem('loginUser',this.username);
              this.username='';
              location.href = "/prod.html"; // 跳轉網頁
            } else if(response.data.message ==="已有此帳號") {
              this.username = decoded.name;
              console.log(decoded.sub);
              localStorage.setItem('loginUser',this.username);
              this.username='';
              location.href = "/prod.html"; // 跳轉網頁
            }else{
              console.log(response.data.code);
              ElMessage.error("登入失敗");
            }
          });
      },
    });
    google.accounts.id.prompt();

    //click_listener for Google
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "outline",
      size: "medium",
      width: "320px",
      height: "200px",
      click_listener: onClickHandler,
    });
    function onClickHandler() {
      console.log("Sign in with Google button clicked...");
    }
  },
};
</script>

<style scoped>
*,
*:before,
*:after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

.backgroundLogin {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/indbg.jpg");
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}
.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -100px;
  top: -80px;
}
.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -120px;
  bottom: -80px;
}
.robot {
  position: relative;
  display: flexbox;
  margin-top: 10px;
  padding: 560px;

}


form {
  height: 530px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 10px 35px;
}
form * {
  font-family: "Hedvig Letters Serif", serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  margin-top: 20px;
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  color: #000;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #9d7d7d;
}
button {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  color: #080710;
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.btn {
  display: flex;
  gap: 20px;
}

.c-btn {
  width: 650%;
  height: 50px;
  border-radius: 7px;
  padding: 0;
  font-size: 16px;
  display: flex;
  color: white;
  background-color: rgb(32, 32, 32);
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  text-decoration: none;
}
.r-btn {
  width: 200%;
  height: 60px;
  padding: 0;
  display: flex;
  background-image:url("/src/assets/robot02.png");
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  text-decoration: none;
}


.login-failed {
  color: red;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -10px;
}

#signinDiv {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  padding: 15px 0;
  font-weight: 650px;
  border-radius: 5px;
  cursor: pointer;
}

.signup-connect {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
