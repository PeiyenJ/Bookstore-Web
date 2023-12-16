<template>
  <div class="prod-bg">
    <div class="super-container">
      <!-- <Navbar> -->
      <div class="nav-bar">
        <a class="btn" href="./list.html">Admin</a>
        <a class="btn" href="./profile.html">AboutMe</a>
        <a class="btn" href="./faq.html">GTP _____</a>
        <a class="btn" href="./demo.html">Media</a>
        <a class="btn" href="./doc.html"> Document</a>
      </div>
      <div class="robot">
        <img src="/src/assets/robot02.png" />
      </div>
      <!-- 輪播start -->
      <div class="container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/src/assets/top001.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <!-- <h4>年度選書 TOP 1</h4> -->
                <p>
                  <!-- Some representative placeholder content for the first slide. -->
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/src/assets/top002.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <!-- <h4>年度選書 TOP 2</h4> -->
                <!-- <p>
                  Some representative placeholder content for the second slide.
                </p> -->
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="/src/assets/top003.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <!-- <h4>溫馨藏書月</h4> -->
                <!-- <p>
                  Some representative placeholder content for the third slide.
                </p> -->
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!-- 輪播end -->

      <div id="header">
        <h1>Accueillir</h1>
        <p>The Bookstore Web</p>
      </div>

      <div class="container">
        <!-- 卡片資料 -->
        <!-- <div v-for="p in data" class="card"> -->
        <div v-for="(p, index) in data" class="productCard">
          <div class="card-image">
            <img :src="p.photoUrl" />
          </div>
          <!-- addList收藏 -->
          <div class="addtag">
            <!-- <a class="add-list" href="./profile.html">Add to List</a> -->
            <div
              class="add-list"
              v-if="isCollected[index] == false"
              @click="onSendCollection(index)"
            >
              <i class="material-symbols-outlined">heart_plus</i>收藏
            </div>
            <div
              class="add-list-clicked"
              v-if="isCollected[index] == true"
              @click="clickToProfile"
            >
              <i class="material-icons">exit_to_app</i>已收藏
            </div>
          </div>
          <!-- tag標籤 -->
          <div class="tags">
            <div class="tag-container">
              <div class="tag">
                <div class="tag-side tag-2-side">
                  <div class="tag-text tag-2-text">
                    {{ p.storeName }}:{{ p.title }}
                    <div class="rule-diagonal"></div>
                  </div>
                </div>

                <div class="tag-side tag-2-side is-back">
                  <div class="tag-text tag-2-text">
                    {{ p.description }}
                    <div class="rule-diagonal"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 使用element ui -->
      <!-- 分頁選單 -->
      <el-pagination
        class="pagination"
        style="margin-bottom: 100px; z-index: 3"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[4, 8, 12]"
        :small="false"
        :background="true"
        :disabled="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange()"
        @current-change="handleCurrentChange()"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import NavbarVue from '../components/Navbar.vue';
import { inject } from "vue";

export default {
  data() {
    return {
      //分頁用變數
      username: "未登入",
      currentPage: 1,
      pageSize: 4,
      total: 0, // 總筆數
      
      // 存放商品資訊
      data: [],
      collectionData: [],
      sendCollectionData: {},

      isCollected: [],
    };
  },
  // Vue要使用的方法
  methods: {
    clickToProfile() {
      location.href = "./profile.html";
    },
    handleSizeChange($event) {
      console.log("handleSizeChange");
      console.log($event);

      //更新卡片
      this.fetchCollectionAndProduct();
    },
    // 切換商品分頁
    handleCurrentChange($event) {
      console.log("handleCurrentChange");
      console.log($event);
      // 更新卡片
      this.fetchCollectionAndProduct();
    },

    // // 送出要新增的商品資料
    // onSend() {
    //   axios.post("/product", this.newProduct).then((response) => {
    //     // 打API成功
    //     if (response.status == 200 && response.data.code == 0) {
    //       // alert('新增資料成功');
    //       this.showToast("新增資料成功");

    //       // 將新增的資料丟給畫面顯示
    //       this.data.push(JSON.parse(JSON.stringify(this.newProduct)));
    //     } else {
    //       alert("新增資料失敗");
    //     }
    //   });
    //   // 隱藏對話框
    //   this.isShowForm = false;
    // },
    // showToast(msg) {
    //   this.isShowToast = true;
    //   this.toastMessage = msg;

    //   setTimeout(() => {
    //     this.isShowToast = false;
    //   }, 2000);
    // },

    onSendCollection(index){
        this.sendCollectionData={
          username : ""+this.username,
          productID : this.data[index].id,
          starttime : "",
          endtime :""
        };
        axios.post("/productshelves",this.sendCollectionData)

        .then((response) => {
          if (response.status == 200) {
            // API呼叫成功
            if (response.data.code == 0) {
              // alert("新增資料成功");
              this.isCollected[index] = true;
            } else {
              alert("新增資料失敗");
            }
          }
        });
      return;
    },
    async fetchProduct() {
      // 打API要商品資訊
      await axios
        .get("/v2/product?limit=" +
            this.pageSize +
            "&offset=" +
            (this.currentPage - 1) * this.pageSize +
            "&sortMode=0"
        )
        .then((response) => {
          // 處理API的response
          console.log(response);

          if (response.status == 200) {
            // API呼叫成功
            if (response.data.code == 0) {
              // 取的資料成功
              this.data = response.data.data.products; // 將商品資訊存到變數內
              for (let i = 0; i < this.data.length; i++) {
                console.log("data[" + i + "]=" + this.data[i].id);
              }
              this.total = response.data.data.total; // 商品總數
              this.isCollected = Array(this.data.length).fill(false);
            } else this.data = []; // 清空資料
          }
        });
      return;
    },

    async fetchCollection(){
      await axios.get("/productshelves/"+this.username)
      .then((response) => {
        if (response.status == 200) {

            // API呼叫成功
            if (response.data.code == 0) {
              this.collectionData = response.data.data; // 將商品資訊存到變數內
              // if (this.data && this.data.length > 0){
              //   console.log("data[0]="+this.data[0].id);
              // }else {
              //   console.log("data is empty");
              // }
              if (this.collectionData && this.collectionData.length > 0) {
                // console.log("collectionData[0]="+this.collectionData[0].id);
                for (let i = 0; i < this.data.length; i++) {
                  for (let j = 0; j < this.collectionData.length; j++) {
                    // console.log("collectionData["+j+"]="+this.collectionData[j].id);
                    if (this.data[i].id == this.collectionData[j].id) {
                      this.isCollected[i] = true;
                    }
                  }
                }
              }
            } else this.collectionData = []; // 清空資料
          }
        });
    },
    async fetchCollectionAndProduct() {
      try {
        await this.fetchProduct().then(() => {
          this.fetchCollection();
        });
      } catch (error) {
        console.log("Error in mounted:", error);
      }
    },
    // component : {
    //   NavbarVue
    // }
  },

  // 這個方法會網頁載入完畢後會自動被呼叫
  mounted() {
    // 取得網址列參數
    // const queryString = window.location.search;
    // 解析參數列
    // const parameters = new URLSearchParams(queryString);
    // 取得使用者名稱
    // this.username = parameters.get("username");

    // 打API要商品資訊
    this.username = localStorage.getItem("loginUser");
    localStorage.setItem('loginUser',this.username);
    console.log(this.username);

    this.fetchCollectionAndProduct();
  },
};
</script>

<style scoped>
*,
*:after,
*:before {
  box-sizing: border-box;
}

.prod-bg {
  position: absolute;
  top: 0;
  left: 0;
  background: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80);
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}

.super-container {
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: auto;
}

.container {
  padding-left: 380px;
  margin-top: 50px;
  min-height: fit-content;
}

.carousel-item {
  position: relative;
  width: 800px;
  height: auto;

}

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
  margin-left: 35px;
  font-size: 20px;
  color: black;
  filter: opacity(0.7);
}

.robot {
  margin-top: -70px;
  margin-left: 395px;
}


#header {
  margin: 20px;
  font-family: "Hedvig Letters Serif", serif;
}
#header > h1 {
  text-align: center;
  font-size: 50px;
  filter: opacity(0.7);
}
#header > p {
  text-align: center;
  font-size: 30px;
  filter: opacity(0.5);
  font-style: italic;
}
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}
.productCard {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 50px;
  margin-left: 15px;
}

.card-image {
  width: 250px;
  height: 350px;
}
.card-image > img {
  width: 250px;
  height: 350px;
  border-radius: 40px;
  object-fit: cover;
  object-position: bottom;
}
/* addList */
.addtag {
  padding-left: 130px;
  transform: rotate(0.03turn);
  text-decoration: none;
}

.add-list {
  background-color: #e184d0;
  width: 70px;
  text-decoration: none;
  text-align: left;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  /* margin-top: 50px;
  margin-left: 35px; */
  color: white;
  filter: opacity(0.9);
  cursor: pointer;
}
.add-list-clicked {
  background-color: #b4e184;
  width: 90px;
  text-decoration: none;
  text-align: left;
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  /* margin-top: 50px;
  margin-left: 35px; */
  color: black;
  filter: opacity(0.9);
  cursor: pointer;
}

.tags {
  padding-left: 50px;
  margin-top: -20px;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: flex;
}

.tag-container {
  width: 300px;
  height: 300px;
  margin: 20px;
  position: relative;
  -webkit-perspective: 300px;
  perspective: 300px;
}

.tag {
  width: 70%;
  height: 70%;
  position: absolute;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}

.tag-container:hover .tag {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.tag-side {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: "Hedvig Letters Serif", serif;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.tag-side.is-back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  z-index: 2;
}

.tag-text {
  width: 100%;
  padding: 0 20px;
  color: #222;
  font-size: 20px solid 1px;
  font-family: "Hedvig Letters Serif", serif;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

/* Tag 2 */
.tag-2-side:before,
.tag-2-side:after {
  content: " ";
  background: #b6dfde;
  height: 50px;
  position: absolute;
  top: 0;
  left: 50px;
  right: 50px;
  -webkit-transform: skew(-45deg) translate3d(0, 0, 0);
  transform: skew(-45deg) translate3d(0, 0, 0);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

.tag-2-side.is-back:before,
.tag-2-side.is-back:after {
  background: #47ada0;
}

.tag-2-side:after {
  -webkit-transform: skew(45deg);
  transform: skew(45deg);
}

.tag-2-text:before {
  content: " ";
  background: #fff;
  width: 27px;
  height: 27px;
  border: 6px solid #47ada0;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 1;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.tag-2-side.is-back .tag-2-text:before {
  border-color: #b6dfde;
}

.tag-2-text {
  background: #b6dfde;
  margin-top: 50px;
  padding-bottom: 30px;
}

.tag-2-side.is-back .tag-2-text {
  background: #47ada0;
}

.rule-diagonal {
  background: -webkit-repeating-linear-gradient(
    45deg,
    #e44f47,
    #e44f47 7px,
    transparent 7px,
    transparent 14px,
    #fff 14px,
    #fff 21px,
    transparent 21px,
    transparent 28px
  );
  background: repeating-linear-gradient(
    45deg,
    #e44f47,
    #e44f47 7px,
    transparent 7px,
    transparent 14px,
    #fff 14px,
    #fff 21px,
    transparent 21px,
    transparent 28px
  );
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 0;
}

.pagination {
  justify-content: center;
}


</style>
