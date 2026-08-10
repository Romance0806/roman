/**
 * video.js
 * 預留影片控制功能。
 * 未來放入真正的 <video> 後，可在此統一處理播放、暫停與切換。
 */
window.GumVideo = {
  methods: {
    /** 暫停頁面中所有 video，避免彈窗關閉後仍播放聲音。 */
    pauseAllVideos() {
      document.querySelectorAll('video').forEach((video) => video.pause());
    }
  },

  watch: {
    videoOpen(isOpen) {
      if (!isOpen) this.pauseAllVideos();
    }
  }
};
