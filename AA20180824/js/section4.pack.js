(function (a) {
  ArcheAge.namespace("Game.Section4");
  ArcheAge.Game.Section4 = Class.extend({
    init: function () {
      this.moviePlayer = a("#bgMovie4").get(0);
      (ArcheAge.Utils.isIE8() || ArcheAge.Utils.isIE9()) && a(".armor:eq(0)").addClass("on")
    },
    run: function () {
      var b = this;
      ArcheAge.Utils.isIE8() || b.moviePlayer.play();
      b.characterResize();
      a(window).on("resize", function () {
        b.characterResize()
      });
      b.subAction()
    },
    subAction: function () {
      this.section.find(".armor:eq(0)").addClass("on");
      a("body").off("click", ".active .btn-wing");
      a("body").on("click",
        ".active .btn-wing",
        function () {
          var b = a(this).data("id");
          a(this).parents(".tab-menu").find("li").removeClass("on");
          a(this).parent().addClass("on");
          a(".armor").removeClass("on");
          a("#" + b).addClass("on")
        })
    },
    characterResize: function () {
      var b = a(window).width();
      a(window).height();
      var c = a(".armor-img1").width();
      this.section = a("[data-id=section4]");
      a(".armor").width(c);
      1600 > b ? (this.section.find(".title-group").css("left", "63%"), a(".armor").css("left", "15%")) : 1600 < b && (this.section.find(".title-group").css("left",
        "61%"), a(".armor").css("left", "20%"))
    },
    reset: function () {
      ArcheAge.Utils.isIE8() || this.moviePlayer.pause();
      this.section.find(".tab-menu li, .armor").removeClass("on");
      this.section.find(".tab-menu li:eq(0)").addClass("on");
      (ArcheAge.Utils.isIE8() || ArcheAge.Utils.isIE9()) && a(".armor:eq(0)").addClass("on")
    }
  })
})(jQuery);
