<script setup></script>

<template>
  <div class="about-me">
    <p>
      背景: <br />
      1.國科會研究助理 1.5y <br />
      2.選戰助理、國會助理 3y <br />
      3.軟體工程師 4y ~ now  <br />
      <br />
      軟體業主要經歷: <br />
      緯創軟體<br />
      大樹醫藥<br />
      <br />
      現職: 星宇航空 前端工程師 <br />
      工作比重: 前端開發(vuejs)60%，後端開發(nodejs)20%，DevOpt相關20%
      <br />
      <br />技能程度: <br />
      1.網站建置 (understanding) <br />
      2.web應用程式設計與開發 （experienced） <br />
      3.第三方應用服務串接 (capable) <br />
      4.航空運輸業組員需求規劃與分析 (junior)
      <br />
    </p>
    <img src="../public/images/me2.jpg" alt="" />
  </div>
</template>

<style>
.about-me {
  width: 100%;
  padding: 15px 0;
  color: #444;
  display: flex;
  gap: 10px;
}

.about-me p {
  flex-grow: 2;
  margin-top: 0;
  word-wrap: break-word;
}

.about-me img {
  display: block;
  width: 280px;
  height: 280px;
  border-radius: 9999px;
}

@media screen and (max-width: 640px) {
  .about-me {
    flex-direction: column;
    flex-flow: column-reverse;
  }
  .about-me img {
    width: 220px;
    height: 220px;
    margin: auto;
  }
}
</style>
