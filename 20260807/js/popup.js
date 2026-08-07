/**
 * popup.js
 * 統一管理影片彈窗與序號說明彈窗。
 */
window.GumPopup = {
  methods: {
    /** 開啟影片彈窗並設定標題。 */
    openVideo(title) {
      this.videoTitle = title;
      this.videoOpen = true;
    },

    /** 關閉影片彈窗。 */
    closeVideo() {
      this.videoOpen = false;
    },

    /** 開啟序號說明彈窗。 */
    openHelp() {
      this.helpOpen = true;
    },

    /** 關閉序號說明彈窗。 */
    closeHelp() {
      this.helpOpen = false;
    }
  }
};
