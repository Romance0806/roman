

/*=========================== HTML INCLUDE =================================*/

$(document).ready(function () {

  $("#footer").load("include/footer.html");

});

/*----pitcher----*/
$(function () {
  $(".pitcher g_show").show();
  $(".pitcher_open").hide();
  $(".pitcher_open02").hide();
  $(".pitcher_open03").hide();
  $(".pitcher_open04").hide();
  $(".blow").hide();
  $(".but03").click(function () {
    setTimeout(function () {
      setTimeout('$(".blow").show()', 2200);
      setTimeout('$(".pitcher").hide()', 2200);
      $(".pitcher_open").show();
      setTimeout('$(".pitcher_open").hide()', 2200);
    }, 200);
  })
});
$(function () {
  $(".pitcher_open02").hide();
  $(".but04").click(function () {
    setTimeout(function () {
      setTimeout('$(".blow").show()', 2800);
      setTimeout('$(".pitcher").hide()', 2800);
      $(".pitcher_open02").show();
      setTimeout('$(".pitcher_open02").hide()', 2800);
    }, 200);
  })
});
$(function () {
  $(".pitcher_open03").hide();
  $(".btn01").click(function () {
    setTimeout(function () {
      setTimeout('$(".blow").show()', 2800);
      setTimeout('$(".pitcher").hide()', 2800);
      $(".pitcher_open03").show();
      setTimeout('$(".pitcher_open03").hide()', 2800);
    }, 200);
  })
});

$(function () {
  $(".pitcher_open04").hide();
  $(".btn02").click(function () {
    setTimeout(function () {
      setTimeout('$(".blow").show()', 2600);
      setTimeout('$(".pitcher").hide()', 2600);
      $(".pitcher_open04").show();
      setTimeout('$(".pitcher_open04").hide()', 2600);
    }, 200);
  })
});
/*----進度條----*/
$(function () {
  $(".animated-progress span").each(function () {
    $(this).animate({
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
  });
