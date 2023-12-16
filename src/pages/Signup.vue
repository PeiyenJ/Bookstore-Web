<template>
  <div class="su-bg">
    <h2 class="title">歡迎加入BookStore</h2>
    <!-- <div class="robot">
      <img src="/src/assets/robot05.png" />
    </div> -->
    <div class="body">
      <div class="container">
        <form>
          <div class="row">
            <h5>Account</h5>
            <div class="input-icon"><i class="fa"></i></div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="ID"
                v-model="newUser.userName"
                required
              />
            </div>
            <div class="input-icon"><i class="fa"></i></div>
            <div class="input-group input-group-icon">
              <input
                type="password"
                placeholder="Password"
                v-model="newUser.passWord"
              />
            </div>
            <div class="input-icon"><i class="fa"></i></div>
            <div class="input-group input-group-icon">
              <input
                type="password"
                placeholder="confirmpassword"
                v-model="confirmPassword"
              />
            </div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Full Name"
                v-model="newUser.fullName"
              />
            </div>
            <div class="input-icon"><i class="fa"></i></div>
            <div class="input-group input-group-icon">
              <input type="email" placeholder="Email" v-model="newUser.email" />
            </div>

            <div class="input-icon"><i class="fa"></i></div>
            <div class="input-group input-group-icon">
              <input
                type="text"
                placeholder="Mobile Phone"
                v-model="newUser.phone"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <h5>Birthday</h5>
              <div class="input-group">
                <div class="col-third">
                  <input type="date" v-model="newUser.birth" />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <h5>Agree All</h5>
            <div class="input-group">
              <div id="terms">
                <input
                  type="checkbox"
                  name="check[]"
                  v-model="checkbox"
                  @click="onClick($event)"
                />
              </div>
              <p>I agree all statements in Terms of service.</p>
            </div>
            <div class="btn-group">
              <input type="submit" value="送出" @click.prevent="onSend()" />
              <input type="reset" value="清除" @click.prevent="onClear()" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      //註冊帳號用資料
      newUser: {
        userName: "",
        passWord: "",
        fullName: "",
        email: "",
        phone: "",
        birth: "",
      },
      data: [],
      confirmPassword: "",
      checkbox: false,
    };
  },
  methods: {
    onClick(event) {
      // 判斷checkbox 是否打勾
      this.checkbox = event.target.checked;
    },
    onSend() {
      // console.log(this.newUser.userName);
      // console.log(this.newUser.passWord);
      while(1){
        //判斷帳戶資料填寫
        if( (this.newUser.userName.length == 0 && this.newUser.passWord == 0 )|| this.confirmPassword == 0){
          ElMessage.warning("資料未填"); 
          break;
        }
        //確認密碼重複
        if(this.newUser.passWord !== this.confirmPassword){
          ElMessage.warning("密碼不同");
          break;
        }
        //checkBox
        if(this.checkbox == false){
          ElMessage.warning("Agree All未勾"); 
          break;
        }
        //連API新增新帳號
        axios.post("/account", this.newUser)
          .then((response) => {
            // 打API成功
            if (response.status == 200 && response.data.code == 0) {
              // 新增資料
              this.data.push(JSON.parse(JSON.stringify(this.newUser)));
              ElMessage.success("註冊帳號成功");
              localStorage.setItem('loginUser',this.newUser.userName);
              this.onClear();
               location.href = "./prod.html"; //跳轉網頁  
            }
            // 確認帳號是否已註冊 
            else if(response.data.message === "已有此帳號"){
              ElMessage.warning("已有此帳號");
            }else
            ElMessage.error("註冊帳號失敗"); 
          });
          break;
        }
    },
    onClear() {
      this.newUser = {};
      this.confirmPassword='';
      this.checkbox = false;
    },
  },
  // components : {
  //     chatRoom
  //   }
};
</script>

<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.su-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/src/assets/sg-bg3.jpg");
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}
/* .supersp {
  position: relative;
  display: inline-flex;
} */

.title {
  margin-top: 50px;
  margin-bottom: 20px;
  
  font-family:'Hedvig Letters Serif', serif;
}

/* 表單 */
.body {
  padding-top: 30px;
  padding-left: 100px;
  font-size: 13px;
  color: #b9b9b9;
 
}
h2 {
  font-size: 30px;
  font-family:'Hedvig Letters Serif', serif;
  color: #3b3322;
  text-align: center;
}
h5 {
  color: #f0a500;
  font-family:'Hedvig Letters Serif', serif;
}

input {
  width: 100%;
  padding: 12px;
  line-height: 1.4;
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}

.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 100%;
}
.col-third:last-of-type {
  padding-right: 0;
}

.btn-group {
  display: flex;
  gap: 20px;
}

.chat-room-container{
  width:400px;
  height:800px;
  height:fit-content;
  position:fixed;
  right:10%;
  bottom:10%;
  z-index: 10;
}



@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}

.robot {
  width: 100px;
  height: 100px;
  padding-left: 150px;
  margin-bottom: 20px;
  display: block;
  position: relative;
  animation-name: robot; /*動畫名稱(自訂)*/
  animation-duration: 4s; /*一次完整動畫時間為4秒*/
  animation-iteration-count: infinite; /*播放次數為無限次*/
  animation-direction: alternate; /*播放方向為先正向再反向*/
}
@keyframes robot {
  /*動畫名稱*/
  0% {
    left: 0px;
  }
  30% {
    left: 100px;
  }
  70% {
    left: 150px;
  }
  100% {
    left: 200px;
  }
}
</style>
