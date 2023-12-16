<template>
  <div class="rc">

  <!-- contact v2-->
  <section id="contact">
    <h3>CONTACT</h3>

    <article>
      <p>若您還有其他建議，歡迎寫信給我們...</p>

      <label for="checkcontact" class="contactbutton"><div class="mail"></div></label>
      <input id="checkcontact" type="checkbox" />

      <div class="contactform">
        <p class="input_wrapper">
          <input type="text" name="contact_nom" v-model="newData.userReplyName" /><label
            for="contact_nom"
            >NAME</label
          >
        </p>
        <p class="input_wrapper">
          <input
            type="text"
            name="contact_email"
            v-model="newData.userReplyEmail"
          /><label for="contact_email">EMAIL</label>
        </p>
        <p class="textarea_wrapper">
          <textarea name="contact_message" v-model="newData.userMessage"></textarea>
        </p>
        <p class="submit_wrapper">
          <input type="submit" @click="onSend()" value="SUMIT" />
        </p>
      </div>
    </article>
  </section>
  </div>
</template>

<script>
import axios from "axios";
import { inject } from "vue";

export default {
  data() {
    return {
      newData: {
        userReplyName: "",
        userReplyEmail: "",
        userReplySubject: "",
        userMessage: "",
      },

      data: [],
    };
  },
  // Vue要使用的方法
  methods: {
    // 送出要新增的商品資料
    onSend() {
      axios.post("/userMessage", this.newData).then((response) => {
        console.log(response);
        // 打API成功
        if (response.status == 200 && response.data.code == 0) {
          alert("新增資料成功");
          //this.showToast("您的訊息送出成功");

          // 將新增的資料丟給畫面顯示
          // this.data.push(JSON.parse(JSON.stringify(this.newData)));
        } else {
          alert("您的訊息送出失敗");
        }
      });

      //clean the input data in contact after sending it
      this.newData = {
        userReplyName: "",
        userReplyEmail: "",
        userReplySubject: "",
        userMessage: "",
      };
    },
  },
};
</script>

<style scoped>
.rc {
  position: relative;
  display:flex;

}


h3 {
  width: 100%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: "Hedvig Letters Serif", serif;
  text-align: center;
  color: #000;
  position: relative;
}

/* contact  v2*/

#contact {
  width: 90%;
  margin: 50px;
  padding: auto;
  position: absolute;
  margin-top: 100px;
  padding-left: 50px;
  padding-right: 120px;
}
#contact::after {
  content: "";
  display: block;
  height: 30px;
  width: 90%;
  left: 5%;
  bottom: 0;
  position: absolute;

}
#contact article {
  padding: auto;
  text-align: center;
  font-size: 20px;
}
#contact h3 {
  font-family: "Hedvig Letters Serif", serif;
  font-size: 30px;
  padding: 0.6em 0 0.6em 0.4em;
  color: rgb(59, 58, 58);
  position: relative;
}
.contactbutton {
  background: #ece7e7;
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 2px;
  cursor: pointer;
  opacity: 0.5;
}
.contactbutton:hover {
  margin-top: 22px;
  margin-left: 2px;
  margin-bottom: 0px;
}
.mail {
  margin-top: 11px;
  font-size: 15px;
  display: inline-block;
  border-top: 2em solid transparent;
  border-left: 2.6em solid #543dc7;
  height: 0;
  width: 0;
  position: relative;
}
.mail:before {
  content: "";
  top: -2.5em;
  left: -2.95em;
  display: block;
  position: absolute;
  border-top: 1.2em solid #543dc7;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1em solid transparent;
  font-size: 0.8em;
}
.mail::after {
  display: block;
  content: "";
  position: absolute;
  border-top: 2em solid transparent;
  border-right: 2.6em solid #543dc7;
  height: 0;
  width: 0;
  left: -2.18em;
  bottom: 0;
}
#checkcontact {
  position: absolute;
  left: -9999px;
}
.contactform {
  overflow: hidden;
  max-height: 0px;
  -webkit-transition: all linear 1s;
  -moz-transition: all linear 1s;
  -o-transition: all linear 1s;
  -ms-transition: all linear 1s;
  transition: all linear 1s;
}
#checkcontact:checked + .contactform {
  max-height: 1000px;
}
.input_wrapper {
  position: relative;
}
.textarea_wrapper textarea {
  margin-top: 20px;
  display: block;
  width: 100%;
  background: white;
  border: 1px solid #dadada;
  box-shadow: 0 0 1px 0 #e4e4e4;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1em;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
  color: #5e5e5e;
}
.input_wrapper input[type="text"] {
  margin-top: 14px;
  display: block;
  width: 100%;
  background: white;
  border: 1px solid #dadada;
  box-shadow: 0 0 1px 0 #e4e4e4;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 14px;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
  color: #5e5e5e;
  text-indent: 15%;
}
.input_wrapper input[type="text"]:focus {
  background: rgba(242, 56, 90, 0.05);
  box-shadow: inset 2px 2px 5px 0 #dadada;
  outline: none;
  text-indent: 0;
}
.input_wrapper label {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #77a6d6;
  color: white;
  font-family: Oswald, sans-serif;
  box-sizing: border-box;
  width: 15%;
  text-align: center;
  line-height: 2.8em;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
}
.input_wrapper input[type="text"]:focus + label {
  left: 85%;
}
.textarea_wrapper textarea {
  margin-top: 20px;
  display: block;
  width: 100%;
  min-height: 150px;
  background: white;
  border: 1px solid #dadada;
  box-shadow: 0 0 1px 0 #e4e4e4;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1em;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
  color: #5e5e5e;
}
.textarea_wrapper textarea:focus {
  background: rgba(242, 56, 90, 0.05);
  box-shadow: inset 2px 2px 5px 0 #dadada;
  outline: none;
}
.submit_wrapper {
  text-align: center;
}
.submit_wrapper input {
  text-align: center;
  display: inline-block;
  width: 40%;
  height: 50px;
  margin-top: 1em;
  margin-bottom: 6px;
  cursor: pointer;
  background: #899bef;
  border-radius: 10px;
  color: white;
  font-family: Oswald, sans-serif;
  font-size: 1em;
  border: none;
  -webkit-box-shadow: 1px 1px 0 0 #272083, 2px 2px 0 0 #272083, 3px 3px 0 0 #272083;
  box-shadow: 1px 1px 0 0 #272083, 2px 2px 0 0 #272083, 3px 3px 0 0 #272083;
  -webkit-appearance: none;
  -webkit-transition: all 250ms ease;
  -moz-transition: all 250ms ease;
  -ms-transition: all 250ms ease;
  -o-transition: all 250ms ease;
  transition: all 250ms ease;
}
.submit_wrapper input:hover {
  -webkit-box-shadow: 1px 1px 0 0 #543dc7, 0px 0px 0 0 #543dc7, 0px 0px 0 0 #543dc7;
  box-shadow: 1px 1px 0 0 #543dc7, 0px 0px 0 0 #543dc7, 0px 0px 0 0 #543dc7;
  margin-top: 22px;
  margin-left: 2px;
  margin-bottom: 0px;
}

@media (max-width: 300px) {
  #contact {
    width: 100%;
  }
  .input_wrapper label {
    line-height: 3.5em;
    font-size: 0.8em;
  }
}
</style>
