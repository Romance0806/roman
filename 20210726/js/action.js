/*----BODY----*/
$(function() {
		$("#logo").css({opacity: 0}).animate({opacity:1}, 1000,'easeOutQuart').fadeIn();
		$(".slogan").css({opacity: 0}).animate({opacity:1}, 1000,'easeOutQuart').fadeIn();
		
		$(".go").click(function(){ $('html,body').animate({scrollTop:$('.title02').offset().top}, 800); });

                $(".prize li").click(function(){
  		$(this).toggleClass("deselect");
		});
});

/*-bottle-*/
$(function() {
    $(".game_go a").click(function(){  
        $(".line").addClass("left");
    });
   
});
/*-bottle-*/
$(function() {
    $(".btn07, .btn08").click(function(){  
        $(".sword").addClass("fiery");
    });
   
});