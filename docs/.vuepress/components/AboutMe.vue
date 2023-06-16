<script setup></script>

<template>
  <div class="about-me">
    <p>
      臺北大學碩畢，從資策會前端班(Sep/2018 - Mar/2019)培訓後轉職。目前工作經歷
      4-5 年，曾任職雲鼎科技、緯創軟體、大樹藥局，現任職於星宇航空。
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
</style>
