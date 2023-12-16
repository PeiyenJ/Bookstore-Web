<template>
  <div class="faq-super-container">

      <div class="chatroom">
        <div class="chatroom-bg"></div>
        <div class="chatroom-head">
          <h2>Live Chat</h2>
        </div>
        </div>
        <div class="chatbox">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="message"
          >
            <span v-if="message.type === 'user'">
              {{ username }}:{{ message.text }}
            </span>
            <span v-if="message.type === 'bot'"
              >客服人員: {{ message.text }}
            </span>
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
    
</template>

<script>
import axios from "axios";
// import { inject } from "vue";
// import ChatRoomFaq from '/src/components/ChatRoomFaq.vue';

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
  // components : {
  //     ChatRoomFaq
  // }
};
</script>


<style scoped>
.faq-super-container {
  position: fixed;
  width: 100%;
  height: 90%;
  display: Flex;
  flex-direction: column;
}

h2 {
  font-family: "Hedvig Letters Serif", serif;
  font-size: 20px;
  color: aliceblue;
  padding: 10px;
  margin: 7px;
}
.chatroom {
  height: 500px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: absolute;
}
.chatroom-bg {
  border-radius: 20px;
  position: absolute;
  height:500px;
  width: 1000px;

}
.chatroom-head {
  border-radius: 20px 20px 0px 0px;
  height: 50px;
  width: 100%;
  background-color: rgb(77, 77, 78);
}

.chatroom-head {
  color: white;
  text-align: center;
}

.chatbox {
  border: 1px solid #605f5f;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 50px;
  height: 500px;
  width: 1000px;
  overflow-y: auto;
  background-color: rgb(250, 250, 250);
  /* opacity: 0.4; */
}

.message {
  font-size: 16px;
  margin-bottom: 10px;
}

.input-box {
  display: flex;
  width: 950px;
  margin: 30px;
  font-size: 16px;
}

.input-box input {
  min-width: 100px;
  max-height: 2em;
  min-height: 1em;
  font-size: 16px;
  border-radius: 1em;
  margin: 0;
  flex: 1;
  padding: 20px;
}

.input-box .chatRoomSendButton {
  /*max-width: fit-content;*/
  width: 70px;
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

</style>