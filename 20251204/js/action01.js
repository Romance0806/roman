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

$("#panel").on("click", "ul", function (e) {
  e.stopPropagation();
});

$(document).ready(function(){
  $("#flip_m").click(function(){
    $("#panel_m").slideToggle("slow");
  });
});

$("#panel_m").on("click", "ul", function (e) {
  e.stopPropagation();
});