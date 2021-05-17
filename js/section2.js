$(function(){ // section2.js
/*---------------------------------------------------------------------------------------------------*/	
	
	var s = [];
	
		function sFn(){
			for(i=0;i<=3;i++){
				s[i]=0;
			}
		}
		s[0]=1;
		navFn(0);
		autoPlay();
		
/*---------------------------------------------------------------------------------------------------*/
	
	$('.section2-navBtn').on({
		click: function(){
			navNum = $(this).html().slice(-1);
			
			for(i=0;i<=3;i++){
				if(s[i]==1){
					if( navNum > i ){
						nextSlide01(navNum);nextSlide02(navNum);nextSlide03(navNum);nextSlide04(navNum);
					}
					else if( navNum < i ){
						prevSlide01(navNum);prevSlide02(navNum);prevSlide03(navNum);prevSlide04(navNum);
					}
				}
			}
		}
	});	
		
/*---------------------------------------------------------------------------------------------------*/			
	
	function navFn(z){
		$('.section2-navBtn').removeClass('addSec2NavBt');
		$('.section2-navBtn').eq(z).addClass('addSec2NavBt');
	}

/*---------------------------------------------------------------------------------------------------*/	
	
	function autoPlay(){
		setId = setInterval(nFn, 4000);
	}
	
	$('.section2-navBtn, .slide-wrap').on({
		mouseenter: function(){
			clearInterval(setId);
		},
		mouseleave: function(){
			autoPlay();
		}
	});

/*---------------------------------------------------------------------------------------------------*/	
	
	function nFn(){
		if     (s[0]==1){nextSlide01(1);nextSlide02(1);nextSlide03(1);nextSlide04(1);}
		else if(s[1]==1){nextSlide01(2);nextSlide02(2);nextSlide03(2);nextSlide04(2);}
		else if(s[2]==1){nextSlide01(3);nextSlide02(3);nextSlide03(3);nextSlide04(3);}
		else if(s[3]==1){nextSlide01(0);nextSlide02(0);nextSlide03(0);nextSlide04(0);}
		
	}
	
	function nextSlide01(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==0){
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==3){
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
	}
	function nextSlide02(z){
		sFn();
		s[z]=1;
		
		if(z==0){
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==3){
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
	}
	function nextSlide03(z){
		sFn();
		s[z]=1;
		
		if(z==0){
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==3){
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
	}
	function nextSlide04(z){
		sFn();
		s[z]=1;
		
		if(z==0){
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
		else if(z==3){
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},300);
		}
	}
/*---------------------------------------------------------------------------------------------------*/	
	
	function pFn(){
		if     (s[3]==1){prevSlide01(2);prevSlide02(2);prevSlide03(2);prevSlide04(2);}
		else if(s[2]==1){prevSlide01(1);prevSlide02(1);prevSlide03(1);prevSlide04(1);}
		else if(s[1]==1){prevSlide01(0);prevSlide02(0);prevSlide03(0);prevSlide04(0);}
		else if(s[0]==1){prevSlide01(3);prevSlide02(3);prevSlide03(3);prevSlide04(3);}
		
	}
	
	function prevSlide01(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==3){
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==0){
			$('.slide-sec2-1>li').eq(1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-1>li').eq(0).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-1>li').eq(3).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-1>li').eq(2).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
	}
	function prevSlide02(z){
		sFn();
		s[z]=1;
		
		if(z==3){
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==0){
			$('.slide-sec2-2>li').eq(1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-2>li').eq(0).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-2>li').eq(3).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-2>li').eq(2).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
	}
	function prevSlide03(z){
		sFn();
		s[z]=1;
		
		if(z==3){
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==0){
			$('.slide-sec2-3>li').eq(1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-3>li').eq(0).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-3>li').eq(3).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-3>li').eq(2).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
	}
	function prevSlide04(z){
		sFn();
		s[z]=1;
		
		if(z==3){
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==2){
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==1){
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
		else if(z==0){
			$('.slide-sec2-4>li').eq(1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*  1)+'%'},300);
			$('.slide-sec2-4>li').eq(0).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},300);
			$('.slide-sec2-4>li').eq(3).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},300);
			$('.slide-sec2-4>li').eq(2).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},300);
		}
	}
	
/*---------------------------------------------------------------------------------------------------*/	
}); // section2.js