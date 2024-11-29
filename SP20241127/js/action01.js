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

/*----BODY----*/
$(function() {
	    "use strict";//使用strict mode(嚴格模式)
		$("#logo").css({opacity: 0}).animate({opacity:1}, 1000,'easeOutQuart').fadeIn();
		$(".slogan").css({opacity: 0}).animate({opacity:1}, 1000,'easeOutQuart').fadeIn();
		$(".go").click(function(){ $('html,body').animate({scrollTop:$('#game').offset().top}, 800); });
	
});
/*----BODY----*/

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
/*----ball----*/
	
$(document).ready(function(e) {
		
var score=1000;
$(".wdjifen").html(score);


$(".game_go").click(function(){
	score-=10;
		if(score<0){
			for(i=1;i<=11;i++){
				$(".qiu_"+i).removeClass("wieyi_"+i);
			}
			$("#no_jifeng").show();
			}else{
				draw()
				}
		});
	
function draw(){
	var number =Math.floor(4*Math.random()+1);  

	for(i=1;i<=11;i++){
			$(".qiu_"+i).removeClass("diaol_"+i);
			$(".qiu_"+i).addClass("wieyi_"+i);
		};
			
	setTimeout(function (){
		for(i=1;i<=11;i++){
		$(".qiu_"+i).removeClass("wieyi_"+i);
		}
	},1100);	
	setTimeout(function(){
		switch(number){
			case 1:$(".zjdl").children("span").addClass("diaL_one");break;
			case 2:$(".zjdl").children("span").addClass("diaL_two");break;
			case 3:$(".zjdl").children("span").addClass("diaL_three");break;
			case 4:$(".zjdl").children("span").addClass("diaL_four");break;
		}
		$(".zjdl").removeClass("none").addClass("dila_Y");
				setTimeout(function (){
				switch(number){
					case 1:$("#jianpin_one").show();break;
					case 2:$("#jianpin_two").show();break;
					case 3:$("#jianpin_three").show();break;
					case 4:$("#jianpin_kong").show();break;
				}
			},900);
		},1100)
	
	//取消动画
	setTimeout(function (){
			$(".zjdl").addClass("none").removeClass("dila_Y");
			$(".wdjifen").html(score);
			$(".zjdl").children("span").removeAttr('class');
			
		},2500)
			
}	
});
/*----ball----*/
	
$(document).ready(function(e) {
		
var score=1000;
$(".wdjifen").html(score);


$(".game_go01").click(function(){
	score-=10;
		if(score<0){
			for(i=1;i<=11;i++){
				$(".qiu01_"+i).removeClass("wieyi_"+i);
			}
			$("#no_jifeng").show();
			}else{
				draw()
				}
		});
	
function draw(){
	var number =Math.floor(4*Math.random()+1);  

	for(i=1;i<=11;i++){
			$(".qiu01_"+i).removeClass("diaol_"+i);
			$(".qiu01_"+i).addClass("wieyi_"+i);
		};
			
	setTimeout(function (){
		for(i=1;i<=11;i++){
		$(".qiu01_"+i).removeClass("wieyi_"+i);
		}
	},1100);	
	setTimeout(function(){
		switch(number){
			case 1:$(".zjdl01").children("span").addClass("diaL_one");break;
			case 2:$(".zjdl01").children("span").addClass("diaL_two");break;
			case 3:$(".zjdl01").children("span").addClass("diaL_three");break;
			case 4:$(".zjdl01").children("span").addClass("diaL_four");break;
		}
		$(".zjdl01").removeClass("none").addClass("dila_Y");
				setTimeout(function (){
				switch(number){
					case 1:$("#jianpin_one").show();break;
					case 2:$("#jianpin_two").show();break;
					case 3:$("#jianpin_three").show();break;
					case 4:$("#jianpin_kong").show();break;
				}
			},900);
		},1100)
	
	//取消动画
	setTimeout(function (){
			$(".zjdl01").addClass("none").removeClass("dila_Y");
			$(".wdjifen").html(score);
			$(".zjdl01").children("span").removeAttr('class');
			
		},2500)
			
}	
});


$(function () {
  $(".claw01_hover").hide();
  $(".btn_go").click(function () {
    setTimeout(function () {
      setTimeout('$(".claw01_hover").show()', 0);
      setTimeout('$(".claw").hide()', 0);
	  setTimeout('$(".claw").show()', 3000);
        setTimeout('$(".claw01_hover").hide()', 3000);
    }, 0);
  })
});

$(function () {
  $(".claw_hover").hide();
  $(".btn_go01").click(function () {
    setTimeout(function () {
      setTimeout('$(".claw_hover").show()', 0);
      setTimeout('$(".claw01").hide()', 0);
	  setTimeout('$(".claw01").show()', 3000);
        setTimeout('$(".claw_hover").hide()', 3000);
    }, 0);
  })
});