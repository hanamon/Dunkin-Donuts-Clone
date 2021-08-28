$(function(){ // section1.js
/*-----------------------------------------------------------*/	
	
	var s = [];
	var n = $('.slide').length-1;
		
		function sFn(){
			for(i=0;i<=n;i++){
				s[i]=0;
			}
		}
		s[0]=1;
		navFn(0);
		autoPlay();
		
/*-----------------------------------------------------------*/
	
	function autoPlay(){
		setIn = setInterval(nFn, 4000);
	}
	
	$('.nextBtn,.prevBtn,.navBtn').on({
		mouseenter: function(){
			clearInterval(setIn);
		},
		mouseleave: function(){
			autoPlay();
		}
	});
			
/*-----------------------------------------------------------*/
	
	$('.navBtn').on({
		click: function(){
			navNum = $(this).html().slice(-1);
			
			for(i=0;i<=n;i++){
				if(s[i]==1){
					if( navNum > i ){
					nextSlide(navNum);
					}
					else if( navNum < i ){
					prevSlide(navNum);
					}
				}
			}
		}
	});	

/*-----------------------------------------------------------*/	
	
	function navFn(z){
		$('.navBtn').removeClass('addNavBtn');
		$('.navBtn').eq(z).addClass('addNavBtn');
	}

/*-----------------------------------------------------------*/		
	
	$('.nextBtn').on({
		click: function(){
			nFn();
		}
	});	
		
	$('.prevBtn').on({
		click: function(){
			pFn();
		}
	});	

/*-----------------------------------------------------------*/	
	
	function nFn(){
		if     (s[0]==1){nextSlide(1);}
		else if(s[1]==1){nextSlide(2);}
		else if(s[2]==1){nextSlide(3);}
		else if(s[3]==1){nextSlide(4);}
		else if(s[4]==1){nextSlide(5);}
		else if(s[5]==1){nextSlide(6);}
		else if(s[6]==1){nextSlide(7);}
		else if(s[7]==1){nextSlide(0);}
	}
	
	function nextSlide(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==0){
			$('.slide').eq(7).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(0).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==1){
			$('.slide').eq(0).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(1).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==2){
			$('.slide').eq(1).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(2).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==3){
			$('.slide').eq(2).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(3).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==4){
			$('.slide').eq(3).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(4).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==5){
			$('.slide').eq(4).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(5).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==6){
			$('.slide').eq(5).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(6).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
		
		else if(z==7){
			$('.slide').eq(6).stop().animate({left:(100*0)+'%'},0).animate({left:(100*-1)+'%'},500);
		    $('.slide').eq(7).stop().animate({left:(100*1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*2)+'%'},0).animate({left:(100* 1)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*3)+'%'},0).animate({left:(100* 2)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*4)+'%'},0).animate({left:(100* 3)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*5)+'%'},0).animate({left:(100* 4)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*6)+'%'},0).animate({left:(100* 5)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*7)+'%'},0).animate({left:(100* 6)+'%'},500);
		}
	}
	
/*-----------------------------------------------------------*/	
	
	function pFn(){
		if     (s[7]==1){prevSlide(6);}
		else if(s[6]==1){prevSlide(5);}
		else if(s[5]==1){prevSlide(4);}
		else if(s[4]==1){prevSlide(3);}
		else if(s[3]==1){prevSlide(2);}
		else if(s[2]==1){prevSlide(1);}
		else if(s[1]==1){prevSlide(0);}
		else if(s[0]==1){prevSlide(7);}
	}
	
	function prevSlide(z){
		sFn();
		s[z]=1;
		navFn(z);
		
		if(z==7){
			$('.slide').eq(0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(7).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==6){
			$('.slide').eq(7).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(6).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==5){
			$('.slide').eq(6).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(5).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==4){
			$('.slide').eq(5).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(4).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==3){
			$('.slide').eq(4).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(3).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==2){
			$('.slide').eq(3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(2).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(1).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==1){
			$('.slide').eq(2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(1).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(0).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
		if(z==0){
			$('.slide').eq(1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100* 1)+'%'},500);
		    $('.slide').eq(0).stop().animate({left:(100*-1)+'%'},0).animate({left:(100* 0)+'%'},500);
            $('.slide').eq(7).stop().animate({left:(100*-2)+'%'},0).animate({left:(100*-1)+'%'},500);
            $('.slide').eq(6).stop().animate({left:(100*-3)+'%'},0).animate({left:(100*-2)+'%'},500);
            $('.slide').eq(5).stop().animate({left:(100*-4)+'%'},0).animate({left:(100*-3)+'%'},500);
            $('.slide').eq(4).stop().animate({left:(100*-5)+'%'},0).animate({left:(100*-4)+'%'},500);
            $('.slide').eq(3).stop().animate({left:(100*-6)+'%'},0).animate({left:(100*-5)+'%'},500);
            $('.slide').eq(2).stop().animate({left:(100*-7)+'%'},0).animate({left:(100*-6)+'%'},500);
		}
	}

/*-----------------------------------------------------------*/
}); // section1.js