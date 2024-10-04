(function($){
	$.fn.lightrise = function(options){
		
		var element = this;
		
		// random fuction for generating random vals
		random = function random(min, max){
			return Math.round(min + Math.random()*(max-min)); 
		}
		
		
		// Randam Array Tree-Web custom 2011/10/29
		function randArray(_str){
  		 var i = _str.length;
   		while (i) {
     		 var y = Math.floor(Math.random()*i);
     		 var t = _str[--i];
      		_str[i] = _str[y];
      		_str[y] = t;
   		}
   		return _str;
		}
		
		
		// snow flake class
		function Flake(_x, _y, _size, _speed)
		{
			// Flake properties
			this.id = flakeId; 
			this.x  = _x;
			this.y  = _y;
			this.size = _size;
			this.speed = _speed;
			this.step = 0,
			this.stepSize = random(1,10) / 100;
			
        
         //Tree-Web custom (2010/12/10)
         var angle = Math.round(Math.random()*360);
			var flakeMarkup = "<img src=' "+ randArray(options.image)[0] +"' id='flake-" + this.id;
			flakeMarkup += "' style='width: " + this.size + "px; height: " + this.size + "px;";
			flakeMarkup += "; position: absolute; top: " + this.y + "px; left:" + this.x + "px; font-size: 0px; z-index: " + options.flakeIndex;
         
         // CSS 3
         flakeMarkup += "; -moz-transform:rotate(" + angle + "deg);";
         flakeMarkup += "-webkit-transform:rotate(" + angle + "deg);";
         flakeMarkup += "transform:rotate(" + angle + "deg);";
			flakeMarkup += "' />";
         //
         
			if($(element).get(0).tagName === $(document).get(0).tagName){
				$('body').append(flakeMarkup);
			}else{
				$(element).append(flakeMarkup);
			}
			
			this.element = document.getElementById('flake-' + this.id);
			
			// Update function, used to update the snow flakes, and checks current snowflake against bounds
			this.update = function(){
				this.y += this.speed;
				
				if(this.y > (elHeight) -20){
					this.reset();
				}
				
				this.element.style.top = ($(window).height()-100)- this.y + 'px';
				/*this.element.style.top = this.y + 'px';*/
				this.element.style.left = this.x + 'px';
				
				this.step += this.stepSize;
				this.x += Math.cos(this.step);
				
				if(this.x > (elWidth) - 22 || this.x < 22){
					this.reset();
				}
			}
			
			// Resets the snowflake once it reaches one of the bounds set
			this.reset = function(){
				this.y = 0;
				this.x = random(0, elWidth);
				this.stepSize = random(1,10) / 100;
				this.size = random((options.minSize * 100), (options.maxSize * 100)) / 100;
				this.speed = random(options.minSpeed, options.maxSpeed);
			}
		}
	
		// plugin vars
		var flakes = [],
			flakeId = 0,
			i = 0,
			elHeight = $(element).height(),
			elWidth = $(element).width(),
			defaults = {
				flakeCount : 35,
				flakeColor : '#ffffff',
				flakeIndex: 999999,
				minSize : 1,
				maxSize : 3,
				minSpeed : 2,
				maxSpeed : 3,
            image:'image.png'
				},
			options = $.extend(defaults, options);		
		
		// Bind the window resize event so we can get the innerHeight again
		$(window).bind("resize", function(){  
			elHeight = $(element).height();
			elWidth = $(element).width();
		}); 
		

		// initialize the flakes
		for(i = 0; i < options.flakeCount; i+=1){
			flakeId = i;
			flakes[i] = new Flake(random(0,elWidth), random(0, elHeight), random((options.minSize * 100), (options.maxSize * 100)) / 100, random(options.minSpeed, options.maxSpeed));
		}
	
		// this controls flow of the updating snow
		function lightarea(){
			for( i = 0; i < options.flakeCount; i += 1){
				flakes[i].update();
			}
			
			setTimeout(function(){lightarea()}, 30);
		}
		
		lightarea();
	};
})(jQuery);


$(document).ready(function(){
	$('#lightarea').lightrise({
	   flakeCount :35, // 枚数
	   flakeIndex : 99, // z-index
	   maxSpeed : 5, // 最大速度
	   minSpeed : 3, // 最小速度
	   maxSize  : 20, // 最大尺寸
	   minSize  : 6, // 最小尺寸
	   image : [
	      'images/main/light1.png',
	      'images/main/light2.png',
	   ]
	});
});