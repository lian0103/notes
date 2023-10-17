<script setup></script>

<template>
  <div class="about-me">
    <p>
      從Frontend開發進入軟體業，當時處於JQuery和前端現代框架的交替熱潮，最後漸漸熟悉以Vue為主的生態鏈。
      儘管技術框架總是推陳出新，但核心本質是能有架構地去完成開發工作，且能有好的開發體驗，那就是不錯的選擇
      <br />
      <br />筆記除了前端，還紀錄了些像Nodejs、部署工具、Phthon和計算機相關的學習內容。希望慢慢累積技能樹，哪天結合起來做個有趣的產品
      <br />
      <br />
      ## 現職: 星宇航空 前端工程師
    </p>
    <img src="../public/images/me.jpg" alt="" />
  </div>
</template>

<style>
.about-me {
  width: 100%;
  padding: 15px 0;
  color: #444;
  display: flex;
  gap: 20px;
}

.about-me p {
  /* flex-grow: 2; */
  margin-top: 0;
  word-wrap: break-word;
}

.about-me img {
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 9999px;
}

@media screen and (max-width: 640px) {
  .about-me img {
    display: none;
  }
}
</style>
