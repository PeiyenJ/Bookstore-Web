<template>
  <a class="vbtn" href="./prod.html">Home</a>
  <a class="vbtn" href="#webs">網站架構</a>
  <a class="vbtn" href="#our">our team</a>
  <h1>Web Design 網站設計規格書</h1>


  <div class="doc">
    <img src="/src/assets/openbook.jpg" />
  </div>

  
  <h1>Web Structure網站架構</h1>
  <div class="structure" id="webs">
    <img src="/src/assets/structure.jpg" />
  </div>

  <div class="team-card" id="our">
  <h2>Team Members 團隊介紹</h2>
    <Team></Team>
  </div>
</template>

<script>
import Team from "/src/components/Team.vue";

export default {
  components: {
    Team,
  },
};
</script>

<style scoped>
.doc {
  width: 100%;
  text-align: center;
}

h1, h2 {
  color:red;
  margin-top: 30px;
  padding-left: 20px;
 
  text-align: center;
}
.structure {
  width: 100%;
  text-align: center;
}

.vbtn {
  font-size: 30px;
  margin-top:50px ;
  padding-left: 50px;
  width: 180px;
 
  display: inline-flex;
  position: relative;
  
  
}
</style>
