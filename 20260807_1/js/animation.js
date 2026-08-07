/**
 * animation.js
 * 管理每一個 Section 的 GSAP 進場動畫。
 */
window.GumAnimation = {
  methods: {
    /**
     * 播放指定 Section 的標題、按鈕、人物與背景動畫。
     * @param {number} index - Swiper 當前頁面索引。
     */
    animateSlide(index) {
      const slides = this.$refs.mainSwiper.querySelectorAll('.swiper-slide');
      const slide = slides[index];
      if (!slide) return;

      const revealItems = slide.querySelectorAll('.reveal');
      const characters = slide.querySelectorAll('.character-reveal');
      const background = slide.querySelector('.visual-bg');

      // 先清除上一輪動畫，避免快速切換時動畫互相疊加。
      gsap.killTweensOf(revealItems);
      gsap.killTweensOf(characters);
      gsap.killTweensOf(background);

      // 標題、文案、按鈕依序淡入。
      gsap.set(revealItems, { autoAlpha: 0, y: 35, scale: 0.98 });
      gsap.to(revealItems, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power3.out'
      });

      // 人物色塊依頁面交錯由左右側淡入。
  //    gsap.fromTo(
//        characters,
//        { autoAlpha: 0, x: index % 2 === 0 ? -180 : 180, scale: 0.94 },
//        { autoAlpha: 1, x: 0, scale: 1, duration: 1.15, stagger: 0.16, ease: 'power3.out' }
//      );
  gsap.fromTo(".character-s1",
        {
            autoAlpha: 0,
            x: -120,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );

  gsap.fromTo(".character-s1_1",
        {
            autoAlpha: 0,
            y: -120,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );
		gsap.fromTo(".character-s1_2",
        {
            autoAlpha: 0,
            x: 120,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );
    gsap.fromTo(".character-s2",
        {
            autoAlpha: 0,
            x: 120,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );
		
    gsap.fromTo(".character-s3",
        {
            autoAlpha: 0,
            x: -120,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );
		  // 左邊人物
    gsap.fromTo(".character-s4-left",
        {
            autoAlpha: 0,
            x: -150,
            scale: 0.95
        },
        {
           autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );

    // 右邊人物
    gsap.fromTo(".character-s4-right",
        {
            autoAlpha: 0,
            x: 150
        },
        {
             autoAlpha: 1,
            x: 0,
            scale: 1,
            duration: 3.0,
            ease: "power3.out"
        }
    );

      // 背景輕微縮放，增加進場層次。
      if (background) {
        gsap.fromTo(
          background,
          { scale: 1.30 },
          { scale: 1.01, duration: 1.8, ease: 'power2.out' }
        );
      }

/* ==================================================
   Section4 左右小人物
================================================== */

// 只有進入 Section4（index === 3）才執行
if (index === 3) {

    // 左邊小人物：左 → 右
    gsap.fromTo(
        slide.querySelector(".section4-small-left"),
        {
            autoAlpha: 0,
            x: -120,
            y: 0,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "power3.out"
        }
    );


    // 右邊小人物：右 → 左
    gsap.fromTo(
        slide.querySelector(".section4-small-right"),
        {
            autoAlpha: 0,
            x: 120,
            y: 0,
            scale: 0.95
        },
        {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            ease: "power3.out"
        }
    );
}
    }
  }
};
/*
 * Section 4 新版人物方向補強：
 * 左側人物由左往右進場；右側人物由右往左進場。
 * 這段不改變原本 animateSlide() 的呼叫方式。
 */
