/*=========================== HTML INCLUDE =================================*/

$(document).ready(function () {
  $("#footer").load("include/footer.html");
});

/*----pitcher----*/
$(function () {
  $(".pitcher g_show").show();
  $(".baseball_bat").show();
  $(".pitcher_open01").hide();
  $(".pitcher_open02").hide();
  $(".pitcher_open03").hide();
  $(".pitcher_open04").hide();
  $(".blow").hide();
  $(".but03").click(function () {
    setTimeout(function () {
      $(".baseball_bat").addClass("Shakeright");
      setTimeout('$(".baseball_bat").hide()', 1000);
      setTimeout(function () {
        location.reload();
      }, 3000);
      setTimeout('$(".blow").show()', 0);
      setTimeout('$(".pitcher").hide()', 0);
      $(".pitcher_open01").show();
      setTimeout('$(".pitcher_open01").hide()', 2000);
    }, 200);
  })
});
$(function () {
  $(".pitcher_open02").hide();
  $(".baseball_bat").show();
  $(".but04").click(function () {
    setTimeout(function () {
      $(".baseball_bat").addClass("Shakeright");
      setTimeout('$(".baseball_bat").hide()', 1000);
      setTimeout(function () {
        location.reload();
      },3500);
      setTimeout('$(".blow").show()', 0);
      setTimeout('$(".pitcher").hide()', 0);
      $(".pitcher_open02").show();
      setTimeout('$(".pitcher_open02").hide()', 3100);
    }, 200);
  })
});
$(function () {
  $(".pitcher_open03").hide();
  $(".baseball_bat").show();
  $(".btn01").click(function () {
    setTimeout(function () {
      $(".baseball_bat").addClass("Shakeright");
      setTimeout('$(".baseball_bat").hide()', 1000);
      setTimeout(function () {
        location.reload();
      }, 3000);
      setTimeout('$(".blow").show()', 0);
      setTimeout('$(".pitcher").hide()', 0);
      $(".pitcher_open03").show();
      setTimeout('$(".pitcher_open03").hide()', 2000);
    }, 200);
  })
});

$(function () {
  $(".pitcher_open04").hide();
  $(".baseball_bat").show();
  $(".btn02").click(function () {
    setTimeout(function () {
      $(".baseball_bat").addClass("Shakeright");
      setTimeout('$(".baseball_bat").hide()', 1000);
      setTimeout(function () {
        location.reload();
      }, 3000);
      setTimeout('$(".blow").show()', 0);
      setTimeout('$(".pitcher").hide()', 0);
      $(".pitcher_open04").show();
      setTimeout('$(".pitcher_open04").hide()', 2000);
    }, 200);
  })
});
/*ribbons*/
$(function () {
  $(".ribbons").hide();
});

