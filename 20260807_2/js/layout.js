/**
 * ============================================================
 * layout.js｜設計畫布縮放控制
 *
 * 背景：由 CSS 的 background-size: cover 負責滿版，不留黑邊。
 * 內容：維持 1920×960 或 480×740 的設計座標，等比例完整縮放。
 * ============================================================
 */
window.GumLayout = {
  /**
   * 根據目前視窗尺寸計算內容畫布的縮放比例。
   * Math.min 會保留完整內容，背景則獨立使用 cover 補滿視窗。
   */
  updateStageScale() {
    const isMobile = window.innerWidth <= GumConfig.mobileBreakpoint;
    const design = isMobile ? GumConfig.mobile : GumConfig.desktop;

    const scale = Math.min(
      window.innerWidth / design.width,
      window.innerHeight / design.height
    );

    document.documentElement.style.setProperty('--stage-scale', String(scale));
    document.documentElement.dataset.layout = isMobile ? 'mobile' : 'desktop';
  },

  /** 啟動尺寸監聽。 */
  init() {
    this.updateStageScale();
    window.addEventListener('resize', () => this.updateStageScale(), { passive: true });
    window.addEventListener('orientationchange', () => this.updateStageScale(), { passive: true });
  }
};

GumLayout.init();
