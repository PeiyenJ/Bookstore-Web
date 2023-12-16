<template>
  <div v-if="showChatRoom == true" class="chatroom">
    <div class="chatroom-bg"></div>
    <div class="chatroom-head">
      <p>Talk to me</p>
      <div class="chatroom-close-button" @click="showChatRoom = false">
        <svg transform="matrix(1.17105,0,0,1.17105,-2.05262,-2.05262)">
          <path
            d="M6,9L12,15L18,9"
            style="
              fill: none;
              fill-rule: nonzero;
              stroke: currentcolor;
              stroke-width: 1.67px;
            "
          ></path>
        </svg>
      </div>
    </div>
    <div class="chatbox">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <span v-if="message.type === 'user'">
          {{ username }}:{{ message.text }}
        </span>
        <span v-if="message.type === 'bot'">客服人員: {{ message.text }} </span>
      </div>
    </div>
    <div class="input-box">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="請在這裡輸入訊息..."
      />
      <div class="chatRoomSendButton" @click="sendMessage">送出</div>
    </div>
  </div>
  <label>
    <div
      class="chatRoomButton"
      v-if="showChatRoom == false"
      @click="showChatRoom = true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        width="30"
        height="30"
      >
        <path
          d="M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"
        ></path>
      </svg>
    </div>
    <div class="robot">
      <img src="/src/assets/robot05.png" />
    </div>
  </label>
</template>

<script>
import axios from "axios";
import { inject } from "vue";

export default {
  data() {
    return {
      messages: [],
      newMessage: "",
      username: "使用者",
      messagetobot: {
        userChatMessage: "",
      },
      showChatRoom: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") return;
      console.log(this.newMessage);
      this.messages.push({ type: "user", text: this.newMessage });
      console.log(this.messages);
      this.messagetobot.userChatMessage = this.newMessage;
      this.newMessage = "";

      // Simulate bot response (you can replace this with actual logic)
      // setTimeout(() => {
      //   this.messages.push({ type: "bot", text: "Hello! I'm a bot." });
      // }, 500);
      axios
        .post("/chatBot", this.messagetobot)
        // axios.post('http://localhost:8080/chatBot', this.messagetobot)
        .then((response) => {
          console.log();
          if (response.status == 200) {
            // 更新成功
            // 更新原本的資料畫面
            this.messages.push({ type: "bot", text: response.data.message });
          } else {
            this.messages.push({ type: "bot", text: response.data.message });
          }
        });
    },
  },
};
</script>

<style scoped>
P {
  font-size: 20px;
  color: aliceblue;
  padding: 10px;
  margin: 7px;
}
.chatroom {
  max-height: 800px;
  min-height: 400px;
  max-width: 350px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  margin: -50px;
  position:relative;
  /* right: 0;
  bottom: 0; */
}
.chatroom-bg {
  border-radius: 10px;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0.2;
  z-index: -1;
}
.chatroom-head {
  border-radius: 20px 20px 0px 0px;
  height: 50px;
  width: 100%;
  background-color: cornflowerblue;
}

.chatroom-head .chatroom-close-button {
  color: white;
  position: relative;
  left: 90%;
  top: 5%;
  cursor: pointer;
  z-index: 1;
}

.chatbox {
  /*border: 1px solid #ccc;*/
  font-size: 14px;
  margin: 10px;
  max-height: 500px;
  min-height: 400px;
  overflow-y: auto;
  background-color: white;
  opacity: 0.6;
}

.message {
  font-size: 16px;
  margin-bottom: 7px;
}

.input-box {
  display: flex;
  margin: 20px 20px 20px 20px;
  font-size: 14px;
}

.input-box input {
  min-width: 100px;
  max-height: 2em;
  min-height: 1em;
  font-size: 14px;
  border-radius: 1em;
  margin: 0;
  flex: 1;
  padding: 20px;
}

.input-box .chatRoomSendButton {
  /*max-width: fit-content;*/
  width: 50px;
  font-size: 1em;
  color: white;
  background-color: cornflowerblue;
  padding: 8px 8px;
  border-radius: 1em;
  margin: 0 0 0 3%;
  padding: 10px;
  cursor: pointer;
}

.chatRoomButton {
  border-radius: 2em;
  width: fit-content;
  padding: 1em;
  background-color: cornflowerblue;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
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
