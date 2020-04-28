/*약관동의 모달창 */
$(function(){
	$('#move-ico').on('click', function(e){
	        e.preventDefault();
	        $($(this).data('target')).fadeIn(function(){
	            $(this).removeClass('hidden');
	        });
	    });
	
	    $('.modal .close').on('click', function(){
	        $(this).parents('.modal').fadeOut(function(){
	            $(this).parents('.modal').addClass('hidden');
	        });
	    });




	$("#modalAllAgreement").change(function(){
		//this.checked -> true, false
		$("input[type=checkbox]").prop("checked",this.checked);
	});
	

	$("#allAgreement").change(function(){
		//this.checked -> true, false
		$("input[type=checkbox]").prop("checked",this.checked);
	});
	
	
		$("#ajaxButton").click(function(){
			//서버에서 abcde.txt.파일의 내용을 가져오기
			//		전송받을 파일명 
			$("#txtDiv").load("test.txt");
		});
	

		$("#ajaxButton2").click(function(){
			//서버에서 abcde.txt.파일의 내용을 가져오기
			//		전송받을 파일명 
			$("#txtDiv2").load("test2.txt");
		});
		
		$("#ajaxButton3").click(function(){
			//서버에서 abcde.txt.파일의 내용을 가져오기
			//		전송받을 파일명 
			$("#txtDiv3").load("test3.txt");
		});
		
		
		
		$("#pw-success").hide();
		$("#pw-danger").hide();
		$("input").keyup(function(){
			
			var pwd1=$("#passwordText").val();
			var pwd2=$("#passwordTextCheck").val();
			if(pwd1 !="" || pwd2 !=""){
				
				//패스워드 텍스트창 확인창에서 값을 가져와서 패스워드 창이 공백일때 if문으로 들어와서 
				//다음 if문에서 패스워드창과 패스워드체크창을 비교하여 맞을경우 일치 틀릴경우 불일치 보여준다 
				if(pwd1 == pwd2){
				$("#pw-success").show();
				$("#pw-danger").hide();
				$("input[type=submit]").removeAttr("disabled");
				
				
				}else{
				$("#pw-success").hide();
				$("#pw-danger").show();
				$("input[type=submit]").attr("disabled","disabled");
			}	
			}
		});

		
/*
		$("#pw-success").hide();
		$("#pw-danger").hide();
		$("input").keyup(function(){
			
			var pwd1=$("#modalPwChk").val();
			var pwd2=$("#modalPwChk2").val();
			if(pwd1 !="" || pwd2 !=""){
				//패스워드 텍스트창 확인창에서 값을 가져와서 패스워드 창이 공백일때 if문으로 들어와서 
				//다음 if문에서 패스워드창과 패스워드체크창을 비교하여 맞을경우 일치 틀릴경우 불일치 보여준다 
				if(pwd1 == pwd2){
				$("#pw-success").show();
				$("#pw-danger").hide();
				$("input[type=submit]").removeAttr("disabled");
				
				
				}else{
				$("#pw-success").hide();
				$("#pw-danger").show();
				$("input[type=submit]").attr("disabled","disabled");
			}	
			}
		});*/
	
		
});



function regExpChk() {
	//이름검사 : 한글이여야한다. 2~7글자 까지 
	reg = /^[가-힣]{2,7}$/;
	if (!reg.test(document.getElementById("userNameText").value)) {
		alert("이름을 입력해주세요.");
		return false;
	}
	
	//^ : 처음부터 , $ : 끝까지 
	//아이디 검사 : 첫번째 문자는 영문자 ,영,숫자,_만 허용 , 8~12글자까지 허용 
	reg = /^[a-zA-Z]{1}\w{7,11}$/; //[a-zA-Z0-9_] = \w: 영어 대소문자, 숫자,_

	if (!reg.test(document.getElementById("idText").value)) {
		alert("아이디는 첫번째 문자는 영문자 ,영,숫자,_만 허용 , 8~12글자까지 허용합니다...");
		return false;
	}
	
	//이메일 검사 : goguma@nate.com			dd.co.kr
	//												 ()? : 있어도 되고 없어도 되고
	reg = /^\w{2,20}[@][a-zA-Z]{2,10}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$/;
	
	if(!reg.test(document.getElementById("e-mailText").value)){
		alert("이메일을 잘못입력하셨습니다");
		return false;
	}
	
	reg =  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

	if(!reg.test(document.getElementById("passwordText").value)){
		alert("비밀번호를 잘못입력하셨습니다");
		return false;
	}
	
}



