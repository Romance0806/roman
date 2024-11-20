function closePopup(target) {
    $(target).fadeOut(300, function () {
        if ($(this).attr('id') == 'movie') {
            $('#movie .content .container').empty();
            $('#mainVideo').trigger('play');
            checkBgAudio('close');
        }
    });
}
function darkPopUp(text) {
    $('#darkPop').remove();

    var modalTemp = '';
    modalTemp += '<div id="darkPop" class="popup"><div class="contents"><div class="classSection">';
    modalTemp += '<div class="detailInfo">';
    modalTemp += text;
    modalTemp += '</div>';
    modalTemp += '<div class="popBtn"><a href="#none" class="btnClose"><span></span></a></div></div></div></div>';

    $("body").append(modalTemp);
    $("body").append(function () {
        $("#darkPop").fadeIn();
    });
}
$(document).on('click', '.popup', function () {
    closePopup(this);
});
$(document).on('click', '.popup .content, .popup .detailInfo', function (e) {
    e.stopPropagation();
});
$(document).on('click', '.popup .btnDone', '.btnDone', function (e) {
    e.stopPropagation();
    closePopup($(this).closest('.popup'));
});

/*----event----*/
$('.act1.evt1').on('click', function () {
  $('#eventPop.evt1').fadeIn();
});
$('.act2.evt2').on('click', function () {
  $('#eventPop.evt2').fadeIn();
});
$('.act3.evt3').on('click', function () {
  $('#eventPop.evt3').fadeIn();
});
$('.act4.evt4').on('click', function () {
  $('#eventPop.evt4').fadeIn();
});
$('.act5.evt5').on('click', function () {
  $('#eventPop.evt5').fadeIn();
});
$('.act6.evt6').on('click', function () {
  $('#eventPop.evt6').fadeIn();
});
$('.act7.evt7').on('click', function () {
  $('#eventPop.evt7').fadeIn();
});
$('.act8.evt8').on('click', function () {
  $('#eventPop.evt8').fadeIn();
});
$('.act9.evt9').on('click', function () {
  $('#eventPop.evt9').fadeIn();
});
$('.act10.evt10').on('click', function () {
  $('#eventPop.evt10').fadeIn();
});
$('.act11.evt11').on('click', function () {
  $('#eventPop.evt11').fadeIn();
});
$('.act12.evt12').on('click', function () {
  $('#eventPop.evt12').fadeIn();
});
$('.act13.evt13').on('click', function () {
  $('#eventPop.evt13').fadeIn();
});
$('.act14.evt14').on('click', function () {
  $('#eventPop.evt14').fadeIn();
});
$('.act15.evt15').on('click', function () {
  $('#eventPop.evt15').fadeIn();
});
$('.act16.evt16').on('click', function () {
  $('#eventPop.evt16').fadeIn();
});