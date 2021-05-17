$(function(){ // section5.js
/*--------------------------------------------------------------------------------*/	
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > 2200 ){
			$('.sec5-ani-1-wrap,.sec5-ani-2-wrap').addClass('addSec5Ani');
		}
		else{
			$('.sec5-ani-1-wrap,.sec5-ani-2-wrap').removeClass('addSec5Ani');
		}
	});
	
/*--------------------------------------------------------------------------------*/	
}); // section5.js