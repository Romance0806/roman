/*----Html include----*/
$(function() {
  "use strict";//使用strict mode
  /*----top---*/
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  $(".gotop").click(function() {
    $('html,body').animate({
      scrollTop: "0px"
    }, 500);
  });

  /*----content----*/
  $(function() {
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('.container_mb, .container_pc').each(function() {
      // 目前的頁籤區塊
      var $tab = $(this);
      var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
      $($defaultLi.find('a').attr('href')).siblings().hide();
      $('.go').click(function() {
        window.open("http://www.sponline.com.tw/news/notice/notice.html?listtype=view&newsseq=11089","_blank");
      });

      // 當 li 頁籤被點擊時...
      // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
      $('ul.tabs li', $tab).click(function() {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
          _clickTab = $this.find('a').attr('href');
          $('html, body').animate({
            scrollTop: $(".container_mb, .container_pc").offset().top
          }, 200);
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的都移除 class
        $this.addClass('active').siblings('.active').removeClass('active');
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab).stop(false, true).fadeIn().siblings().hide();

        return false;
      }).find('a').focus(function() {
        this.blur();
      });
    });
  });
});
<!--parallax-->
/*$(function() {
  "use strict";
  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
  });
});*/
/*=====Character====*/
$(function() {
    var _showTab = 0, //亂數選擇 Math.floor(Math.random() * $('.tabs li').length),
        $defaultLi = $('.equip li').eq(_showTab).addClass('active'),
        _defaultHref = $defaultLi.find('a').attr('href');
    //$(_defaultHref).siblings().show();
    $('.equip li').click(function() {
        var $this = $(this),
            _href = $this.find('a').attr('href');

        if (_href.indexOf('http://') >= 0) {
            open(_href);
            //location.href = _href; 
            return false;
        }

        $(_href).stop(false, true).fadeIn().siblings().hide();
        $this.addClass('active').siblings('.active').removeClass('active');
        return false;

    });
    $("#BOX2,#BOX3,#BOX4,#BOX5,#BOX6,#BOX7,#BOX8,#BOX9,#BOX10,#BOX11,#BOX12,#BOX13,#BOX14,#BOX15,#BOX16").hide();

});
$(function() {
    var _showTab = 0, //亂數選擇 Math.floor(Math.random() * $('.tabs li').length),
        $defaultLi = $('.equip01 li').eq(_showTab).addClass('active01'),
        _defaultHref = $defaultLi.find('a').attr('href');
    //$(_defaultHref).siblings().show();
    $('.equip01 li').click(function() {
        var $this = $(this),
            _href = $this.find('a').attr('href');

        if (_href.indexOf('http://') >= 0) {
            open(_href);
            //location.href = _href; 
            return false;
        }

        $(_href).stop(false, true).fadeIn().siblings().hide();
        $this.addClass('active01').siblings('.active01').removeClass('active01');
        return false;

    });
    $("#BOX18,#BOX19,#BOX20").hide();

});
//Video
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
			
			);

			plugin.open();
		});

	});

});
$(".video_close").click(function () {
		$(".video_bg").hide();
	});
$(document).ready(function () {
    $("#pay").hide();
    $("#notice01").click(function () {
        $("#pay").fadeIn();
    });
    $("#close, .reveal-modal-bg").click(function () {
        $("#pay").fadeOut();
    });
});
