
	
	
	
	$(document).ready(function() {
	$('#pay01').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('#task07 a, #task08 a, #task09 a, #task10 a, #task11 a, #task24 a, #task25 a, #task26 a, #task27 a, #task28 a, #task41 a, #task42 a, #task43 a, #task44 a, #task45 a, #task58 a, #task59 a, #task60 a, #task61 a, #task62 a').click(function() {
		$('#pay01').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay01').fadeOut();
	});
	});
	
	$(document).ready(function() {
	$('#pay02').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('#task13 a, #task14 a, #task15 a, #task16 a, #task17 a, #task30 a, #task31 a, #task32 a, #task33 a, #task34 a, #task47 a, #task48 a, #task49 a, #task50 a, #task51 a, #task64 a, #task65 a, #task66 a, #task67 a, #task68 a').click(function() {
		$('#pay02').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay02').fadeOut();
	});
	});
	
	
	$(document).ready(function() {
	$('#pay03').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('#task69 a, #task70 a, #task71 a, #task72 a').click(function() {
		$('#pay03').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay03').fadeOut();
	});
	});
	
	$(document).ready(function() {
	$('#pay04').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('#task06 a, #task23 a, #task40 a, #task57 a').click(function() {
		$('#pay04').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay04').fadeOut();
	});
	});
	
	$(document).ready(function() {
	$('#pay05').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('#task12 a, #task29 a, #task46 a, #task63 a').click(function() {
		$('#pay05').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay05').fadeOut();
	});
	});
	
	$(document).ready(function() {
	$('#pay06').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('.level a').click(function() {
		$('#pay06').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay06').fadeOut();
	});
	});
	
	$(document).ready(function() {
	$('#pay07').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('.list a').click(function() {
		$('#pay07').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay07').fadeOut();
	});
	});
	
		$(document).ready(function() {
	$('#pay08').hide();
	
              var owl = $('.calendar .owl-carousel');
              owl.owlCarousel({
                items: 1,
                loop: false,
                margin: 0,
				dots: false,
				nav: true,
				navText: ["<img src='images/btn_prev.png'>","<img src='images/btn_next.png'>"]
              });
	$('.start a').click(function() {
		$('#pay08').fadeIn();
		});
	
	$("#close, .reveal-modal-bg, .pay_btn li a").click(function() {
		$('#pay08').fadeOut();
	});
	});
	<!--timer-->
	$(function(){
	$(".start_ok a").hide();
    $(".btn_ok a").one('click', function(){
	$('.timer').startTimer({
    onComplete: function(element){
      $(".start a").hide();
	  $(".start_ok a").show();
    }
  }).click(function(){ location.reload() });
  }); 
})
