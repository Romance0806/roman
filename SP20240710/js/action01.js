/*===========================BODY=================================*/
$(function () {
  $("#bg").css({
    opacity: 0
  }).animate({
    opacity: 1
  }, 1000, 'easeOutQuart').fadeIn();
  $("#logo").css({
    opacity: 0
  }).animate({
    opacity: 1
  }, 1000, 'easeOutQuart').fadeIn();
  $(".slogan").css({
    opacity: 0
  }).animate({
    opacity: 1
  }, 1000, 'easeOutQuart').fadeIn();
});


/*=========================== HTML INCLUDE =================================*/

$(document).ready(function () {

  $("#footer").load("include/footer.html");

});

/*----pitcher----*/
$(function () {
  $(".pitcher g_show").show();
  $(".pitcher_open").hide();
$(".pitcher_open02").hide();
  $(".blow").hide();
  $(".gold").hide();
 $(".gold01").hide();
	$(".gold02").hide();
  $(".btn01").click(function () {
    setTimeout(function () {
      setTimeout('$(".blow").show()', 1500);
      $(".pitcher").show();
      setTimeout('$(".pitcher").hide()', 1500);
      $(".pitcher_open").show();
      setTimeout('$(".pitcher_open").hide()', 1500);
      $(".gold").show();
      setTimeout('$(".gold").hide()', 1500);
    }, 500);
  })
});
$(function () {
	$(".pitcher_open02").hide();
  $(".btn02").click(function () {
    setTimeout(function () {		
      setTimeout('$(".blow").show()', 1500);
      $(".pitcher").show();
      setTimeout('$(".pitcher").hide()', 1500);
      $(".pitcher_open02").show();
      setTimeout('$(".pitcher_open02").hide()', 1500);
      $(".gold").show();
      setTimeout('$(".gold").hide()', 1500);
    }, 500);
  })
});
$(function () {

  $(".btn04").click(function () {
    setTimeout(function () {		
      setTimeout('$(".blow").show()', 1500);
      $(".pitcher").show();
     setTimeout('$(".pitcher").hide()', 1500);

      $(".gold01").show();
      setTimeout('$(".gold01").hide()', 1500);
    }, 500);
  })
});
$(function () {

  $(".btn03").click(function () {
    setTimeout(function () {		
      setTimeout('$(".blow").show()', 1500);
      $(".pitcher").show();
     setTimeout('$(".pitcher").hide()', 1500);

      $(".gold02").show();
      setTimeout('$(".gold02").hide()', 1500);
    }, 500);
  })
});
$(function () {
  // 預設顯示第一個 Tab
  var _showTab = 0;
  $('.getprops, .ranking').each(function () {
    // 目前的頁籤區塊
    var $tab = $(this);

    var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();

    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $('ul.tabs li', $tab).click(function () {
      // 找出 li 中的超連結 href(#id)
      var $this = $(this),
        _clickTab = $this.find('a').attr('href');
      // 把目前點擊到的 li 頁籤加上 .active
      // 並把兄弟元素中有 .active 的都移除 class
      $this.addClass('active').siblings('.active').removeClass('active');
      // 淡入相對應的內容並隱藏兄弟元素
      $(_clickTab).stop(false, true).fadeIn().siblings().hide();

      return false;
    }).find('a').focus(function () {
      this.blur();
    });
  });
});

/** slider **/

$(".game_inner").load("http://192.168.100.44/RM/web/include/gameinner.html", function () {
  var owl = $('.slider .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    touchDrag: false,
    mouseDrag: false,
  });
});

/*banner*/

$(document).ready(function () {
  var owl = $('.slider .owl-carousel');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

});

  /*-----------------進度條-----------------*/

  $(".animated-progress span").each(function () {
    $(this).animate({
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });