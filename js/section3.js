$(function(){ // section3.js
/*---------------------------------------------------------------------*/	
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > 1000 ){
			$('.sec3-left-img').addClass('addSec3Ani1');
			$('.sec3-right-img').addClass('addSec3Ani2');
		}
		else{
			$('.sec3-left-img').removeClass('addSec3Ani1');
			$('.sec3-right-img').removeClass('addSec3Ani2');
		}
	});

/*---------------------------------------------------------------------*/	
}); // section3.js