<template>
  <div class="faq-super-container">
    <div class="chatroom">
      <div class="chatroom-bg"></div>
      <div class="chatroom-head">
        <h2>Live Chat</h2>
      </div>
    </div>
    <div class="chatbox">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <span v-if="message.type === 'user'">
          {{ username }}:{{ message.text }}
        </span>
        <span v-if="message.type === 'bot'">小助手: {{ message.text }} </span>
      </div>
      <div v-if="isBotTyping == true" class="ellipsis-container">
        小助手: &nbsp
        <!-- loading -->
        <span
          class="ellipsis-dot"
          v-for="(dot, index) in ellipsisDots"
          :key="index"
        >
          &nbsp {{ dot }}
        </span>
      </div>
    </div>

    <div class="input-box">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="口訣：阿呆阿呆（請在這裡輸入訊息...）"
      />
      <div class="chatRoomSendButton" @click="sendMessage">送出</div>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messages: [],
      newMessage: "",
      username: "使用者",
      messagetobot: [],
      showChatRoom: false,
      isBotTyping: false,
      ellipsisDots: [".", ".", "."],
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === "") return;
      console.log(this.newMessage);
      this.messages.push({ type: "user", text: this.newMessage });
      console.log(this.messages);
      this.messagetobot.push({
        chatRole: "user",
        chatMessage: this.newMessage,
      });
      this.newMessage = "";

      this.isBotTyping = true;

      axios
        .post("/v3/chatBot", this.messagetobot)
        // axios.post('http://localhost:8080/chatBot', this.messagetobot)
        .then((response) => {
          console.log();
          if (response.status == 200) {
            // 更新成功
            // 更新原本的資料畫面
            this.isBotTyping = false;
            this.messages.push({ type: "bot", text: response.data.message });
            this.messagetobot.push({
              chatRole: "assistant",
              chatMessage: response.data.message,
            });
          } else {
            this.messages.push({ type: "bot", text: response.data.message });
          }
        });
    },
  },
};
</script>

<style scoped>

.faq-super-container {
  position: inline-block;
  width: 100%;
  height: 90%;
  padding-left: 30px;
  padding-right: 70px;
  display: Flex;
  flex-direction: column;
}

h2 {
  font-family: "Hedvig Letters Serif", serif;
  font-size: 30px;
  text-align:left;
  color: rgb(66, 66, 66);
  margin: auto;
}
.chatroom {
  height: 350px;
  width: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
}
 .chatroom-bg {
  border-radius: 20px;
  position: absolute;
  height: 300px;
  width: 100%;
} 
 /* .chatroom-head {
  height: 50px;
  width: 100%;
  background-color: rgb(77, 77, 78);
  margin: auto;
  position: absolute;
}  */

.chatroom-head {
  color: white;
  text-align: center;
}

.chatbox {
  border: 1px solid #605f5f;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 50px;
  height: 350px;
  width: 100%;
  overflow-y: scroll;
  background-color: rgb(250, 250, 250);
  opacity: 0.5;
}

.message {
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin-bottom: 10px;
}

.input-box {
  display: flex;
  width: 75%;
  margin: 30px;
  font-size: 16px;
}

.input-box input {
  min-width: 100px;
  max-height: 50px;
  min-height: 20px;
  font-size: 16px;
  border-radius: 10px;
  margin: 0;
  flex: 1;
  padding: 20px;
}

.input-box .chatRoomSendButton {
  /*max-width: fit-content;*/
  width:70px;
  text-align: center;
  font-size: 16px;
  color: white;
  background-color: rgb(104, 104, 106);
  padding: 8px 8px;
  border-radius: 1em;
  margin: 0 0 0 3%;
  padding-right: 7px;
  cursor: pointer;
}

/* loading */
.ellipsis-container {
  display: flex;
}

.ellipsis-dot {
  opacity: 0;
}

.ellipsis-dot:nth-child(1) {
  animation-delay: 0s;
  animation: dot1 2s infinite linear;
}

.ellipsis-dot:nth-child(2) {
  animation: dot2 2s infinite linear;
  animation-delay: 0.5s;
  animation-duration: 2.5;
}

.ellipsis-dot:nth-child(3) {
  animation: dot3 2s infinite linear;
  animation-delay: 0.5s;
  animation-duration: 2.5;
}

@keyframes dot1 {
  0%,100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@keyframes dot2 {
  0%,100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
@keyframes dot3 {
  0%,100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
