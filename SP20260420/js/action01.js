$(function () {
  $('.menu li').click(function () {
    var $this = $(this),
      _href = $this.find('a').attr('href');
    $('html, body').animate({
      scrollTop: $(".main").offset().top
    }, 600);
    setTimeout('$(".char01, .char02").show()', 0);
    if (_href.indexOf('http://') >= 0) {
      open(_href);
      //location.href = _href; 
      return false;
    }
    $(_href).stop(false, true).fadeIn().siblings().hide();
    $this.addClass('active').siblings('.active').removeClass('active');
    $(".pageTitle01").html(_href);
    return false;
  });
  $("#BOX1, #BOX2, #BOX3, #BOX4, #BOX5, #BOX6, #BOX7, .char01, .char02").hide();
});
/*----Text tab----*/


$(function () {
  $(".gotop").click(function () {
    $('html,body').animate({
      scrollTop: "0px"
    }, 600);

  });

});
$(document).ready(function () {

  /*loading_page*/
  setTimeout(function () {
    $(".ready_zone").addClass("completed");
  }, 2500);

});
