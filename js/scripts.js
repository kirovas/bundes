//jQuery code
jQuery(function($) {
	"use strict";

	//Custom code here

});
$(function() {
			var pull 		= $('#pull');
				menu 		= $('#top-menu ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
$(window).load(function() {
    $('.flexslider').flexslider();
	
  });
  $(function() {
    $( "#v-tabs" ).tabs();
  });
  $(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 156,
    minSlides: 2,
    maxSlides: 4,
	pager: false,
    slideMargin: 0
  });
});