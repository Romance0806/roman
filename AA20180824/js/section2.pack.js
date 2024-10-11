(function (a) {
  ArcheAge.namespace("Game.Section2");
  ArcheAge.Game.Section2 = Class.extend({
    init: function () {
      /*this.moviePlayer=a("#bgMovie4").get(0)*/
      ;
      (ArcheAge.Utils.isIE8() || ArcheAge.Utils.isIE9()) && a(".armor:eq(0)").addClass("on")
    },
    run: function () {
      var b = this;
      ArcheAge.Utils.isIE8() /*||b.moviePlayer.play()*/ ;
      b.characterResize();
      a(window).on("resize", function () {
        b.characterResize()
      });
      b.subAction()
    },
    subAction: function () {
      this.section.find(".armor:eq(0)").addClass("on"); /*this.section.find(".inner img").css("display","block");*/
      a("body").off("click", ".active .btn-wing");
      a("body").on("click",
        ".active .btn-wing",
        function () {
          var b = a(this).data("id");
          a(this).parents(".dragon").find("li").removeClass("on");
          a(this).parent().addClass("on");
          a(".armor").removeClass("on");
          a("#" + b).addClass("on")
        })
    },
    characterResize: function () {
      var b = a(window).width();
      a(window).height();
      var c = a(".armor-img1").width();
      this.section = a("[data-id=Section2]");
      a(".armor").width(c);
      1600 > b ? ( /*this.section.find(".title-group").css("left","63%"),*/ a(".armor").css("left", "20%")) : 1600 < b && (
        /*this.section.find(".title-group").css("left",
        "61%"),*/
        a(".armor").css("left", "20%"))
    },
    reset: function () {
      ArcheAge.Utils.isIE8() /*||this.moviePlayer.pause()*/ ;
      this.section.find(".dragon li, .armor").removeClass("on");
      this.section.find(".dragon li:eq(0)").addClass("on");
      (ArcheAge.Utils.isIE8() || ArcheAge.Utils.isIE9()) && a(".armor:eq(0)").addClass("on")
    }
  })
})(jQuery);