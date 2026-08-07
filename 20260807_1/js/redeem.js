/**
 * redeem.js
 * 序號複製功能。包含新版 Clipboard API 與舊瀏覽器備援方式。
 */
window.GumRedeem = {
  methods: {
    async copySerial() {
      try {
        await navigator.clipboard.writeText(this.serial);
      } catch (error) {
        // 部分本機預覽或舊瀏覽器無法使用 Clipboard API，改用 textarea 複製。
        const textarea = document.createElement('textarea');
        textarea.value = this.serial;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      this.copyMessage = '已複製序號！';
      window.setTimeout(() => {
        this.copyMessage = '';
      }, 1800);
    }
  }
};
