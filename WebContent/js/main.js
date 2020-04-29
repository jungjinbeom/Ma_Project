/**
 * 
 */

//2020-04-23
//slickslider 
$(function(){  
	$(".single-item").slick({
		infinite: true,  
		speed : 500, 
		arrows: true,
		dots : true, 
		autoplay:false, 
		autoplayspeed:4000, 
		pauseOnHover:true,
		vertical:false,  
		prevArrow:"<button type='button' class='slick-prev_01'><i class='xi-angle-left-min'></i></button>",
		nextArrow:"<button type='button' class='slick-next_01'><i class='xi-angle-right-min'></i></button>", 
		dotsClass:"slick-dots", 
		draggable:true
	});   
  
	$("#carousel_Slick").slick({
		infinite: true,  
		speed : 500, 
		arrows: true,
		slidesToShow: 2,
		slidesToScroll:2, 
		dotsClass:"slick-dots", 
		draggable:true, 
		prevArrow:"<button type='button' class='slick-prev_02'><i class='xi-angle-left-min'></i></button>",
		nextArrow:"<button type='button' class='slick-next_02'><i class='xi-angle-right-min'></i></button>",
		responsive: [
		        {
		          breakpoint: 1024,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1 
		          }
		        },
		        {
		          breakpoint: 600,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1 
		          }
		        }, 
		        { 
		          breakpoint: 480,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1
		          }
		        }
		      ]   
	});
	
	var preCampaign = 4;
	var remainDayArr;
	 
	
	for(i=0; i<=preCampaign; i++){ 
		remainDayArr = $("#date_0" + i).text(); 
		console.log(remainDayArr);  
		 	
		var result = dateDiff(remainDayArr, new Date()); 
		if(result == "0"){
			console.log(result);
			$("#re_0" + i).text("오늘 Open!");  
		}else{
			$("#re_0" + i).text((result) + "일 남음"); 
		}
	}   
	
	$(window).scroll(function(){
		//스크롤 위치 가져오기 
		var scrollPos = $(window).scrollTop();
		  
			console.log(scrollPos);
			if(scrollPos > 1200){  
				$(".youtube_ment_01").stop().animate({
					'opacity':'1', 
					'margin-left':'122px'     
				}, 2000);  
				   
				$("#player").stop().animate({
					'opacity':'1'
				}, 3000);
			}
			if(scrollPos < 1150){  
				$(".youtube_ment_01").stop().animate({
					'opacity':'0', 
					'margin-left':'-604px' 
				}, 1000);    
				$("#player").stop().animate({ 
					'opacity':'0' 
				}, 1000);
			} 
			
			if(scrollPos>660 &&
			   scrollPos<1190){
				$(".page_up_div").css({
					'display':'none'
				});
			}else{
				$(".page_up_div").css({
					'display':"block"
				});
			}
			
			 
			
		});  
	
	
	
	
	
});	

 
function dateDiff(_date_01, _date_02){ 
	//instanceif= 특정 객체가 맞냐 아니냐. 
	var diffDate_01 = _date_01 instanceof Date ? _date_01 : new Date(_date_01);
	//현재 시각.ㅂ
	var diffDate_02 = _date_02 instanceof Date ? _date_02 : new Date(_date_02);
	
	diffDate_01 = new Date(diffDate_01.getFullYear(), diffDate_01.getMonth() +1, diffDate_01.getDate());
	diffDate_02 = new Date(diffDate_02.getFullYear(), diffDate_02.getMonth() +1, diffDate_02.getDate()); 
	
	var diff = Math.abs(diffDate_02.getTime() - diffDate_01.getTime());
	diff = Math.ceil(diff / (1000 * 3600 * 24));
	
	return diff;
	
}
 
