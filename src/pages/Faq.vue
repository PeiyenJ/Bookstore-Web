<template>
  <div class="backgroundFaq"></div>
  <div class="nav-bar">
    <a class="btn" href="./prod.html">Home</a>
    <a class="btn" href="./Signup.html">Sign Up</a>
  </div>
  <h2>GTP AI Assistant</h2>
  <div class="chat-room-container">
    <chatRoomFaqV3></chatRoomFaqV3>
  </div>

  <div class="su-contact">
    <Contact></Contact>
  </div>

</template>

<script>
import axios from "axios";
import { inject } from "vue";
import ChatRoomFaqV3 from "/src/components/ChatRoomFaqV3.vue";
import Contact from "/src/components/Contact.vue";

export default {
  data() {},
  // Vue要使用的方法
  methods: {
    //   //clean the input data in contact after sending it
    //   this.newData = {
    //     userReplyName: "",
    //     userReplyEmail: "",
    //     userReplySubject: "",
    //     userMessage: "",
    //   };
    // },
  },
  // 這個方法會網頁載入完畢後會自動被呼叫
  components: {
    ChatRoomFaqV3,
    Contact,
  },
};
</script>

<style scoped>
.backgroundFaq {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/faqbg.jpg");
  opacity: 0.8;
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}

h2 {
  width: 100%;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 300;
  font-family: "Hedvig Letters Serif", serif;
  text-align: center;
  letter-spacing: 5px;
  color: #000;
  position: relative;
}

/* nav-bar */
.nav-bar {
  width: 100%;
  align-self: flex-end;
  margin: right 30px;
  display: flex;
}
.btn {
  width: 120px;
  justify-self: center;
  text-align: center;
  margin-top: 40px;
  margin-left: 60px;
  font-family: "Hedvig Letters Serif", serif;
  font-size: 25px;
  font-weight: 300;
  color: black;
  filter: opacity(0.9);
}


.chat-room-container {
  width: 100%;
  position: absolute;
  display: flex-direction;
  margin-top: 0px;
  /* margin-left: auto;
  margin-right: auto;  */
  padding-left:50px;
  padding-right:50px;
}

.su-contact {
  width: 100%;
  position: relative;
  display: flex-direction;
  margin-top: 450px;
  padding:auto;
}
</style>
