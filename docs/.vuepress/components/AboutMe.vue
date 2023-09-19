<script setup></script>

<template>
  <div class="about-me">
    <p>
      2018年9月至2019年3月期間參加了Tibame的前端班培訓，並順利完成課程，這段培訓經驗增加了我的網頁應用的專業知識。目前，我擁有4-5年的工作經驗，曾經在多家知名企業工作，包括雲鼎科技、緯創軟體以及大樹藥局，積累了豐富的專業技能和實戰經驗。
      <br /><br />在之前的職業生涯中，我有機會學習和應用多種技術和工具。在雲鼎科技，我參與了台北市政府衛生局的專案，負責聊天交互的開發。在緯創軟體，我負責協助開發遊戲平台中高度客製的UI交互。而在大樹藥局，我負責開發和維護他們的會員系統平台和公司UI元件庫，並積極參與用戶體驗的改進。<br /><br />在雲鼎科技，我參與了一個重要的專案，負責前端開發，這讓我深入了解了如何建立具有高度可用性和優化性能的網站。在緯創軟體，我負責協助開發軟體解決方案，並與跨國團隊密切合作，提供全球客戶的支援。而在大樹藥局，我負責開發和維護他們的會員系統平台和公司UI元件庫，並積極參與用戶體驗的改進。
      <br /><br />目前，我正在星宇航空開發部任職，不僅將之前的技術知識應用到實際環境中，以應對不斷變化的需求和挑戰。
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
