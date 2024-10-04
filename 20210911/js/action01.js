    $(document).ready(function () {

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
   var scrollDistance = $(window).scrollTop() + 150; // 150 是控制section padding-top距離
    $('section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('nav li a.is_active').removeClass('is_active');
        $('nav li a').eq(i).addClass('is_active');
      }
    });
  }).scroll();
   

    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 100)
        {
            $('a[href^="#evt1"]').addClass('is_active');
            return;
        } 
		  
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("is_active");
                currLink.addClass("is_active");
            } else {
                currLink.removeClass("is_active");
            }
        });    
    })    
	   var owl = $('.slider .owl-carousel');
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
  $(".gotop").click(function() {
    $('html,body').animate({
      scrollTop: "0px"
    }, 800);

  });
	
$(function() {  
  /*----nav----*/
  $('.open_menu').click(function() {
    $(this).toggleClass('close');
    $('nav').toggleClass('open');
    $('html,body').toggleClass('notscroll');
  });
  $('nav a').click(function(){
    $('.open_menu').removeClass('close');
    $('nav').removeClass('open'); 
  });

});

  /*classes*/
  var _showTab = 0;
  $('.char').each(function() {
    var $tab = $(this);
    var $defaultLi = $('.tabs li', $tab).eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();
    $('ul.tabs li', $tab).click(function() {
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');
      $this.addClass('active').siblings('.active').removeClass('active');
      $(_clickTab).stop(false, true).addClass('on').siblings().removeClass('on');
      return false;
    }).find('a').focus(function() {
      this.blur();
    });
  });
$(document).ready(function() {
	$('#pay').hide();              
	$('#notice').click(function() {
		$('#pay').fadeIn();
		});
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay').fadeOut();
	});
});
<!--parallax-->
$(function() {
  "use strict";
  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
  });
});	
/*---aos----*/
$(function() {
    AOS.init({
        easing: 'data-aos-offset',
    });
	  });
