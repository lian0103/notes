<script setup></script>

<template>
  <div class="about-me">
    <p>
      ENFJ-A 主人公性格(?!)<br />
      web開發技術休耕中，工程師生涯轉型~
      <br /><br />
      軟體業主要經歷<br />
      🖥 緯創軟體 前端工程師<br />
      🌳 大樹醫藥 前端工程師<br />
      🛩 星宇航空 前端工程師<br />

      <br />技能範圍<br />
      1.網站建置與部署<br />
      2.web應用程式架構設計與開發 <br />
      3.第三方API服務串接 (line google..等) <br />
      4.設計稿版面實作與UI元件庫開發 <br />
      <br />
      「徹底模仿能幹的人」，是借鏡對方已經成功的方法。 <br />
      「站在對方的立場，徹底思考事務」，這會幫助我們做出更好的選擇。 <br />
      <br />

    </p>
    <div class="md-flex">
      <img src="../public/images/me3.jpg" alt="" />
      <hr/>
      <img src="../public/images/me2.jpg" alt="" />
    </div>

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
  width: 220px;
  height: 220px;
  border-radius: 4px;
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
