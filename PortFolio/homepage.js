

$(function(){
	
	//샌드위치 버튼 클릭시 메뉴 표시
	//함수 실행
	var pull = ('#pull');	// 변수 pull 선언 후 #pull 요소 저장 
	menu = $('#menu');	// 변수 menu 선언 후 #menu 요소 저장
	menuHeight = menu.height();	//변수 menuHeight 선언 후 menu의 높이 저장
	w = $(window).width();	//인터넷 윈도우 너비를 w에 저장
	
	$(pull).on('click', function(e){  //pull을 클릭 시 함수 발생
		//기본 이벤트 제거
		e.preventDefault();
		
		//슬라이드효과를 통해 보이거나 안보이게 처리하는 함수
		menu.slideToggle();
	});
	
	if(w>320 && w<800){	//w가 320보다 크고 800보다 작으면
		$('#port').on('click', function(e){	//#port를 클릭시 이벤트 발생
			
			if($('#sub_port').is(':hidden')){		// 아이디 sub_port가 안보이고 있을 때
				e.preventDefault();
				
				$('#sub_port').slideDown();			// slideDown이벤트 실행
				$('#menu li:nth-child(3)').css('margin-top', '43px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소 
				$('#menu li:nth-child(4)').css('margin-top', '43px');	//margin-top에 43px주기
					
			}
			else if($('#sub_port').is(':visible')){	// 아이디 sub_port가 보이고 있을 때
				e.preventDefault();
				
				$('#sub_port').slideUp();			// slideUp이벤트 실행
				$('#menu li:nth-child(3)').css('margin-top', '0px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소
				$('#menu li:nth-child(4)').css('margin-top', '0px');	//margin-top에 0px주기
			}
		
		});
	}
	if(w>800){
		$('#port').on('click', function(e){
			
			$('#sub_port').slideToggle();
			$('#menu li:nth-child(3)').css('margin-top', '0px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소
			$('#menu li:nth-child(4)').css('margin-top', '0px');	//margin-top에 0px주기
			
		});
		
	}

	
});

//사이즈 변경시 
	$(window).resize(function(){	//윈도우의 크기가 변할 때 함수 발생
		var w = $(window).width();	//변수 w 선언 후 인터넷 윈도우의 너비를 저장 
		if(w > 320 && menu.is(':hidden')){	// 인터넷 윈도우의 너비가 320보다 크고 menu가 안보이면 
			menu.removeAttr('style'); 	//menu의 style 속성을 제거한다 
		}
		
		
		if(w>320 && w<800){	//w가 320보다 크고 800보다 작으면
			
			 if($('#sub_port').is(':visible')){						//아이디 sub_port가 보이고 있을 때
				 $('#menu li:nth-child(3)').css('margin-top','43px');	//아이디 menu안에 li태그 중 3,4번째 요소를 
				 $('#menu li:nth-child(4)').css('margin-top','43px');	//margin-top에 43px를 적용
			 } 
			 
			 else if($('#sub_port').is(':hidden')){					//아이디 sub_port가 안보일 때
				 $('#menu li:nth-child(3)').css('margin-top','0px');	//아이디 menu안에 li태그 중 3,4번째 요소를
				 $('#menu li:nth-child(4)').css('margin-top','0px');	//margin-top에 0px를 적용
			 }
						
		}
		
		if(w>800){		//윈도우 너비가 800보다 크면
			if($('#sub_port').is(':visible')){							// 아이디 sub_port가 보이고 있을 때
				 $('#menu li:nth-child(3)').css('margin-top','0px');	//아이디 menu안에 li태그 중 3,4번째 요소를
				 $('#menu li:nth-child(4)').css('margin-top','0px');	//margin-top에 0px를 적용
			 }
			 else if($('#sub_port').is(':hidden')){					//아이디 sub_port가 안보일 때
				 $('#menu li:nth-child(3)').css('margin-top','0px');	//아이디 menu안에 li태그 중 3,4번째 요소를
				 $('#menu li:nth-child(4)').css('margin-top','0px');	//margin-top에 0px를 적용
			 }
			
		}
		
		if(this.resizeTO){					//사이즈가 변경 되었을 때
			clearTimeout(this.resizeTO);	//함수가 실행되지 않도록 한다
		}
		this.resizeTO = setTimeout(function() { 	//this.resizeTO에 'resizeEnd'를 실행을 하도록 설정
			$(this).trigger('resizeEnd');
		}, 0);
		
	});
	
	$(window).on('resizeEnd', function(){		//resizeEnd함수 호출
		var w = $(window).width();				//변수 w에 윈도우 너비를 저장한다.
		
		if(w>320 && w<800){	//w가 320보다 크고 800보다 작으면
			$('#port').on('click', function(e){	//#port를 클릭시 이벤트 발생
			
					if($('#sub_port').is(':hidden')){		//아이디 sub_port가 안보이고 있을 때
						
						$('#menu li:nth-child(3)').css('margin-top', '0px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소 
						$('#menu li:nth-child(4)').css('margin-top', '0px');	//margin-top에 0px적용
							
					}
					else if($('#sub_port').is(':visible')){	// 아이디 sub_port가 보이고 있을 때
						
						$('#menu li:nth-child(3)').css('margin-top', '43px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소
						$('#menu li:nth-child(4)').css('margin-top', '43px');	//margin-top에 43px적용	
										
					}
			});
	 	 }
		if(w>800){	//윈도우의 너비가 800보다 클 때
			$('#port').on('click', function(e){	// 아이디 port를 클릭할 떄 함수 발생
				e.preventDefault();			//기본 이벤트 제거
				
				$('#menu li:nth-child(3)').css('margin-top', '0px');	//아이디 menu안에 li태그 중 3번째, 4번째 요소
				$('#menu li:nth-child(4)').css('margin-top', '0px');	//margin-top에 0px적용
				
			});
			
		}
		
	});