/*----lottery----*/
var timer;
$(window).load(function(){
    timer = setTimeout(function() {animationRoll(500);},0);
});
/*----PAGE TAB----*/
$(function() {	
	
	$(".btn02 a").click(function(){
		$("#evt").toggleClass("on");
	});

	$("#close").click(function() {
		$('#evt').toggleClass("on");
	});

});

	/*----mob_menu----*/
$(function() {
  $('.btn.open').click(function(){ 
    $('.nav_mob').toggleClass('on');
    $(this).toggleClass('close');
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});