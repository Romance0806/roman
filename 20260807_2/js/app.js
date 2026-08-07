/**
 * app.js
 * Vue 應用程式入口。
 * 這個檔案只負責：
 * 1. 建立共用資料狀態。
 * 2. 合併各功能模組。
 * 3. 啟動 Vue 與 Swiper。
 */
const { createApp } = Vue;

// 將每個功能檔案提供的 methods 合併成 Vue methods。
const methods = Object.assign(
  {},
  GumMenu.methods,
  GumPopup.methods,
  GumRedeem.methods,
  GumVideo.methods,
  GumSkill.methods,
  GumUpdate.methods,
  GumAnimation.methods,
  GumSwiper.methods
);

createApp({
  data() {
    return {
      // 外掛實例
      swiper: null,
      section4MobileSwiper: null,

      // 介面開關狀態
      menuOpen: false,
      videoOpen: false,
      helpOpen: false,

      // 彈窗與活動資料
      videoTitle: '',
      serial: 'JUNSHI947',
      copyMessage: '',

      // Section 3、4 目前選取索引
      activeSkill: 0,
      activeUpdate: 0,

      // 左側聯絡表單
      form: {
        name: '',
        email: '',
        message: ''
      },

      // 從 data.js 讀取可編輯清單資料
      navItems: GumData.navItems,
      rewards: GumData.rewards,
      skills: GumData.skills,
      updates: GumData.updates
    };
  },

  methods,

  // video.js 提供的監聽器：影片彈窗關閉時暫停所有影片。
  watch: GumVideo.watch,

  mounted() {
    this.initMainSwiper();
    this.$nextTick(() => this.initSection4MobileSwiper());
  }
}).mount('#app');
