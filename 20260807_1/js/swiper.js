/**
 * swiper.js
 * FullPage 垂直 Swiper + Section4 Footer 延伸捲動。
 *
 * 目前的頁面邏輯：
 * 1. Section1～Section3 維持原本 FullPage 切頁。
 * 2. Section4 仍然是「第四頁」，Footer 不是第五個 slide。
 * 3. 滑到 Section4 時先只看到完整 Section4 主視覺。
 * 4. 在 Section4 繼續往下滾，才會在同一頁內捲出 Footer。
 * 5. Section4 捲回最上方後，再往上滾／往下拉，才回到 Section3。
 */
window.GumSwiper = {
  methods: {
    /**
     * 依目前頁面鎖定 FullPage 邊界。
     * Section4 仍然是最後一個 FullPage slide，所以不允許再 slideNext。
     */
    updateSwiperEdgeLocks() {
      if (!this.swiper) return;

      const isFirstSlide = this.swiper.activeIndex === 0;
      const isLastSlide = this.swiper.activeIndex === this.swiper.slides.length - 1;

      this.swiper.allowSlidePrev = !isFirstSlide;
      this.swiper.allowSlideNext = !isLastSlide;
    },

    /**
     * 建立 Section4 手機版橫向 Swiper。
     * 桌機版仍直接顯示三張圖片。
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
     * 進入／離開 Section4 時切換操作模式。
     *
     * Section1～3：Swiper 接管滾輪與上下拖曳。
     * Section4：改由 #section4 自己做原生垂直捲動，以便露出 Footer。
     */
    updateSection4ScrollMode() {
      if (!this.swiper) return;

      const section4 = document.getElementById('section4');
      if (!section4) return;

      const isSection4 = this.swiper.activeIndex === this.swiper.slides.length - 1;

      if (isSection4) {
        // 最後一頁交給 Section4 自己捲動，不讓 FullPage 把滾輪吃掉。
        if (this.swiper.mousewheel && this.swiper.mousewheel.disable) {
          this.swiper.mousewheel.disable();
        }

        // 手機在 Section4 改用原生 touch scroll；橫向活動 Swiper 仍可正常操作。
        this.swiper.allowTouchMove = false;

        // 每次重新進入 Section4，先回到主視覺頂端，Footer 不會一開始就露出。
        section4.scrollTop = 0;
        section4.dataset.smoothScrollTarget = '0';
        section4.dataset.lastWheelDelta = '0';
      } else {
        if (this.swiper.mousewheel && this.swiper.mousewheel.enable) {
          this.swiper.mousewheel.enable();
        }
        this.swiper.allowTouchMove = true;
      }
    },

    /**
     * 從 Section4 頂端返回 Section3。
     * 先暫時恢復 FullPage 控制，再由 Swiper 執行 slidePrev。
     */
    leaveSection4ToPrevious() {
      if (!this.swiper || this.swiper.activeIndex !== this.swiper.slides.length - 1) return;
      if (this._leavingSection4) return;

      const section4 = document.getElementById('section4');
      this._leavingSection4 = true;

      // 先停止 Section4 尚未完成的平滑捲動，避免它把畫面重新拉回 Footer。
      if (section4) {
        if (section4._footerScrollRaf) {
          cancelAnimationFrame(section4._footerScrollRaf);
          section4._footerScrollRaf = null;
        }
        section4.scrollTop = 0;
        section4.dataset.smoothScrollTarget = '0';
        section4.dataset.lastWheelDelta = '0';
      }

      // 恢復 FullPage 的上一頁控制，再明確切回 Section3。
      this.swiper.allowSlidePrev = true;
      this.swiper.allowTouchMove = true;
      if (this.swiper.mousewheel && this.swiper.mousewheel.enable) {
        this.swiper.mousewheel.enable();
      }

      this.swiper.slideTo(this.swiper.activeIndex - 1, 900);

      // 等切頁動畫結束後才解除鎖定，避免同一串 wheel 事件重複觸發。
      window.setTimeout(() => {
        this._leavingSection4 = false;
      }, 950);
    },

    /**
     * 綁定 Section4 的桌機滾輪與手機手勢。
     * 只綁一次，不會影響 Section1～Section3。
     */
    bindSection4FooterScroll() {
      const section4 = document.getElementById('section4');
      if (!section4 || section4.dataset.footerScrollBound === 'true') return;

      section4.dataset.footerScrollBound = 'true';

      // ------------------------------
      // 桌機：滾輪控制 Section4 內部捲動
      // ------------------------------
      section4.addEventListener('wheel', (event) => {
        if (!this.swiper) return;
        if (this.swiper.activeIndex !== this.swiper.slides.length - 1) return;

        const savedTargetForEdge = Number(section4.dataset.smoothScrollTarget || section4.scrollTop);
        const atTop = section4.scrollTop <= 1;
        const targetAtTop = savedTargetForEdge <= 1;

        // 已經回到 Section4 頂端（或平滑捲動的目標已經是頂端），
        // 再往上滾就交還 FullPage，切回 Section3。
        // 判斷 targetAtTop 可避免 scrollTop 還在 0.x～數 px 緩動時被卡住。
        if (event.deltaY < 0 && (atTop || targetAtTop)) {
          event.preventDefault();
          this.leaveSection4ToPrevious();
          return;
        }

        // 其他方向都只捲 Section4 自己：主視覺 -> Footer。
        // 不直接修改 scrollTop，改成帶緩動的目標位置，Footer 會順著畫面滑上來。
        event.preventDefault();

        const maxScroll = Math.max(0, section4.scrollHeight - section4.clientHeight);

        /*
         * 重要：每次滾輪都以「目前實際 scrollTop」校正目標。
         * 舊版在 Footer 到底後，smoothScrollTarget 可能仍停在最大值，
         * 因此往上滾時會有像被卡住、滑不回去的感覺。
         */
        const savedTarget = Number(section4.dataset.smoothScrollTarget);
        const hasSavedTarget = Number.isFinite(savedTarget);
        let currentTarget = hasSavedTarget ? savedTarget : section4.scrollTop;

        // 使用者改變滾動方向時，立刻以目前畫面位置重新接手，避免舊目標拉住畫面。
        const lastDelta = Number(section4.dataset.lastWheelDelta || 0);
        if ((event.deltaY < 0 && lastDelta > 0) || (event.deltaY > 0 && lastDelta < 0)) {
          currentTarget = section4.scrollTop;
        }
        section4.dataset.lastWheelDelta = String(event.deltaY);

        const nextTarget = Math.max(0, Math.min(maxScroll, currentTarget + event.deltaY * 1.15));
        section4.dataset.smoothScrollTarget = String(nextTarget);

        if (section4._footerScrollRaf) return;

        const smoothStep = () => {
          const target = Number(section4.dataset.smoothScrollTarget || 0);
          const distance = target - section4.scrollTop;

          // 0.14 越小越柔和、越大越快。
          section4.scrollTop += distance * 0.14;

          if (Math.abs(distance) > 0.6) {
            section4._footerScrollRaf = requestAnimationFrame(smoothStep);
          } else {
            section4.scrollTop = target;
            section4._footerScrollRaf = null;
          }
        };

        section4._footerScrollRaf = requestAnimationFrame(smoothStep);
      }, { passive: false });

      // ------------------------------
      // 手機：Section4 內使用原生 touch scroll
      // 在最頂端往下拉，才返回 Section3。
      // ------------------------------
      let touchStartX = 0;
      let touchStartY = 0;
      let touchStartedAtTop = false;

      section4.addEventListener('touchstart', (event) => {
        if (!this.swiper || this.swiper.activeIndex !== this.swiper.slides.length - 1) return;
        if (!event.touches || !event.touches.length) return;

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchStartedAtTop = section4.scrollTop <= 1;
      }, { passive: true });

      section4.addEventListener('touchend', (event) => {
        if (!this.swiper || this.swiper.activeIndex !== this.swiper.slides.length - 1) return;
        if (!touchStartedAtTop || !event.changedTouches || !event.changedTouches.length) return;

        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        const diffX = endX - touchStartX;
        const diffY = endY - touchStartY;

        // 明顯的垂直「往下拉」才返回上一頁。
        // 橫向滑 Section4 活動卡片時不會誤觸。
        if (diffY > 55 && Math.abs(diffY) > Math.abs(diffX)) {
          this.leaveSection4ToPrevious();
        }
      }, { passive: true });
    },

    /**
     * 建立 FullPage Swiper。
     */
    initMainSwiper() {
      this.swiper = new Swiper(this.$refs.mainSwiper, {
        direction: 'vertical',

        // Section1～3 維持桌機滑鼠拖曳與手機手指切頁。
        simulateTouch: true,
        grabCursor: true,

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

        // 關閉 FullPage 邊界橡皮筋，避免露出黑色空白。
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
            this.bindSection4FooterScroll();
            this.updateSection4ScrollMode();
            this.animateSlide(0);
          },

          slideChange: () => {
            this.menuOpen = false;
            this.updateSwiperEdgeLocks();
            this.updateSection4ScrollMode();
            this.$nextTick(() => this.animateSlide(this.swiper.activeIndex));
          },

          touchStart: () => {
            this.updateSwiperEdgeLocks();
          }
        }
      });
    }
  }
};
