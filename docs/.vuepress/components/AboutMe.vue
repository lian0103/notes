<script setup></script>

<template>
  <div class="about-me">
    <p>
      軟體業主要經歷<br />
      🖥 緯創軟體 前端工程師<br />
      🌳 大樹醫藥 前端工程師<br />
      🛩 星宇航空 前端工程師<br />

      <br />技能範圍<br />
      1.網站建置與部署<br />
      2.web應用程式架構設計與開發 <br />
      3.第三方API服務串接 (line google..等) <br />
      4.航空組員系統需求分析 <br />
      <br />
      在學習和工作上，「徹底模仿能幹的人」，是借鏡對方已經成功的方法。更進一步，「站在對方的立場，徹底思考事務」，這會幫助我們做出更好的選擇。
    </p>
    <img src="../public/images/me2.jpg" alt="" />
  </div>
</template>

<style>
.about-me {
  width: 100%;
  padding: 15px 0 0 0;
  /* color: #444; */
  display: flex;
  gap: 10px;
}

.about-me p {
  flex-grow: 2;
  margin-top: 0;
  word-wrap: break-word;
  margin-bottom: 0px;
}

.about-me img {
  display: block;
  width: 280px;
  height: 280px;
  border-radius: 10px;
}

@media screen and (max-width: 640px) {
  .about-me {
    flex-direction: column;
    flex-flow: column-reverse;
  }
  .about-me img {
    width: 220px;
    height: 220px;
    margin-right: auto;
  }
}
</style>
