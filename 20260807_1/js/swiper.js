/**
 * swiper.js
 * 初始化 FullPage 垂直 Swiper，並在切頁後觸發 GSAP 動畫。
 *
 * 邊界規則：
 * 1. 第一頁仍可往下一頁滑，但不能往下拉出上方空白。
 * 2. 中間頁面可正常用滑鼠或手指上下拖曳。
 * 3. 最後一頁仍可回上一頁，但不能往上拉出底部空白。
 */
window.GumSwiper = {
  methods: {
    /**
     * 依目前頁面鎖定 Swiper 邊界方向。
     * 第一頁禁止上一頁方向，最後一頁禁止下一頁方向。
     */
    updateSwiperEdgeLocks() {
      if (!this.swiper) return;

      const isFirstSlide = this.swiper.activeIndex === 0;
      const isLastSlide = this.swiper.activeIndex === this.swiper.slides.length - 1;

      this.swiper.allowSlidePrev = !isFirstSlide;
      this.swiper.allowSlideNext = !isLastSlide;
    },

    /**
     * 建立 Section 4 手機版橫向 Swiper。
     * 桌機版仍直接顯示三張圖片，不受此 Swiper 影響。
     */
    initSection4MobileSwiper() {
      const el = this.$refs.section4MobileSwiper;
      if (!el || typeof Swiper === 'undefined') return;

      this.section4MobileSwiper = new Swiper(el, {
        direction: 'horizontal',
        slidesPerView: 1,
        speed: 650,
        spaceBetween: 12,
        nested: true,
        touchAngle: 35,
        observer: true,
        observeParents: true,
        navigation: {
          prevEl: '#section4 .section4-mobile-prev',
          nextEl: '#section4 .section4-mobile-next'
        },
        pagination: {
          el: '#section4 .section4-mobile-pagination',
          clickable: true
        },
        on: {
          slideChange: () => {
            this.activeUpdate = this.section4MobileSwiper.activeIndex;
          }
        }
      });
    },

    /**
     * 建立 FullPage Swiper。
     */
    initMainSwiper() {
      this.swiper = new Swiper(this.$refs.mainSwiper, {
        direction: 'vertical',

        /*
         * 桌機可用滑鼠按住拖曳，手機可用手指滑動。
         */
        simulateTouch: true,
        grabCursor: true,

        /*
         * 滑鼠滾輪只在 Swiper 內切換頁面。
         * 到第一頁或最後一頁時，不把滾動交還給 body。
         */
        mousewheel: {
          forceToAxis: true,
          releaseOnEdges: false,
          thresholdDelta: 8
        },

        keyboard: {
          enabled: true,
          onlyInViewport: true
        },

        speed: 900,

        /*
         * 關閉邊界橡皮筋效果，避免拖曳時露出黑色空白。
         */
        resistance: false,
        resistanceRatio: 0,
        touchReleaseOnEdges: false,
        touchMoveStopPropagation: true,
        threshold: 8,
        nested: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        on: {
          init: () => {
            this.updateSwiperEdgeLocks();
            this.animateSlide(0);
          },

          slideChange: () => {
            this.menuOpen = false;
            this.updateSwiperEdgeLocks();
            this.$nextTick(() => this.animateSlide(this.swiper.activeIndex));
          },

          /*
           * 拖曳開始前再次確認邊界鎖定，桌機與手機都會生效。
           */
          touchStart: () => {
            this.updateSwiperEdgeLocks();
          }
        }
      });
    }
  }
};
