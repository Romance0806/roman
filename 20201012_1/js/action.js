$(document).ready(function () {
	$(".evt1").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt1').offset().top}, 500)	}), 
	$(".evt2").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt2').offset().top}, 500)}), 
	$(".evt3").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt3').offset().top}, 500)	}), 
	$(".evt4").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt4').offset().top}, 500)	}), 
	$(".evt5").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt5').offset().top}, 500) }),
	$(".evt6").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt6').offset().top}, 500) }),
	$(".evt7").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt7').offset().top}, 500) }),
	$(".evt8").click(function(){ $('html,body')
	.animate({scrollTop:$('#evt8').offset().top}, 500) })
});
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
	
$(function() {  
  /*----nav----*/
  $('.open_menu').click(function() {
    $(this).toggleClass('close');
    $('nav').toggleClass('open');
    $('html,body').toggleClass('notscroll');
  });
  $('nav a').click(function(){
    $('.open_menu').removeClass('close');
    $('nav').removeClass('open'); 
  });

});

$(document).ready(function() {
	$('#pay').hide();              
	$('#notice').click(function() {
		$('#pay').fadeIn();
		});
	
	$("#close, .reveal-modal-bg").click(function() {
		$('#pay').fadeOut();
	});
});

;(function($, window, document, undefined) {
    /**
     * Creates the Linked plugin.
     * @class The Linked Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Linked = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'dragged.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.linked) {
                    this.update(e);
                }
            }, this),
            'linked.to.owl.carousel': $.proxy(function(e, index, speed, standard, propagate) {
                if (e.namespace && this._core.settings.linked) {
                    this.toSlide(index, speed, propagate);
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Linked.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Linked.Defaults = {
        linked: false
    };

    /**
     * Updated linked instances
     */
    Linked.prototype.update = function(e) {
        this.toSlide( e.relatedTarget.relative(e.item.index) );
    };

    /**
     * Carry out the to.owl.carousel proxy function
     * @param {int} index
     * @param {int} speed
     * @param {bool} propagate
     */
    Linked.prototype.toSlide = function(index, speed, propagate) {
        var id = this._core.$element.attr('id'),
            linked = this._core.settings.linked.split(',');

        if ( typeof propagate == 'undefined' ) {
            propagate = true;
        }

        index = index || 0;

        if ( propagate ) {
            $.each(linked, function(i, el){
                $(el).trigger('linked.to.owl.carousel', [index, 300, true, false]);
            });
        } else {
            this._core.$element.trigger('to.owl.carousel', [index, 300, true]);

            if ( this._core.settings.current ) {
                this._core._plugins.current.switchTo(index);
            }
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Linked.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.linked = Linked;

})(window.Zepto || window.jQuery, window, document);

$('.milestone-carousel').owlCarousel({
  items:1,
  loop:false,
  center:true,
  autoplayTimeout: 3000,
  autoplay:true,
  //URLhashListener:true,
  autoplayHoverPause:true,
  //startPosition: 'URLHash',
  responsiveClass:true,
  linked:".years-carousel"
});

$(".years-carousel").on("initialize.owl.carousel link.to.owl.carousel", function() {
$(this.$element).find(".owl-item.current").removeClass("current");

var current = $(this.$element).find(".owl-item.active.center").length
            ? $(this.$element).find(".owl-item.active.center")
            : $(this.$element).find(".owl-item.active").eq(0);

  current.addClass("current");  
    }).owlCarousel({
        loop: false,
        dots: false,
        responsiveClass:true,
        items: 11,
        margin: 0,
        center:true,
        linked: ".milestone-carousel"        
    });
<!--parallax-->
$(function() {
  "use strict";
  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
  });
});		
<!--aos-->
$(function() {
    AOS.init({
        easing: 'data-aos-offset',
    });
});	
