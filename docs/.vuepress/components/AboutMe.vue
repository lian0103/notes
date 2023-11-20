<script setup></script>

<template>
  <div class="about-me">
    <p>
      背景: <br />
      1.選戰助理、國會助理 3y (已畢業) <br />
      2.軟體工程師 4y~ (持續) <br />
      <br />
      經歷: <br />
      緯創軟體<br />
      大樹醫藥<br />
      <br />
      現職: 星宇航空 前端工程師 <br />
      <br />技能程度: <br />
      1.選舉議題、文宣活動策劃 (outdated)
      <br />
      2.網站建置 (understanding) <br />
      3.web程式設計與開發 （experienced） <br />
      4.第三方服務串接 (competent)
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
