/*----fullpage----*/
$(function() {
	/*----nav----*/
	//hover滑入滑出
	/*$('#menu').hover(
		function(){
			$(this).stop();
			$(this).animate({left: '2%'},500);
			$('.triangle img').css('transform','scaleX(1)');
			//$("#menu").animate({left: '-150px'},500);
		},
		function(){
			$(this).stop();
			$(this).animate({left: '-176px'},500);
			$('.triangle img').css('transform','scaleX(-1)');
		},
	);*/
	//點擊觸發
	$('.triangle').click(function(){
			$('.triangle').toggleClass('open');
			$('#menu').toggleClass('unfold');
	});

	var now_slide = 0;
	var url = '';
	$('#fullpage').fullpage({
		anchors: ['home', 'page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'page07', 'page08'],
		menu: '#menu',
		scrollingSpeed: 1000,
		slidesNavigation: true,
		afterLoad: function (anchorLink, index) {
			if ($('.fp-section.active').index() == 0) {
				now_slide = 0;
			}
			if ($('.fp-section.active').index() == 1) {
				now_slide = $('.fp-slide.active').index();
			}
			if ($('.fp-section.active').index() > 1) {
				now_slide = 2;
			}
			if (index == 1) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #3da4fb)")
			}
			if (index == 2) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #121f10)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			if (index == 3) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #3da4fb)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
				/*$('.mCSB_container').css({
						'top':'0px'
				});
				$('.mCSB_dragger').css({
						'top':'0px'
				});*/
			}
			if (index == 4) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #6e6044)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			if (index == 5) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #da6c00)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			if (index == 6) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #000000)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			if (index == 7) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #121f10)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
				$("#movie")[0].src += "&autoplay=1";
			}
			if (index == 8) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #000000)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			if (index == 9) {
				$('.logo').css("filter","drop-shadow(0px 0px 3px #6b5f50)");
				$(".mCSB_container").animate({top:"0px"});
				$(".mCSB_dragger").animate({top:"0px"});
			}
			url = '';
			//console.log(now_slide+' '+$('.fp-section.active').index()+' '+$('.fp-slide.active').index()+' '+url);
		},
		onLeave: function (index, nextIndex, direction) {
			var leavingSection = $(this);
			if ($('.fp-section.active').index() == 0) {
				now_slide = 0;
			}
			if ($('.fp-section.active').index() == 1) {
				now_slide = $('.fp-slide.active').index();
			}
			if ($('.fp-section.active').index() > 1) {
				now_slide = 2;
			}
		},
	});
	$('#menu li').click(function () {
		url = $(this).find('a').attr('href');
	});
});

/*----popup----*/
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
				'<iframe src="' +
				e.currentTarget.href +
				'?vq=hd720&autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media; fullscreen;" allowfullscreen />'
			);

			plugin.open();
		});

	});


});