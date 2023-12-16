<template>
  <div class="pf-bg">
    <h2 class="title">會員專區</h2>
    <div class="nav-bar">
        <a class="nbtn" href="./prod.html">Home</a>
        <a class="nbtn" href="./faq.html">呼叫Y呆</a>
    </div>
    <div class="container">
      <div class="row">
        <!-- 左邊區塊 -->
        <div class="col-md-4">
          <div class="card-left">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>John Doe</h4>
                  <!-- Full Stack 替換ID -->
                  <p class="text-secondary mb-1">{{ proFile.userName }}</p>
                  <!-- Area 替換info -->
                  <p class="text-muted font-size-sm">
                    {{ proFile.info }}
                  </p>
                  <br />
                  <label>
                    <div class="btn btn-outline-primary">選擇檔案</div>
                    <input
                      type="file"
                      @change="onFileChange($event)"
                      class="input-btn"
                    />
                    <!-- <button class="btn btn-outline-primary" @clcik="" >Upload Photo</button> -->
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右邊區塊start -->
        <div class="col-md-8">
          <div class="card-right">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Account ID</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{ proFile.userName }}
                </div>
                <!-- <input v-else class="col-sm-9 text-secondary" v-model="proFile.userName" /> -->
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Password</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  {{ proFile.passWord }}
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.passWord"
                />
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  {{ proFile.fullName }}
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.fullName"
                />
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  {{ proFile.email }}
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.email"
                />
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  {{ proFile.phone }}
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.phone"
                />
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Birthday</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  {{ proFile.birth }}
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.birth"
                />
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Info</h6>
                </div>
                <div v-if="!userEditMode" class="col-sm-9 text-secondary">
                  "{{ proFile.info }}"
                </div>
                <input
                  v-else
                  class="col-sm-9 text-secondary"
                  v-model="proFileEditMode.info"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 右邊區塊end -->
        <!-- 編輯、儲存btn -->
        <div class="row">
          <div class="esbtn col-sm-12">
            <button
              v-if="!userEditMode"
              class="btn btn-outline-primary"
              @click="onUserEdit()"
            >
              Edit 編輯
            </button>
            <!-- 點下Edit編輯 顯示 -->
            <button
              v-if="userEditMode"
              class="btn btn-outline-primary"
              @click="onUserCancel()"
            >
              取消
            </button>
            <button
              v-if="userEditMode"
              class="btn btn-outline-primary"
              @click="onUserSave()"
            >
              Save 儲存
            </button>
          </div>
        </div>
      </div>
      <!-- 收藏清單 start -->
      <div class="listcard">
        <div class="listcard-body">
          <h4 class="card-title">收藏list</h4>

          <div class="hori-timeline" dir="ltr">
            <div class="container-fluid">
              <ul class="list-unstyled row flex-nowrap overflow-auto">
                <li
                  v-for="(p, index) in collectionData"
                  :key="index"
                  class="col-md-3 mb-4"
                >
                  <div class="card h-100 mt-3">
                    <img
                      class="close-btn"
                      src="/src/assets/close.png"
                      @click="onCancelCollection(index)"
                    />
                    <div class="card-body">
                      <div
                        class="text-center bg-soft-primary text-primary mb-3"
                      >
                        收藏日期: {{ p.starttime }}
                      </div>
                      <h5 class="text-center mb-3">
                        {{ p.title }}
                      </h5>
                      <div class="text-center mb-3">
                        <img
                          class="img-fluid"
                          style="max-height: 200px"
                          :src="p.photoUrl"
                          alt="{{ p.title }}"
                        />
                      </div>
                      <p class="text-center">
                        {{ p.description }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 收藏清單 end -->
    </div>
  </div>
</template>

<script>
import UploadPhoto from "/src/components/UploadPhoto.vue";
import axios from "axios";
import { inject } from "vue";

export default {
  components: {
    UploadPhoto,
  },
  setup() {
    const baseUrl = inject("baseUrl");
    return { baseUrl };
  },
  data() {
    return {
      username: "未登入",
      toastMessage: "",
      isShowToast: false,
      isShowForm: false, // 控制新增的顯示
      isShowModel: false, // 控制對話盒的顯示
      prepareOnDeleteIndex: -1, // 預計要刪除的資料index
      userEditMode: false,

      selectedFile: null, //上傳照片用
      proFile: [], //使用者資料
      proFileEditMode: [], //存放編輯使用者資料用

      data: [], // 存放商品清單的變數
      collectionData: [],
      tempData: [], // 存放編輯後的資料用
      dataEdiorMode: [],
    };
  },
  // Vue要使用的方法
  methods: {
    onFileChange($event) {
      // 將使用者選擇的檔案存到變數
      this.selectedFile = $event.target.files[0];
      console.log($event.target.files[0].name);
      // this.onPreview($event.target.files[0]);

      // 準備資料
      const formData = new FormData();
      // 這個files名稱必須跟後端接收參數時設定的名字一樣，否則後端會收不到資料
      formData.append("files", this.selectedFile);

      // 定義API header
      const header = {
        "Content-Type": "multipart/form-data",
      };

      // 呼叫API
      axios.post("/file", formData, {}, header).then((response) => {
        console.log(response);
      });
    },
    onUserEdit() {
      this.userEditMode = true;
      this.proFileEditMode = JSON.parse(JSON.stringify(this.proFile));
    },
    onUserCancel() {
      this.userEditMode = false;
    },
    onUserSave() {
      //連API 更新資料庫資料
      axios.put("/account", this.proFileEditMode).then((response) => {
        // 處理API的response
        if (response.status == 200) {
          // API呼叫成功
          if (response.data.code == 0) {
            // 取的資料成功
            this.proFile = this.proFileEditMode;
            this.userEditMode = false;
            console.log("編輯成功");
          } else console.log("編輯失敗");
        } else console.log("API呼叫失敗");
      });
    },
    //*********收藏list下的方法() **************************************************//
    onEdit(index) {
      this.dataEdiorMode[index] = true; // 進入編輯模式

      // 複製資料到編輯用的tempData陣列內
      this.tempData[index] = JSON.parse(JSON.stringify(this.data[index]));
    },
    onDelete(index) {
      this.isShowModel = true;
      this.prepareOnDeleteIndex = index; // 紀錄準備要刪除的index
    },
    onCancelEdit(index) {
      this.dataEdiorMode[index] = false; // 離開編輯模式
    },
    // 確定編輯
    onOKEdit(index) {
      // 呼叫Update product API
      axios.put("/product", this.tempData[index]).then((response) => {
        if (response.status == 200 && response.data.code == 0) {
          // 更新成功
          // 更新原本的資料畫面
          this.data[index] = this.tempData[index];

          // 成功再離開編輯模式
          this.onCancelEdit(index);
          this.showToast("更新 " + this.data[index].title + " 成功");
        } else {
          this.showToast("更新 " + this.data[index].title + " 失敗");
        }
      });
    },
    confirmDelete() {
      // 呼叫刪除商品的API
      axios
        .delete("/product" + this.data[this.prepareOnDeleteIndex].id)
        .then((response) => {
          if (response.status == 200 && response.data.code == 0) {
            this.showToast(
              "刪除 " + this.data[this.prepareOnDeleteIndex].id + " 成功"
            );

            // 從網頁上移除已經刪除的商品資料
            this.data.splice(this.prepareOnDeleteIndex, 1);
          } else {
            this.showToast(
              "刪除 " + this.data[this.prepareOnDeleteIndex].id + " 失敗"
            );
          }

          this.isShowModel = false;
          this.prepareOnDeleteIndex = -1; // 紀錄準備要刪除的index
        });
    },
    onCancelCollection(index) {
      axios
        .delete(
          "/productshelves/" +
            this.username +
            "/" +
            this.collectionData[index].id
        )
        .then((response) => {
          if (response.status == 200) {
            // API呼叫成功
            if (response.data.code == 0) {
              // alert("新增資料成功");
              // alert("刪除資料成功");
              this.fetchUserCollection();
            } else {
              alert("刪除資料失敗");
            }
          }
        });
    },
    //**************************************************************************/
    showToast(msg) {
      this.isShowToast = true;
      this.toastMessage = msg;

      setTimeout(() => {
        this.isShowToast = false;
      }, 2000);
    },
    fetchUserCollection() {
      // 打API要商品資訊
      axios.get("/productshelves/" + this.username).then((response) => {
        // 處理API的response
        console.log(response);

        if (response.status == 200) {
          // API呼叫成功
          if (response.data.code == 0) {
            // 取的資料成功
            this.collectionData = response.data.data; // 將商品資訊存到變數內
            console.log(this.collectionData);
          } else this.collectionData = []; // 清空資料
        }
      });
    },
    //取得帳戶資訊
    userProFile() {
      axios.get("/account?username=" + this.username).then((response) => {
        // 處理API的response
        if (response.status == 200) {
          // API呼叫成功
          if (response.data.code == 0) {
            // 取的資料成功
            console.log(response.data.data);
            this.proFile = response.data.data[0];
          } else {
            this.proFile = []; // 清空資料
            console.log("取得帳戶資料失敗");
          }
        } else console.log("API呼叫失敗");
      });
    },
  },
  // 這個方法會網頁載入完畢後會自動被呼叫
  mounted() {
    this.username = localStorage.getItem("loginUser");
    localStorage.setItem("loginUser", this.username);
    this.userProFile(); //取得帳戶資訊
    this.fetchUserCollection(); //取得帳戶收藏清單
  },
};
</script>

<style scoped>
.pf-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/src/assets/pf004.jpg");
  width: 100%;
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}

.title {
  margin-top: 60px;
}

.nbtn {
  padding-left:70px;
  display: inline-flex;
  font-size: 22px;
  text-decoration: none;

}

h2 {
  font-size: 36px;
  font-family: "Hedvig Letters Serif", serif;
  padding: auto;
  text-align: center;
}
h4 {
  font-size: 24px;
  font-family: "Hedvig Letters Serif", serif;
  padding: auto;
  text-align: center;
}

.container {
  margin-top: 30px;
  width: auto;
  height: auto;
  color: #1a202c;
  text-align: left;
}
.card-left {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;
  height: 430px;
  background-color: #fff;
}

.card-right {
  position: relative;
  display: flex;
  width: 100%;
  height: 430px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.esbtn {
  margin: 10px;
  padding: 30px;
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  text-align: center;
}

/* 收藏清單 CSS */

.listcard-body {
  background: #eee;
  margin:auto;
}

.card-title {
  margin:auto;
  padding: auto;
  font-family: "Hedvig Letters Serif", serif;
  font-size: 30px;
  text-align: center;
}

.hori-timeline {
  border-top: 3px solid #e9ecef;
}
.hori-timeline .events .event-list {
  display: block;
  position: relative;
  text-align: center;
  padding-top: 70px;
  margin-right: 0;
}
.hori-timeline .events .event-list:before {
  content: "";
  position: absolute;
  height: 36px;
  border-right: 2px dashed #dee2e6;
  top: 0;
}
.hori-timeline .events .event-list .event-date {
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  width: 75px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 2px 4px;
}
@media (min-width: 1140px) {
  .hori-timeline .events .event-list {
    display: inline-block;
    width: 24%;
    padding-top: 45px;
  }
  .hori-timeline .events .event-list .event-date {
    top: -12px;
  }
}
.bg-soft-primary {
  background-color: rgba(64, 144, 203, 0.3) !important;
}

.listcard {
  border: none;
  margin-bottom: 24px;
  -webkit-box-shadow: 0 0 13px 0 rgba(236, 236, 241, 0.44);
  box-shadow: 0 0 13px 0 rgba(236, 236, 241, 0.44);
}

.close-btn {
  position: absolute;
  width: 32px;
  height: 32px;
  right: -16px;
  top: -16px;
  cursor: pointer;
}

.input-btn {
  display: none;
}
</style>
