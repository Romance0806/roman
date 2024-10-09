// -------------偵測視窗-------------
if (jQuery(window).width() < 768) {
} else {
}

$(document).ready(function () {
    $("#pay").hide();
    $("#notice").click(function () {
        $("#pay").fadeIn();
    });
    $("#close, .reveal-modal-bg").click(function () {
        $("#pay").fadeOut();
    });
});
// -------------主選單-------------
var swiperindex = new Swiper(".swiperindex", {
	// 控制垂直
	  direction: "vertical",

  // 滑鼠滾動
  mousewheel: true,
  // allowTouchMove觸控
  allowTouchMove: true,
  speed: 1000,
updateOnWindowResize: true,
    hashNavigation: {
      watchState: true,
    },
  // 控制當頁面跳到第5頁，swipervideo跳至第1頁，控制在各頁呈現動畫
  on: {
    slideChange: function () {
      if (this.activeIndex === 1) {
        //   $(".gift").fadeIn(1000);
        // } else {
        //   $(".gift").fadeOut(0);
      }
      if (this.activeIndex === 5) {
        swipervideo.slideToLoop(0, 600, false);
      }
    },
  },

  // 7行版
  /*   on: {
    slideChange: function () {
      if (this.activeIndex === 2) {
        $(".gift").fadeIn(1000);
      } else {
        $(".gift").fadeOut(0);
      }
      if (this.activeIndex === 5) {
        swipervideo.slideToLoop(0, 600, false);
      }
    },
  }, */
  // 1200px以上關閉觸控
  breakpoints: {
    1200: {
      allowTouchMove: false,
	// 控制左右
		direction: "horizontal",
		  parallax : true,
    },
  },

  // 如果需要分页器
  pagination: {
    el: ".menu", //外層menu控制
    clickable: true, //每個li都可以點
    bulletElement: "li", //自訂menu li控制器
    type: "custom", //屬性自訂分頁器
    renderCustom: function (swiper, current, total) {
      $(".menu")
        .children() //找到所有()元素
        .eq(current - 1) //數量-1,因0也算因此減1,原是0-8,後來變成1-7
        .addClass("bullet_active")
        .siblings() //收掉指定屬性
        .removeClass("bullet_active"); //運算0-8減1,對應到基本1-7的頁面

      $(".menu").on("click", "li", function () {
        swiperindex.slideToLoop($(this).index(), 1000, false);
      });
      //console.log(swiper, current, total);
    },
  },
});
    /*----nav----*/
    $(".open_menu").click(function () {
        $(this).toggleClass("close");
        $("nav").toggleClass("open");
        $("html,body").toggleClass("notscroll");
    });
    $("nav a").click(function () {
        $(".open_menu").removeClass("close");
        $("nav").removeClass("open");
    });

// 音樂控制
var musicBg = document.getElementById("bg_music");
var isPlayMusic = false;
$(".btn_music").on("click", function () {
  if ($(this).hasClass("on")) {
    musicBg.pause();
    $(".btn_music").removeClass("on");
    isPlayMusic = false;
  } else {
    musicBg.play();
    $(".btn_music").addClass("on");
    isPlayMusic = true;
  }
});
$("body").one("click", function (e) {
  if ($(e.target).is("#btn_video")) return;
  musicBg.play();
  $(".btn_music").addClass("on");
  isPlayMusic = true;
});
$(".btn_video").click(function () {
  musicBg.pause();
  $(".btn_music").removeClass("on");
  isPlayMusic = false;
});
$(".btn_ytvideo1").click(function () {
  musicBg.pause();
  $(".btn_music").removeClass("on");
  isPlayMusic = false;
});
// -------------地圖場景-------------
var swipervideo = new Swiper(".swipervideo", {
  effect: "fade",
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".menu2", //外層menu控制
    clickable: true, //每個li都可以點
    bulletElement: "li", //自訂menu li控制器
    type: "custom", //自訂分頁器
    renderCustom: function (swiper, current, total) {
      $(".menu2")
        .children() //找到所有()元素
        .eq(current - 1) //數量-1,因0也算因此減1,原是0-8,後來變成1-7
        .addClass("bullet_active2")
        .siblings() //收掉指定屬性
        .removeClass("bullet_active2");
      $(".menu2").on("click", "li", function () {
        swipervideo.slideToLoop($(this).index(), 1000, false);
      });
    },
  },
});

// -------------遊戲特色-------------
var gameinfo = new Swiper(".gameinfo", {
  effect: "coverflow",
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 10,
    // slide做3d旋轉時Y軸的旋轉角度
    stretch: 10,
    // 每個slide之間的拉伸值，越大slide靠得越緊。 5.3.6 後可使用%百分比
    depth: 100,
    // slide的位置深度。值越大z軸距離越遠，看起來越小。
    modifier: 2,
    // depth和rotate和stretch的倍率，相當於depth*modifier、rotate*modifier、stretch*modifier，值越大這三個參數的效果越明顯。
    slideShadows: true,
    // 是否開啟slide陰影
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 我的Swiper，總共有三個
但全域變數，都不可以取同一個名稱
不能都使用　var 「mySwiper」  */

