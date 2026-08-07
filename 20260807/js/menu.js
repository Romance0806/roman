/**
 * menu.js
 * 左側選單的開啟、關閉與頁面跳轉功能。
 */
window.GumMenu = {
  methods: {
    /** 切換左側選單開關狀態。 */
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    /**
     * 跳到指定 FullPage 頁面。
     * @param {number} index - Section 索引，首頁為 0。
     */
    goTo(index) {
      if (this.swiper) this.swiper.slideTo(index);
      this.menuOpen = false;
    },

    /** 關閉左側選單。 */
    closeMenu() {
      this.menuOpen = false;
    },

    /** 靜態版表單送出示範。正式上線時可改接 API。 */
    submitForm() {
      alert('表單已送出（靜態示範）');
      this.form = { name: '', email: '', message: '' };
    }
  }
};
