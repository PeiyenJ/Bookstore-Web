<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="/src/assets/tm01.png"
            />
          </div>
          <div class="team-content">
            <h3 class="name">任珮言</h3>
            <h4 class="title">Frontend、GPT Prompt<br>架構設計、資料整理</h4>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="/src/assets/tm02.png"
            />
          </div>
          <div class="team-content">
            <h3 class="name">張駿洛</h3>
            <h4 class="title">Backend、Google串接<br>JAVA、SpringBoot</h4>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="/src/assets/tm03.png"
            />
          </div>
          <div class="team-content">
            <h3 class="name">闕子翔</h3>
            <h4 class="title">Backend、OpenAI串接<br>JAVA、SpringBoot</h4>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="/src/assets/robot02.png"
            />
          </div>
          <div class="team-content">
            <h3 class="name">OPEN AI</h3>
            <h4 class="title">ChatGPT<br>奧特曼團隊</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;

  border-collapse: collapse;
  display: flex;
  align-items: center;


}

.our-team {
  padding: 30px 0 40px;
  margin-bottom: 30px;
  width: 300px;
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.our-team .picture {
  display: inline-block;
  height: 130px;
  width: 130px;
  margin-bottom: 50px;
  z-index: 1;
  position: relative;
}

.our-team .picture::before {
  content: "";
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #2c89f4;
  position: absolute;
  bottom: 135%;
  right: 0;
  left: 0;
  opacity: 0.9;
  transform: scale(3);
  transition: all 0.3s linear 0s;
}

.our-team:hover .picture::before {
  height: 100%;
}

.our-team .picture::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #bed7f4;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.our-team .picture img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  transform: scale(1);
  transition: all 0.9s ease 0s;
}

.our-team:hover .picture img {
  box-shadow: 0 0 0 14px #f7f5ec;
  transform: scale(0.7);
}

.our-team .title {
  display: block;
  font-size: 15px;
  color: #4e5052;
  text-transform: capitalize;
}

.our-team .social {
  width: 100%;
  padding: 0;
  margin: 0;
  background-color: #ccddf1;
  position: absolute;
  bottom: -100px;
  left: 0;
  transition: all 0.5s ease 0s;
}

.our-team:hover .social {
  bottom: 0;
}

.our-team .social li {
  display: inline-block;
}

.our-team .social li a {
  display: block;
  padding: 10px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}

.our-team .social li a:hover {
  color: #1369ce;
  background-color: #f7f5ec;
}
</style>
