<template>
  <div class="body">
    <div class="toast" v-if="isShowToast">{{ toastMessage }}</div>

    <div id="header">
      <h3>系統管理Admin</h3>
      <p>商品管理頁</p>
    </div>
    <!-- 麵包屑 star-->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="./prod.html">Prod</a></li>
        <li class="breadcrumb-item"><a href="./signup.html">SignUp</a></li>
        <li class="breadcrumb-item"><a href="./faq.html">Faq</a></li>
        <li class="breadcrumb-item"><a href="./demo.html">Media</a></li>
        <li class="breadcrumb-item"><a href="./profile.html">AboutMe</a></li>
        <li class="breadcrumb-item active" aria-current="page">List</li>
      </ol>
    </nav>
    <!-- 麵包屑 end-->

    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>圖片連結</th>
              <th>書籍名稱</th>
              <th>內容描述</th>
              <!-- <th>預定</th> -->
              <th>屬性分類</th>
              <th>作者</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in data">
              <!-- <td data-title="編號">{{ p.id }}</td> -->
              <td data-title="編號">{{ index + 1 }}</td>
              <td data-title="圖片連結" class="">
                <div class="addr-col" v-if="!dataEdiorMode[index]">
                  {{ p.photoUrl }}
                </div>
                <input
                  v-else
                  class="editor-input"
                  v-model="tempData[index].photoUrl"
                />
              </td>
              <td data-title="書籍名稱">
                <div class="addr-col" v-if="!dataEdiorMode[index]">
                  {{ p.title }}
                </div>
                <input
                  v-else
                  class="editor-input"
                  v-model="tempData[index].title"
                />
              </td>
              <td data-title="內容描述">
                <div class="addr-col" v-if="!dataEdiorMode[index]">
                  {{ p.description }}
                </div>
                <input
                  v-else
                  class="editor-input"
                  v-model="tempData[index].description"
                />
              </td>
              <!-- <td data-title="預定">
            <div class="addr-col" v-if="!dataEdiorMode[index]">{{ p.price }}</div>
            <input v-else class="editor-input" v-model="tempData[index].price" />
          </td> -->
              <td data-title="屬性分類">
                <div class="addr-col" v-if="!dataEdiorMode[index]">
                  {{ p.storeUrl }}
                </div>
                <input
                  v-else
                  class="editor-input"
                  v-model="tempData[index].storeUrl"
                />
              </td>
              <td data-title="作者">
                <div class="addr-col" v-if="!dataEdiorMode[index]">
                  {{ p.storeName }}
                </div>
                <input
                  v-else
                  class="editor-input"
                  v-model="tempData[index].storeName"
                />
              </td>
              <td v-if="!dataEdiorMode[index]" class="select">
                <a class="button" @click="onEdit(index)">編輯</a>
                <a class="button" @click="onDelete(index)">刪除</a>
              </td>
              <td v-else class="select">
                <a class="button-cancel" @click="onCancelEdit(index)">取消</a>
                <a class="button-ok" @click="onOKEdit(index)">確定</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 再次確認是否刪除 -->
    <div v-if="isShowModel" class="model-container">
      <div class="model-title">確定要刪除資料嗎?</div>
      <div class="model-content">
        <img
          class="model-icon"
          src="https://static.vecteezy.com/system/resources/previews/000/440/213/non_2x/question-mark-vector-icon.jpg"
        />
        <div class="model-message">
          確定要刪除資料嗎?<br />確定要刪除資料嗎?<br /><br />請選擇!!!
        </div>
      </div>
      <div class="model-content">
        <div class="model-cancel" @click="isShowModel = false">取消</div>
        <div class="model-ok" @click="confirmDelete()">確定</div>
      </div>
    </div>
    <!-- 右下角新增書籍按鈕 -->
    <div class="add-newprod-btn" @click="isShowForm = true">
      <img src="/src/assets/plus.svg" style="width: 100%" />
    </div>

    <div class="toast" v-if="isShowToast">{{ toastMessage }}</div>

    <div v-if="isShowForm"></div>

    <!-- 新增書籍表單 -->
    <div class="addProdForm" v-if="isShowForm">
      <div class="title">新增書籍</div>
      <div class="input-container ic1">
        <input
          id="photo_url"
          class="input"
          type="text"
          addNewProdPlaceholder=""
          v-model="newProduct.photoUrl"
        />
        <div class="cut"></div>
        <label for="photo_url" class="addNewProdPlaceholder">圖片連結</label>
      </div>
      <div class="input-container ic1">
        <input
          id="title"
          class="input"
          type="text"
          addNewProdPlaceholder=""
          v-model="newProduct.title"
        />
        <div class="cut cut-short"></div>
        <label for="title" class="addNewProdPlaceholder">書籍名稱</label>
      </div>
      <!-- 屬性分類 api可能需要調整 -->
      <!-- <div class="input-container ic1">
        <input id="title" class="input" type="text" addNewProdPlaceholder="" v-model="newProduct.title" />
        <div class="cut cut-short"></div>
        <label for="title" class="addNewProdPlaceholder">屬性分類</label>
      </div>  -->

      <div class="input-container ic1">
        <input
          id="price"
          class="input"
          type="text"
          addNewProdPlaceholder=""
          v-model="newProduct.storeName"
        />
        <div class="cut cut-short"></div>
        <label for="price" class="addNewProdPlaceholder">作者</label>
      </div>
      <div class="input-container ic1" style="height: 170px">
        <input
          id="description"
          class="input"
          type="textarea"
          addNewProdPlaceholder=""
          v-model="newProduct.description"
        />
        <div class="cut cut-short"></div>
        <label for="description" class="addNewProdPlaceholder">內容描述</label>
      </div>

      <div class="btn-group">
        <button type="text" class="submit" @click.prevent="isShowForm = false,this.newProduct ={}" >
          取消新增
        </button>
        <button type="text" class="submit" @click.prevent="onSend()">確定新增</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ElMessage } from "element-plus";
import { inject } from "vue";

export default {
  data() {
    return {
      toastMessage: "",
      isShowToast: false,
      isShowForm: false, // 控制新增的顯示
      isShowModel: false, // 控制對話盒的顯示
      prepareOnDeleteIndex: -1, // 預計要刪除的資料index

      data: [], // 存放商品清單的變數
      tempData: [], // 存放編輯後的資料用
      dataEdiorMode: [],
      newProduct: {
        id: 0,
        photoUrl:'',
        title: '',
        storeName: '',
        description:'',
      },
    };
  },
  // Vue要使用的方法
  methods: {
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
    // 送出新增的書籍
    onSend(){
      console.log(this.newProduct);
      axios.post("/product",this.newProduct)
      .then((response) =>{
        if (response.status == 200 && response.data.code == 0) {
          // 將新增的資料丟給畫面顯示
          this.data.push(JSON.parse(JSON.stringify(this.newProduct)));
          this.isShowForm = false;
          this.newProduct = {};
          ElMessage.success("新增成功");
          this.productList();
        }
        else
        ElMessage.error("新增失敗");
      })
    },
    // 確定編輯
    onOKEdit(index) {
      // 呼叫Update product API
      axios
        .put("/product", this.tempData[index])
        .then((response) => {
          if (response.status == 200 && response.data.code == 0) {
            // 更新成功
            // 更新原本的資料畫面
            this.data[index] = this.tempData[index];

            // 成功再離開編輯模式
            this.onCancelEdit(index);
            ElMessage.success("更新[" + this.data[index].title + "]成功");
          } else {
            ElMessage.error("更新[" + this.data[index].title + "]失敗");
          }
        });
    },
    confirmDelete() {
      // 呼叫刪除商品的API
      axios.delete("/product/"+this.data[this.prepareOnDeleteIndex].id)
        .then((response) => {
          if (response.status == 200 && response.data.code == 0) {
            ElMessage.success("刪除[" + this.data[this.prepareOnDeleteIndex].title + "]成功");
            // 從網頁上移除已經刪除的商品資料
            this.data.splice(this.prepareOnDeleteIndex, 1);
          } else {
            ElMessage.error("刪除[" + this.data[this.prepareOnDeleteIndex].title + "]失敗");
          }

          this.isShowModel = false;
          this.prepareOnDeleteIndex = -1; // 紀錄準備要刪除的index
        });
    },
    // 取product內所有資料
    productList(){
       axios.get("/product").then((response) => {
      // 處理API的response
      console.log(response);

      if (response.status == 200) {
        // API呼叫成功
        if (response.data.code == 0) {
          // 取的資料成功
          this.data = response.data.data; // 將商品資訊存到變數內
          console.log(this.data);
        } else this.data = []; // 清空資料
      }
    });
    },
    showToast(msg) {
      this.isShowToast = true;
      this.toastMessage = msg;

      setTimeout(() => {
        this.isShowToast = false;
      }, 2000);
    },
  },
  // 這個方法會網頁載入完畢後會自動被呼叫
  mounted() {
    // 取product內資料
    this.productList();
  },
};
</script>

<style scoped>
#header {
  margin: 20px;
  font-family: "Hedvig Letters Serif", serif;
}
#header > h3 {
  text-align: center;
  font-size: 40px;
  font-family: "Hedvig Letters Serif", serif;
  filter: opacity(0.7);
}
#header > p {
  text-align: center;
  font-size: 30px;
  filter: opacity(0.5);
  font-family: "Hedvig Letters Serif", serif;
}
.breadcrumb {
  padding-left: 20px;
  font-size: 20px;
}

div {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  color: #0a3251;
  font-weight: bold;
  margin-right: 10px;
}

thead th {
  background-color: #202932;
  color: #fff;
  text-align: center;
  padding: 10px;
}

tr {
  padding-bottom: 50px;
  border-bottom: 1px solid #9d9fa0;
  background-color: rgb(249, 240, 227);
}

td {
  max-width: 250px;
  text-align: center;
  word-break: break-all;
}

.addr-col {
  max-width: 300px;
  /* white-space: nowrap; */
  overflow: auto;
  word-break: normal;
}

.select {
  padding-bottom: 20px;
}

.select a {
  margin-right: 5px;
  margin-bottom: 5px;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
}

.select a:hover {
  background-color: yellowgreen;
}

.button {
  line-height: 1;
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
  background-color: #4b908f;
}

.button-cancel {
  line-height: 1;
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
  background-color: #4b908f;
  background-color: brown;
}

.button-ok {
  line-height: 1;
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  color: #fff;
  padding: 8px;
  background-color: #4b908f;
  background-color: midnightblue;
}

.button-cancel:hover {
  background-color: brown;
}

.button-ok:hover {
  background-color: midnightblue;
}

.toast {
  background-color: #00aa00;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 30px;
  position: fixed;
  top: 10px;
  z-index: 2;
  margin: auto;
}

.model-container {
  display: flex;
  position: fixed;
  width: 400px;
  border-radius: 20px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  height: fit-content;
  flex-direction: column;
  background-color: rgb(219, 209, 209);
  padding-bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
}

.model-title {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 20px;
  font-size: 1.5em;
  font-weight: 800;
}

.model-content {
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 20px;
  gap: 20px;
  justify-content: center;
}

.model-icon {
  width: 32px;
  height: 32px;
  margin: 20px;
  margin-right: 0px;
  background-color: #e22756;
}

.model-message {
  width: 100%;
  color: #202932;
}

.model-cancel,
.model-ok {
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  border: solid;
}
/* 以下都是對話盒樣式 */

.model-cancel {
  background-color: #e6426b;
}

.model-ok {
  background-color: rgb(37, 85, 175);
}

.editor-input {
  width: 80%;
  height: 30px;
  padding: 5px;
  border: none;
  border-radius: 5px;
}

.add-newprod-btn {
  width: 70px;
  height: 70px;
  max-height: 70px;
  max-width: 70px;
  background-color: rgb(16, 89, 46);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  padding-bottom: 2px;
  text-decoration: none;
  border-radius: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;

  z-index: 1;
}

.add-newprod-btn:hover {
  background-color: rgb(16, 89, 46);
}

.addProdForm {
  background-color: aliceblue;
  top: 0;
  left: 0;
  position: relative;
  display: unset;
  border-radius: 20px;

  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

.title {
  margin-left: 4%;
  color: #970c0a;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  margin-left: 3%;
  height: 40px;
  position: relative;
  width: 90%;
}

.ic1 {
  margin-top: 30px;
}

.input-container ic2 {
  margin-top: 50px;
}

.input {
  background-color: #eaeaee;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #5d2727;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 10;
  width: 100%;
}

.cut {
  background-color: #bfc2e7;
  border-radius: 10px;
  height: 30px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
}

.input:focus ~ .cut,
.input:not(:addnewprodplaceholder-shown) ~ .cut {
  transform: translateY(8px);
}

.addNewProdPlaceholder {
  color: #a5a5a8;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 35px;
  transition: transform 200ms, color 200ms;
  top: 15px;
  font-size: 1em;
}

.input:focus ~ .addNewProdPlaceholder,
.input:not(:addnewprodplaceholder-shown) ~ .addNewProdPlaceholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:addnewprodplaceholder-shown) ~ .addNewProdPlaceholder {
  color: #808097;
}

.input:focus ~ .addNewProdPlaceholder {
  color: #dc2f55;
}

.btn-group {
  display: flex;
  gap: 20px;
}

.submit {
  background-color: rgb(24, 155, 39);
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  margin-top: 20px;
  /* outline: 0;  */
  text-align: center;
  width: 100%;
}

.submit:active {
  background-color: rgb(16, 89, 46);
}

.btn-group {
  margin-left: 3%;
  display: flex;
  align-items: center;
  width: 90%;
  gap: 20px;
}
</style>
