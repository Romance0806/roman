/**
 * skill.js
 * Section 3 技能切換與影片框淡入效果。
 */
window.GumSkill = {
  methods: {
    /** 切換目前選取的技能。 */
    selectSkill(index) {
      this.activeSkill = index;

      this.$nextTick(() => {
        gsap.fromTo(
          '.skill-video',
          { autoAlpha: 0.35, scale: 0.96 },
          { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
        );
      });
    }
  }
};
