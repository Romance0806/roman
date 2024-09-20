    $(document).ready(function () {

    $('nav ul li a').on('click', function (e) {
        e.preventDefault();
        var athis = this;
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 300, 'swing', function () {
            window.location.hash = target;
            $('.nav ul li a').removeClass('active');
            $(athis).addClass('active');
        });    
    });

    $(window).scroll(function (event) {
        var scrollPos = $(document).scrollTop();
        if (scrollPos === 100)
        {
            $('a[href^="#evt1"]').addClass('active');
            return;
        } 
		  
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
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
	/*----top---*/  
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

$(document).ready(function() {
	$('#pay').hide();              
	$('#notice').click(function() {
		$('#pay').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay').fadeOut();
	});
});

/*---aos----*/
$(function() {
    AOS.init({
        easing: 'data-aos-offset',
    });
	  });
 /*----contents----*/
 $(function() {
	   /*----classes----*/
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
  });