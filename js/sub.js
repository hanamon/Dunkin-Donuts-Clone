$(function(){ // sub.js
/*----------------------------------------------------------------------*/	
	
	$('.menuBtn').on({
		click: function(){
			$('.menuBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
			$('.sub').not(this).hide(0);
			$(this).next().stop().slideDown(200);
			
			$('.menuBtn').next().find('span').css({opacity:0, transition:'all 0s'});
			$(this).next().find('span').css({opacity:1, transition:'all 1.6s'});
		},
		mouseenter: function(){
			$('.menuBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
			$('.sub').not(this).hide(0);
			$(this).next().stop().slideDown(200);
			
			$('.menuBtn').next().find('span').css({opacity:0, transition:'all 0s'});
			$(this).next().find('span').css({opacity:1, transition:'all 1.6s'});
		},
		focusin: function(){
			$('.menuBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
			$('.sub').not(this).hide(0);
			$(this).next().stop().slideDown(200);
			
			$('.menuBtn').next().find('span').css({opacity:0, transition:'all 0s'});
			$(this).next().find('span').css({opacity:1, transition:'all 1.6s'});
		}
	});
	
/*----------------------------------------------------------------------*/
	
	$('.main-menu-right-wrap').on({
		mouseleave: function(){
			$('.menuBtn').removeClass('addMainBtn');
			
			$('.sub').stop().slideUp(150);
			
			$('.menuBtn').next().find('span').css({opacity:0, transition:'all 0s'});
		}	
	});
	
/*----------------------------------------------------------------------*/	
	
	$('.slide-wrap>li>a').on({
		focusin: function(){
			$('.menuBtn').removeClass('addMainBtn');
			
			$('.sub').stop().slideUp(150);
			
			$('.menuBtn').next().find('span').css({opacity:0, transition:'all 0s'});
		}
	});
	
/*----------------------------------------------------------------------*/
}); // sub.js