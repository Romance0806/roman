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



$(function () {
  $(".scrape_open").hide();
  $(".scratch_btn a").click(function () {
    setTimeout(function () {
	   setTimeout('$(".scrape").hide()',0);
	   setTimeout('$(".scrape_open").show()',0);
       setTimeout('$(".scrape_open").hide()',2300);
    }, 0);
  })
});

$(function () {
  $(".scrape_open02").hide();
  $(".scratch_btn02 a").click(function () {
    setTimeout(function () {
	   setTimeout('$(".scrape02").hide()',0);
	   setTimeout('$(".scrape_open02").show()',0);
       setTimeout('$(".scrape_open02").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open03").hide();
  $(".scratch_btn03 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape03").hide()',0);
	   setTimeout('$(".scrape_open03").show()',0);
       setTimeout('$(".scrape_open03").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open04").hide();
  $(".scratch_btn04 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape04").hide()',0);
	   setTimeout('$(".scrape_open04").show()',0);
       setTimeout('$(".scrape_open04").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open05").hide();
  $(".scratch_btn05 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape05").hide()',0);
	   setTimeout('$(".scrape_open05").show()',0);
       setTimeout('$(".scrape_open05").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open06").hide();
  $(".scratch_btn06 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape06").hide()',0);
	   setTimeout('$(".scrape_open06").show()',0);
       setTimeout('$(".scrape_open06").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open07").hide();
  $(".scratch_btn07 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape07").hide()',0);
	   setTimeout('$(".scrape_open07").show()',0);
       setTimeout('$(".scrape_open07").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open08").hide();
  $(".scratch_btn08 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape08").hide()',0);
	   setTimeout('$(".scrape_open08").show()',0);
       setTimeout('$(".scrape_open08").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open09").hide();
  $(".scratch_btn09 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape09").hide()',0);
	   setTimeout('$(".scrape_open09").show()',0);
       setTimeout('$(".scrape_open09").hide()',2300);
      }, 0);
  })
});
$(function () {
  $(".scrape_open10").hide();
  $(".scratch_btn10 a").click(function () {
    setTimeout(function () {
		   setTimeout('$(".scrape10").hide()',0);
	   setTimeout('$(".scrape_open10").show()',0);
       setTimeout('$(".scrape_open10").hide()',2300);
      }, 0);
  })
});

$(function () {
  $(".scrape_open, .scrape_open02, .scrape_open03, .scrape_open04, .scrape_open05, .scrape_open06, .scrape_open07, .scrape_open08, .scrape_open09, .scrape_open10").hide();
  $(".btn_go03").click(function () {
    setTimeout(function () {
		$(".scrape, .scrape02, .scrape03, .scrape04, .scrape05, .scrape06, .scrape07, .scrape08, .scrape09, .scrape10").hide();
	   setTimeout('$(".scrape_open, .scrape_open02, .scrape_open03, .scrape_open04, .scrape_open05, .scrape_open06, .scrape_open07, .scrape_open08, .scrape_open09, .scrape_open10").show()',0);
       setTimeout('$(".scrape_open, .scrape_open02, .scrape_open03, .scrape_open04, .scrape_open05, .scrape_open06, .scrape_open07, .scrape_open08, .scrape_open09, .scrape_open10").hide()',2300);
      }, 0);
  })
});

