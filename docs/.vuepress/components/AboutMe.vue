<script setup></script>

<template>
  <div class="about-me">
    <p>
      ENFJ-A 主人公性格<br />
      <br />
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
      <span class="strong">「 專注當下，付諸行動。」</span>
    </p>
    <div class="md-flex">
      <img src="../public/images/me3.jpg" alt="" />
      <hr/>
      <img src="../public/images/me4.jpg" alt="" />
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

.strong{
  font-weight: 700;
  font-size: 20px;
}

.about-me img {
  display: block;
  height: 220px;
  border-radius: 4px;
}

@media screen and (max-width: 640px) {
  .about-me {
    flex-direction: column;
    flex-flow: column-reverse;
  }
  .about-me img {
    height: 220px;
    margin-right: auto;
  }
}
</style>
