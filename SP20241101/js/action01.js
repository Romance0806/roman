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

/*flash*/

$(function () {
  $(".gift_open").hide();
  $(".Spot").hide();
  $(".button a").click(function () {
    $(".gift").addClass("bounceIn");
    setTimeout(function () {
      setTimeout('$(".gift_open").show()', 1000);	
      setTimeout('$(".gift_open").hide()', 3500);
      $(".Spot").show();
      setTimeout('$(".Spot").hide()', 600);
      setTimeout('$(".gift").hide()', 1000);
    }, 500);
	  setTimeout('$(".gift").show()', 3500);
  })
});

