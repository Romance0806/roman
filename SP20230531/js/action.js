$(function(){	
	$('.card_light').hide();
    
	
	/*----Select card----*/
	$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().addClass("on");
    } else {
        $(this).parent().removeClass("on");
    }
});
	
	/*----Flip card----*/
	$(".btnStart").click(function () {
		$(".card_area li.on").removeClass("on").addClass("flipped").children('input').prop('disabled', true);  //翻牌動作
		$(".card_area li.flipped > label > img").attr('src', 'images/card_front.png');  //第一次抽卡
	});
	
	$('.btnStart').click(function(){
    var card_Result = $(".card_area li.flipped > label > img");
    setTimeout(function() {
        card_Result.attr('src', 'images/card_result.png'); //進化結果
    }, 2000);
});
	
	
	/*----Slot----*/
		var btnTriky = document.querySelector('.btnStart');
		var elTriky = document.querySelector('.slot_frame');

		var triky = new SlotMachine(elTriky, {
		  randomize() {
			var returnVal = 2;
			if (returnVal == 2){  //大成功
				setTimeout(function(){
			  $('.card_area li.flipped').addClass('glow');
			  $('.card_light').fadeIn(200).addClass('shiny');
			  }, 300);
			}else if(returnVal == 2){  //成功
			  $('.card_area li.flipped').addClass('glow');
			}else{  //失敗

			}
			return returnVal;
		  }
		});
		
		//btnTriky.addEventListener('click', () => triky.shuffle(8));	
		
		btnTriky.addEventListener('click', () => {
		   setTimeout(() => {
			triky.shuffle(8)
		   }, 500);
		});
	
	$(".btnStartAll").click(function () {
		$(".card_area li").removeClass("on").addClass("flipped").children('input').prop('disabled', true);
		$(".card_area li.flipped > label > img").attr('src', 'images/card_front.png');
	});


	
	
	
	
});