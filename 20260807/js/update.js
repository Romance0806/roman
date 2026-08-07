/**
 * update.js
 * Section 4 改版內容輪播控制。
 */
window.GumUpdate = {
  methods: {
    /** 切換到上一個改版內容。 */
    prevUpdate() {
      this.activeUpdate = (this.activeUpdate - 1 + this.updates.length) % this.updates.length;
    },

    /** 切換到下一個改版內容。 */
    nextUpdate() {
      this.activeUpdate = (this.activeUpdate + 1) % this.updates.length;
    },

    /** 點擊下方按鈕時切換指定內容。 */
    selectUpdate(index) {
      this.activeUpdate = index;
    }
  }
};
