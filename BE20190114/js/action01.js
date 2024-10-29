/*===========================BODY=================================*/
$(document).ready(function () {
	$("#bg").css({
		opacity: 0
	}).animate({
		opacity: 1
	}, 1000, 'easeOutQuart').fadeIn();
	$(".logo").css({
		opacity: 0
	}).animate({
		opacity: 1
	}, 1000, 'easeOutQuart').fadeIn();
	/*$(".slogan").css({opacity: 0,top:-500}).animate({opacity:1,top:10}, 600,'easeOutQuart').fadeIn();*/
	$("#box").delay(100).css({
		opacity: 0,
		top: -500
	}).animate({
		opacity: 1,
		top: 0
	}, 800, 'easeOutQuart').fadeIn();
	$(".popup-close").click(function () {
		$(".video_bg").hide();
	});
	var now_slide = 0;
  	var $Nav = $('.navigation');
	var url = '';
	$('#fullpage').fullpage({
		anchors: ['home', 'page01'],
		menu: '#under',
		scrollingSpeed: 1000,
		slidesNavigation: true,
    afterLoad: function(anchorLink, index){
      if(index == 1){
        $Nav.animate({top: '-80px'},300);
      } else{
        $Nav.css("display","block").animate({top: '0px'},500);
      }
    }
	});
	$('#under li').click(function () {
		url = $(this).find('a').attr('href');
	});

});





