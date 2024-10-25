/*----BODY----*/
$(function () {
  "use strict"; //使用strict mode(嚴格模式)
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
  $(".go").click(function () {
    $('html,body').animate({
      scrollTop: $('.title02').offset().top
    }, 800);
  });
});

/*----Drag & Drop----*/

function AllowDrop(event) {
  event.preventDefault();
}

function Drag(event) {
  event.dataTransfer.setData("text", event.currentTarget.id);
}

function Drop(event) {
  var target = event.currentTarget.id
  var status = exisImg(target);
  if (!status) {
    var data = event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
  }
  event.preventDefault();
}

function exisImg(event) {
  if ($("#" + event).find("img").length > 0) {
    return true;
  }
  return false;
}

function clearImg() {
  $(".box").find("img").remove().appendTo(".img_box");
}
$(function () {
  var box2 = "",
    box3 = "",
    box4 = "",
    box5 = "",
    box6 = "",
    box7 = "",
    box8 = ""
  $(".reset").click(function () {
    // location.reload();
    clearImg();
  });
  $("#btn2").click(function () {
    box2 = $("#Box2").find("img").data("i");
    box3 = $("#Box3").find("img").data("i");
    box4 = $("#Box4").find("img").data("i");
    if (box2 == undefined || box3 == undefined || box4 == undefined || box5 == undefined || box6 == undefined || box7 == undefined || box8 == undefined) {
      alert("請填滿空格")
    } else {
      alert("box2:" + box2 + ",box3:" + box3 + ",box4:" + box4 + ",box5:" + box5 + ",box6:" + box6 + ",box7:" + box7 + ",box8:" + box8)
    }
  });
})
/*----meat---*/
$(function () {

  $(".mist").hide();
  $("#box02_img").hide();
  $("a.btn").click(function () {
    setTimeout(function () {
      setTimeout('$(".mist").show()', 200);
      $(".mist").addClass("grill");
      setTimeout('$("#Img4").hide()', 6000);
      $("#Img4").addClass("grill01");
      setTimeout('$("#box02_img").show()', 6000);
      $("#Img4").addClass("grill01");
    });
  })
});
