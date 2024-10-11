ArcheAge.namespace("Game.Update");
ArcheAge.Game.Update = Class.extend({
  init: function () {
    this.PD_COOKIE_NAME = "prevent_update_3.5_realopen";
    this.PD_COOKIE_EXPIRES = 1;
    this.$navi = $(".navigation");
    this.$wrap = $(".update-contents");
    this.$section = this.$wrap.find(".section");
    this.$resizeObj = $(".bg-flexible");
    this._setup();
    this._navigation();
    this._bindHashChange();
    this._bindFacebookBtn();
    this.sectionActions = [];
    this.sectionActions.push(new ArcheAge.Game.Section1);
    this.sectionActions.push(new ArcheAge.Game.Section2);
    this.sectionActions.push(new ArcheAge.Game.Section3);
    this.sectionActions.push(new ArcheAge.Game.Section4);
    this.sectionActions.push(new ArcheAge.Game.Section5);
    this.sectionActions.push(new ArcheAge.Game.Section6);
    this.sectionActions.push(new ArcheAge.Game.Section7);
    this.startSection();
    this.moveAction();
    this.eventBanner()
  },
  _setup: function () {
    var a = this;
    $("a.link-close").click(function (b) {
      b.preventDefault();
      $.cookie(a.PD_COOKIE_NAME, "true", {
        path: "/",
        expires: a.PD_COOKIE_EXPIRES
      });
      ArcheAge.sendEventGA({
        category: "update201701",
        action: "nomore",
        linkUrl: "/"
      })
    })
  },
  _navigation: function () {
    var a = this;
    a.$navi.find("ul a").on({
      click: function (b) {
        b.preventDefault();
        var c = $(this).data("name"),
          b = a.$wrap.find(".active").index(),
          b = a.sectionActions[b],
          d = $("[data-id=" + c + "]").index() * $(window).height();
        a.$navi.find("li").removeClass("active");
        a.$wrap.find(".section").removeClass("active");
        $(this).parent().addClass("active");
        $("[data-id=" + c + "]").addClass("active");
        b.reset();
        a.$wrap.stop().animate({
          marginTop: -d + "px"
        }, function () {
          a._changeRun($("[data-id=" + c + "]").index())
        })
      }
    })
  },
  moveAction: function () {
    this._bindResize();
    this._bindScroll();
    this.sectionActions[2].characterResize()
  },
  _bindResize: function () {
    var a = this;
    a.$section.height($(window).height());
    $(window).on("resize", function () {
      if (!a.$wrap.find(".section:first").hasClass("active")) {
        var b = a.$wrap.find(".active").index() * $(window).height();
        a.$wrap.stop().animate({
          marginTop: -b + "px"
        }, 100)
      }
      a.$section.height($(window).height());
      ArcheAge.Utils.isIE8() && a.resizeFlexibleBg()
    });
    ArcheAge.Utils.isIE8() && a.resizeFlexibleBg()
  },
  _bindScroll: function () {
    var a =
      this;
    $("body").on("mousewheel DOMMouseScroll", function (b) {
      var c = a.$wrap.find(".active"),
        d = c.index(),
        e = a.$navi.find(".active"),
        f = a.sectionActions[d],
        b = b.originalEvent.wheelDelta || -1 * b.originalEvent.detail,
        g = $(window).height();
      if (!$(".update-contents").is(":animated")) {
        if (0 < $(".layer-wrap:visible").length) return !1;
        0 < b ? 0 < d && (f.reset(), a.$wrap.stop().animate({
            marginTop: "+=" + g
          }, 600, function () {
            a._changeRun(a.$wrap.find(".active").index())
          }), c.prev().addClass("active").siblings(".active").removeClass("active"),
          e.prev().addClass("active").siblings(".active").removeClass("active")) : d < a.$wrap.find(".section").length - 1 && (f.reset(), a.$wrap.stop().animate({
          marginTop: "-=" + g
        }, 600, function () {
          a._changeRun(a.$wrap.find(".active").index())
        }), c.next().addClass("active").siblings(".active").removeClass("active"), e.next().addClass("active").siblings(".active").removeClass("active"))
      }
    });
    ArcheAge.Utils.isIE9() && $(".inner").css("-ms-transform", "scale(1)")
  },
  _changeRun: function (a) {
    this.sectionActions[a].run()
  },
  _bindHashChange: function () {
    $(window).on("hashchange",
      function () {
        return !1
      })
  },
  startSection: function () {
    var a = $("[data-id=section1]");
    location.hash && (a = location.hash.split("#")[1], a = $("[data-id=" + a + "]"));
    var b = a.index(".section");
    0 < a.length && this.$navi.find("li").eq(b).find("a").click()
  },
  _bindFacebookBtn: function () {
    var a = this;
    $("body").off("click", ".link-facebook");
    $("body").on("click", ".link-facebook", function (b) {
      b.preventDefault();
      a.sendGoogleAnalytics("facebook");
      b = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURI(ArcheAge.domains.www + "/game/update/2017/01")
        + "&t=" + encodeURI($("title").text());
      window.open(b, "share_on_facebook", "width=640,height=300,scrollbars=0,resizable=1");
      return !1
    })
  },
  sendGoogleAnalytics: function () {
    encodeURI(this.url);
    ga("send", {
      hitType: "event",
      eventCategory: "gameUpdate",
      eventAction: "facebookLink",
      eventLabel: "201701"
    })
  },
  resizeFlexibleBg: function () {
    var a = $(window).width(),
      b = $(window).height(),
      c;
    1920 < a ? (c = a, b = 1080 * (a / 1920)) : (c = 1920 * (b / 1080), c < a && (c = a, b = 1080 * (c / 1920)));
    this.$resizeObj.css({
      "margin-left": -(c / 2),
      "margin-top": -(b / 2),
      width: c,
      height: b,
      top: "50%"
    })
  },
  eventBanner: function () {
    $(".eventBanner").each(function () {
      var a = $(this),
        b = a.find(".showElement"),
        c = b.find(".bannerImg"),
        d = a.find(".pagination a"),
        e = function (a) {
          a.addClass("on").show().siblings().hide().removeClass("on");
          a = a.parent().find(".on").index();
          d.eq(a).addClass("on").siblings().removeClass("on")
        },
        f, g = function () {
          f = setInterval(function () {
            var d = c.length;
            a.find(".bannerImg.on").index();
            a.find(".bannerImg.on").index() < d - 1 ? e(b.find(".on").next("a")) : e(b.find("a:first"))
          }, 5E3)
        };
      c.eq(0).addClass("on");
      d.eq(0).addClass("on");
      g();
      d.on("click", function () {
        clearInterval(f);
        $(this).addClass("on").siblings(".on").removeClass("on");
        e(b.find(".bannerImg:eq(" + $(this).index() + ")"))
      });
      a.on({
        mouseleave: function () {
          g()
        },
        mouseenter: function () {
          clearInterval(f)
        }
      })
    })
  }
});

//Fancybox
$(document).ready(function () {
  $("a.fancybox").fancybox()
});

//Video
$(document).ready(function () {
  (function ($) {
    $(function () {
      $('[data-dialog]').on('click', function (e) {
        var $this = $(e.target);
        $($this.data('dialog')).attr('class', 'popup ' + $this.data('effect'));
      });
    });
  })(jQuery);
  $(document).ready(function () {
    $('.popup').popup({
      close: function () {
        $(this).find('.embed-container').empty();
      }
    });

    $(document).on('click', '[data-action="watch-video"]', function (e) {

      e.preventDefault();

      var plugin = $('#popup-video.popup').data('popup');

      $('#popup-video.popup .embed-container').html(
        '<iframe src="'
        + e.currentTarget.href
        + '?vq=hd720&autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media; fullscreen;" allowfullscreen />'
      );

      plugin.open();
    });

  });

});
$(".video_close").click(function () {
  $(".video_bg").hide();
  $("iframe").hide();
});
