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

