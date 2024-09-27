$(document).ready(function () {

    // menu
    $('nav li a').bind('click', function(e) {
      e.preventDefault();
      var target = $(this).attr("href");
      $('html, body').stop().animate({
        scrollTop: $(target).offset().top
      }, 600, function() {
        location.hash = target;
      });
      $('html,body').removeClass('notscroll');
      return false;
    });
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop() + 60; // 60 是控制title padding-top距離
      $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $('nav li a.is_active').removeClass('is_active');
          $('nav li a').eq(i).addClass('is_active');
        } else if ($(this).position().top <= 960) {
          $('nav li a.is_active').removeClass('is_active');
        }
      });
	  
    }).scroll();

    var owl = $(".slider .owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        /*touchDrag : false,
    mouseDrag: false,*/
    });
});
/*top*/

$(".gotop").click(function () {
    $("html,body").animate(
        {
            scrollTop: "0px",
        },
        500
    );
});

$(function () {


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
});

/*classes*/
var _showTab = 0;
$(".char").each(function () {
    var $tab = $(this);
    var $defaultLi = $(".tabs li", $tab).eq(_showTab).addClass("active");
    $($defaultLi.find("a").attr("href")).siblings().hide();
    $("ul.tabs li", $tab)
        .click(function () {
            var $this = $(this),
                _clickTab = $this.find("a").attr("href");
            $this.addClass("active").siblings(".active").removeClass("active");
            $(_clickTab).stop(false, true).addClass("on").siblings().removeClass("on");
            return false;
        })
        .find("a")
        .focus(function () {
            this.blur();
        });
});
$(document).ready(function () {
    $("#pay").hide();
    $("#notice").click(function () {
        $("#pay").fadeIn();
    });
    $("#close, .reveal-modal-bg").click(function () {
        $("#pay").fadeOut();
    });
});

//parallax
$(function () {
    "use strict";
    $("#parallax").parallax({
        invertX: true,
        invertY: true,
        scalarX: 10,
        frictionY: 0.1,
    });
});
/*---aos----*/
$(function () {
    AOS.init({
        easing: "data-aos-offset",
    });
});
