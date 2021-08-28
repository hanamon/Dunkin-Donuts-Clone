$(function(){
	
	var s = [];
	
		function sFn(){
			for(i=0;i<=15;i++){
				s[i]=0;
			}
		}
		s[0]=1;
	
/*---------------------------------------------------------------------------------------------------*/	
	
	setInterval(nFn, 4000);
	
	function nFn(){
		if     (s[0]==1){nextSlide(1);}
		else if(s[1]==1){nextSlide(2);}
		else if(s[2]==1){nextSlide(3);}
		else if(s[3]==1){nextSlide(4);}
		else if(s[4]==1){nextSlide(5);}
		else if(s[5]==1){nextSlide(6);}
		else if(s[6]==1){nextSlide(7);}
		else if(s[7]==1){nextSlide(8);}
		else if(s[8]==1){nextSlide(9);}
		else if(s[9]==1){nextSlide(10);}
		else if(s[10]==1){nextSlide(11);}
		else if(s[11]==1){nextSlide(12);}
		else if(s[12]==1){nextSlide(13);}
		else if(s[13]==1){nextSlide(14);}
		else if(s[14]==1){nextSlide(15);}
		else if(s[15]==1){nextSlide(0);}
	}
	
	function nextSlide(z){
		sFn();
		s[z]=1;
		
		if(z==0){
			$('.sec6-slide').eq(15).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 0).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==1){
			$('.sec6-slide').eq( 0).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 1).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==2){
			$('.sec6-slide').eq( 1).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 2).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==3){
			$('.sec6-slide').eq( 2).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 3).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==4){
			$('.sec6-slide').eq( 3).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 4).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==5){
			$('.sec6-slide').eq( 4).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 5).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==6){
			$('.sec6-slide').eq( 5).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 6).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==7){
			$('.sec6-slide').eq( 6).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 7).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==8){
			$('.sec6-slide').eq( 7).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 8).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==9){
			$('.sec6-slide').eq( 8).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq( 9).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==10){
			$('.sec6-slide').eq( 9).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(10).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==11){
			$('.sec6-slide').eq(10).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(11).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==12){
			$('.sec6-slide').eq(11).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(12).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==13){
			$('.sec6-slide').eq(12).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(13).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(14).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==14){
			$('.sec6-slide').eq(13).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(14).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq(15).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
		else if(z==15){
			$('.sec6-slide').eq(14).stop().animate({left:(100* 0)+'%'},0).animate({left:(100*-1)+'%'},2000);
		    $('.sec6-slide').eq(15).stop().animate({left:(100* 1)+'%'},0).animate({left:(100* 0)+'%'},2000);
            $('.sec6-slide').eq( 0).stop().animate({left:(100* 2)+'%'},0).animate({left:(100* 1)+'%'},2000);
            $('.sec6-slide').eq( 1).stop().animate({left:(100* 3)+'%'},0).animate({left:(100* 2)+'%'},2000);
            $('.sec6-slide').eq( 2).stop().animate({left:(100* 4)+'%'},0).animate({left:(100* 3)+'%'},2000);
            $('.sec6-slide').eq( 3).stop().animate({left:(100* 5)+'%'},0).animate({left:(100* 4)+'%'},2000);
            $('.sec6-slide').eq( 4).stop().animate({left:(100* 6)+'%'},0).animate({left:(100* 5)+'%'},2000);
            $('.sec6-slide').eq( 5).stop().animate({left:(100* 7)+'%'},0).animate({left:(100* 6)+'%'},2000);
            $('.sec6-slide').eq( 6).stop().animate({left:(100* 8)+'%'},0).animate({left:(100* 7)+'%'},2000);
            $('.sec6-slide').eq( 7).stop().animate({left:(100* 9)+'%'},0).animate({left:(100* 8)+'%'},2000);
            $('.sec6-slide').eq( 8).stop().animate({left:(100*10)+'%'},0).animate({left:(100* 9)+'%'},2000);
            $('.sec6-slide').eq( 9).stop().animate({left:(100*11)+'%'},0).animate({left:(100*10)+'%'},2000);
            $('.sec6-slide').eq(10).stop().animate({left:(100*12)+'%'},0).animate({left:(100*11)+'%'},2000);
            $('.sec6-slide').eq(11).stop().animate({left:(100*13)+'%'},0).animate({left:(100*12)+'%'},2000);
            $('.sec6-slide').eq(12).stop().animate({left:(100*14)+'%'},0).animate({left:(100*13)+'%'},2000);
            $('.sec6-slide').eq(13).stop().animate({left:(100*15)+'%'},0).animate({left:(100*14)+'%'},2000);
		}
	}
	
/*---------------------------------------------------------------------------------------------------*/	
});