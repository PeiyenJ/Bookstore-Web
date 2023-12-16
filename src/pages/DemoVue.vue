<template>
  <div class="media-bg">
    <!-- 輪播start -->
    <div class="container-fluid">
      <div class="nav-bar">
      <a class="nbtn" href="./prod.html">Home</a>
      <a class="nbtn" href="./profile.html">AboutMe</a>
      <a class="nbtn" href="./faq.html">呼叫Y呆</a>
      <div class="robot">
        <img src="/src/assets/robot02.png" />
      </div>
      </div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
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
            <img src="/src/assets/say001.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>近請期待</h5>
              <p>
                <!-- Some representative placeholder content for the first slide. -->
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/src/assets/story02.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>台灣美眉走跳以色列</h5>
              <!-- <p>
                  Some representative placeholder content for the second slide.
                </p> -->
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/src/assets/story03.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>　</h5>
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
    <!-- 倒數計時 start -->
    <div class="container-demo-vue">
      <Countdown
        deadline="2024-02-29 22:00:00"
        @timeElapsed="$event = onTimeElapsed()"
      />
    </div>

    <div class="row">
      <!-- <div class="col-3 d-none d-md-flex flex-column">
        <img
          src="/src/assets/robot05.png"
          class="card-img-top p-5"
        />
        <h3 class="mb-5">影音分類</h3>

        <p><a class="ms link-opacity-75-hover" href="#">兒童繪本</a></p>
        <p><a class="link-opacity-75-hover" href="#">信仰科學</a></p>
        <p><a class="link-opacity-75-hover" href="#">建築之美</a></p>

      </div>  -->

      <div class="col-12 col-md-12">
        <h2 class="me-1">本季推薦</h2>
        <div class="row">
          <div class="col-12 col-md-6">
            <!-- <img src="/src/assets/japan2.jpg" style="width: 100%; height: 100%; object-fit: cover;" /> -->
            <div class="me-2">
            <h4>安妮視角的聖經世界</h4>
            <h6>2023-06-21 15:00</h6>
            <div class="yt-card">
              <iframe
                width="550"
                height="305"
                src="https://www.youtube.com/embed/m0-EnK-k_wE?si=mbfiv-X6lJT2XW97"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          
          </div>
            <p>空虛寂寞覺得冷,很想躺平嗎？你知道上帝其實很科學、很懂你嗎？</p>
          </div>

          <div class="col-12 col-md-6">
            <!-- <img src="/src/assets/japan2.jpg" style="width: 100%; height: 100%; object-fit: cover;" /> -->
            <div class="me-2">
            <h4>開箱教會</h4>
            <h6>2022-03-11 15:00</h6>
            <div class="yt-card">
              <iframe
                width="550"
                height="305"
                src="https://www.youtube.com/embed/videoseries?si=G9I_bjLyFLqPxQTS&amp;list=PLe-YK1dmFUsLqQS84cjf4L69vUDnsy3Xi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            </div>
            <p>
              台灣接棒的好朋友們，當年馬偕來到台灣，讓我們有機會聽聞福音，今天在台灣每一個被神呼召建立的教會與機構都是台灣復興的要角，讓我們繼續為這些同奔天路的夥伴們守望禱告喔！
            </p>
          </div>

        </div>

        <h2 class="mt-5">更多精選...</h2>
        <div class="row pe-3">
          <div class="col-12 col-md-4 p-3 ps-4">
            <div class="card">
              <img
                src="/src/assets/song001.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body p-0">
                <h5 class="card-title">SOP聖誕音樂組曲</h5>
                <p class="card-text">
                  榮耀歸於至高真神/我們高舉耶穌的名/最美的禮物/永遠尊貴/我們歡迎君王降臨/聖善夜/是為了愛/我們愛戴的王
                </p>
                <a
                  href="https://youtu.be/Q_oaQQtiho8?si=dmjelahnYWFEnD4U"
                  class="btn btn-outline-success"
                  >More...</a
                >
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 p-3 ps-4">
            <div class="card">
              <img
                src="/src/assets/build001.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body p-0">
                <h5 class="card-title">教堂敲敲門</h5>
                <p class="card-text">
                  充滿文化寶藏的建築物，你看見它的美、祂的偉大嗎？讓我們跟著哈佛夫妻檔去敲敲教堂的門～
                </p>
                <a
                  href="https://youtube.com/playlist?list=PLe-YK1dmFUsIr6iRZBgbFzV46rWAFaAzh&si=s2A4-F6S7WWWktzU"
                  class="btn btn-outline-success"
                  >More...</a
                >
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 p-3 ps-4">
            <div class="card">
              <img
                src="/src/assets/story01.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body p-0">
                <h5 class="card-title">繞著地球說故事</h5>
                <p class="card-text">
                  這豐富的地球上有著各式各樣的故事，讓我們繞著地球說故事吧～
                </p>
                <a
                  href="https://youtube.com/playlist?list=PLe-YK1dmFUsIf5AMlVJ6mFl55xc1wp2bn&si=CkeRAs6DgQOwumJY"
                  class="btn btn-outline-success"
                  >More...</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 側邊選單 start -->
    <!--
    <div
      class="d-md-none"
      style="position: fixed; top: 10px; left: 10px; z-index: 1"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
    >
       <img src="/src/assets/vue.svg" /> 
    </div>

    <div
      class="d-md-none offcanvas offcanvas-start"
      data-bs-backdrop="false"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">影音分類</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
         <img
          src="/src/assets/say001.jpg"
          class="card-img-top p-0 mb-5"
          style="width: 100%; height: 150px; object-fit: cover"
          alt="..."
        /> 

        <p><a class="link-opacity-75-hover" href="#">兒童繪本</a></p>
        <p><a class="link-opacity-75-hover" href="#">信仰科學</a></p>
        <p><a class="link-opacity-75-hover" href="#">建築之美</a></p>
        
        <button type="button" class="btn btn-primary m-3">Primary</button>
        <button type="button" class="btn btn-success">Success</button> 
      </div>
    </div>-->
    <!-- footer -->
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
      <symbol id="bootstrap" viewBox="0 0 118 94">
        <title>Bootstrap</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
        ></path>
      </symbol>
      <symbol id="facebook" viewBox="0 0 16 16">
        <path
          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
        />
      </symbol>
      <symbol id="instagram" viewBox="0 0 16 16">
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        />
      </symbol>
    </svg>

    <div class="container">
      <footer
        class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"
      >
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg class="bi" width="30" height="24">
              <use xlink:href="#bootstrap" />
            </svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary"
            >&copy; 2023 Company, Inc</span
          >
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#"
              ><svg class="bi" width="24" height="24">
                <use xlink:href="#instagram" /></svg
            ></a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#"
              ><svg class="bi" width="24" height="24">
                <use xlink:href="#facebook" /></svg
            ></a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import { Countdown } from "vue3-flip-countdown";

export default {
  components: {
    Countdown,
  },
  methods: {
    onTimeElapsed() {
      alert("開張啦");
    },
  },
};
</script>

<style scoped>

.media-bg {
  position: relative;
  top: 0;
  bottom: 0;
  background: url(https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1776&q=80);
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
}



.container-fluid {
  padding-left: 70px;
  margin:0px;
  /* min-height: fit-content; */
  width: 80%;
  height: 600px;
  overflow: hidden;

}

.container-demo-vue {
  position: absolute;
  margin-top: 20px;
  margin-bottom: 50px;
  width: 100%;

}

.nav-bar {
  margin-top: 30px;
  margin-bottom: 30px;
  text-decoration: none;
}
.nbtn {
  width: 150px;
  margin-left: 35px;
  font-size: 20px;
  font-family: "Hedvig Letters Serif", serif;
  color: black;
  text-decoration: none;
}

.robot {
  display:inline-block;
  margin-top: -0px;
  margin-left: 0px;
  
  
}

.me-1 {
margin-top: 50px;
margin-bottom: 30px;
font-size: 30px;
font-family: "Hedvig Letters Serif", serif;
padding-left: 70px;
}

.me-2 {
margin-top: 30px;
margin-bottom: 30px;
font-size: 30px;
font-family: "Hedvig Letters Serif", serif;
padding-left: 100px;
}

h4, h6 {
  padding-left:20px ;

}
p {
  padding-left:150px ;
  font-size: 18px;
  font-weight: 700;
  max-width: 700px;

}

.yt-card {
  max-width: 580px;
  text-align: center;
  justify-self: start;
  margin-top: 20px;
  padding-left: 20px;

}


/* 更多 */

.mt-5 {
font-size: 30px;
font-family: "Hedvig Letters Serif", serif;
padding-left: 70px;
}

.card {
  margin: 20px;
  height: auto;
}

.card-title {
  margin: 5px;
  padding: 3px;
  font-size: 20px;
}

.card-text {
  padding-left:50px ;
  font-size: 18px;
  font-weight: 500;
}

.btn-outline-success {
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 20px;

}
</style>
