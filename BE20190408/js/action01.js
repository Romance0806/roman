$(document).ready(function() {
	$('#content').hide();
	$('.coming').click(function(){
    alert("敬請期待!");	
});
/*----PAGE TAB----*/
$(function() {	

    $('.update').click(function() {
		$('#content').fadeIn();
		$('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 600);
        

    });
	$("#close").click(function() {
		$('#content').fadeOut();
	});
	

});

$(function() {	
    	var _showTab = 0, 
        $defaultLi = $('.tab li').eq(_showTab).addClass('active'),
        _defaultHref = $defaultLi.find('a').attr('href');
    //$(_defaultHref).siblings().show();
    $('.tab li').click(function() {
		$('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 600);
        var $this = $(this),
            _href = $this.find('a').attr('href');

        $(_href).stop(false, true).fadeIn().siblings().hide();
       $this.addClass('active').siblings('.active').removeClass('active');
        return false;

    });
    $("#cont02, #cont03, #cont04").hide();

});
});


	