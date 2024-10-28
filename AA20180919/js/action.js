/*----Go Top----*/

$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
	$(".gotop").fadeIn();
    } else {
	$(".gotop").fadeOut();
    }
});
$(function() {
    $(".gotop").click(function() {
	$('html,body').animate({
		scrollTop: "0px"
	}, 500);
    });

});


/*----Menu----*/

$(function() {
    var _showTab = 0, //亂數選擇 Math.floor(Math.random() * $('.tabs li').length),
        $defaultLi = $('.menu li').eq(_showTab).addClass('active'),
        _defaultHref = $defaultLi.find('a').attr('href');
    //$(_defaultHref).siblings().show();
	
	/*$('.btn09').click(function() {
        alert('Coming soon');
		window.open("event.html", "_blank");
		});*/
		
    $('.menu li').click(function() {
        var $this = $(this),
            _href = $this.find('a').attr('href');
			$('html, body').animate({
        scrollTop: $(".main").offset().top
    }, 600);
			
			

        if (_href.indexOf('http://') >= 0) {
            open(_href);
            //location.href = _href; 
            return false;
        }


        $(_href).stop(false, true).fadeIn().siblings().hide();
        $this.addClass('active').siblings('.active').removeClass('active');
        $(".pageTitle01").html(_href);
        return false;

    });
		
    $("#BOX2, #BOX3, #BOX4,#BOX5,#BOX6,#BOX7,#BOX8,#BOX9,#BOX10").hide();
	

});


/*----Text tab----*/
$(window).load(function(){
	// 預設顯示第一個 Tab
	var _showTab = 0;
	
	
	var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		
		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	
	var $defaultLi = $('ul.tabs2 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs2 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	
	var $defaultLi = $('ul.tabs3 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs3 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	
	var $defaultLi = $('ul.tabs4 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs4 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	
	var $defaultLi = $('ul.tabs5 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs5 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	var $defaultLi = $('ul.tabs6 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs6 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	var $defaultLi = $('ul.tabs7 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs7 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});

	var $defaultLi = $('ul.tabs8 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs8 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});
	
	
	var $defaultLi = $('ul.tabs9 li').eq(_showTab).addClass('active');
	$($defaultLi.find('a').attr('href')).siblings().hide();
	
	// 當 li 頁籤被點擊時...
	// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
	$('ul.tabs9 li').click(function() {
		// 找出 li 中的超連結 href(#id)
		var $this = $(this),
			_clickTab = $this.find('a').attr('href');
		// 把目前點擊到的 li 頁籤加上 .active
		// 並把兄弟元素中有 .active 的都移除 class
		$this.addClass('active').siblings('.active').removeClass('active');
		// 淡入相對應的內容並隱藏兄弟元素
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();

		return false;
	}).find('a').focus(function(){
		this.blur();
	});

});
