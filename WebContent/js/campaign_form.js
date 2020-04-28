	

$(function(){
	var now = new Date();
	var nowYear = now.getFullYear();

	//datepicker 세팅
	$('#start_date').datepicker({
		dateFormat: 'yy-mm-dd',
		minDate: now,
	});
	$('#end_date').datepicker({
		dateFormat: 'yy-mm-dd',
		minDate: '+1D',
	});

	for(i=0; i<5; i++){
		$('.del_year').append('<option>'+ nowYear++ +'</option>');
	}


	//숫자포맷 세팅
	$('.min_money, .max_money, .goal').number(true, 0);


	$(document).on('click', '.add-reward-row', function(e){
		e.preventDefault();
		var fieldset = '<div id="reward-fieldset-1"data-number="1"class="reward-fieldset bg-gray-lightest px-4 mb-4"><div class="mb-4 py-4 border-b border-gray"><h3 id="reward-title-1"class="reward-title">리워드<span class="reward-number">1</span></h3></div><div class="mb-4"><label for="reward_name"class="inline-block my-4">리워드명</label><input type="text"name="reward[reward_name_1]"id="reward_name_1"data-name="reward_name"class="appearance-none border border-gray rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="mb-4"><label for="reward_desc"class="inline-block my-4">리워드설명</label><textarea name="reward[reward_desc_1]"id="reward_desc_1"data-name="reward_desc"placeholder="리워드에 대한 간략한 설명"class="appearance-none border border-gray rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-24"></textarea></div><div class="mb-4 flex"><div class="w-1/3 pr-8"><label for="reward_limit"class="inline-block my-4">리워드수량</label><input type="number"name="reward[reward_limit_1]"data-name="reward_limit"min="0"id="reward_limit_1"class="number-only appearance-none border border-gray rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div><div class="w-1/3 pr-8"><label for="del_fee"class="inline-block my-4">배송비</label><div class="relative"><input type="text"name="reward[del_fee_1]"id="del_fee_1"data-name="del_fee"class="appearance-none border border-gray rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"><div class="absolute inset-y-0 right-0 py-2 px-3 text-gray-darkest">원</div></div></div></div><div class="mb-4"><label for="del_date"class="inline-block my-4 w-full">배송일정</label><div class="flex"><div class="w-1/3 flex"><div class="inline-block relative w-1/2 mr-2"><!--select--><select name="reward[del_year_1]"id="del_year_1"data-name="del_year"class="del_year block appearance-none w-full bg-white border border-gray hover:border-gray-dark px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"><option>년</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"><i class="xi-angle-down-min"></i></div><!--select--></div><div class="inline-block relative w-1/2 mr-2"><!--select--><select name="reward[del_month_1]"id="del_month_1"data-name="del_month"class="block appearance-none w-full bg-white border border-gray hover:border-gray-dark px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"><option>월</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select><div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"><i class="xi-angle-down-min"></i></div><!--select--></div></div><div class="w-2/3"><input type="text"name="reward[del_date_detail_1]"id="del_date_detail_1"data-name="del_date_detail"placeholder="상세일정 ex) 21~말일 배송 예정입니다."class="datepicker-ym appearance-none border border-gray rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"></div></div></div><div class="reward-ctrl-btn py-4 flex justify-end"><button data-number="1"class="add-reward-row bg-brand hover:bg-brand-dark text-white text-sm py-1 px-2 ml-2 rounded">리워드추가<i class="xi-plus"></i></button><button data-number="1" class="remove-reward-row bg-gray hover:bg-gray-dark text-white text-sm py-1 px-2 ml-2 rounded">리워드 삭제 <i class="xi-minus"></i></button></div></div><!--reward-fieldset-->';

		var num = $(this).data('number');
		$('#reward-fieldset-'+num).after(fieldset);
		setFieldsetNumber();
	});

	$(document).on('click', '.remove-reward-row', function(e){
		e.preventDefault();

		var num = $(this).data('number');
		$('#reward-fieldset-'+num).remove();

		setFieldsetNumber();
	});

	$(document).on('click', '.reward-ctrl-btn button', function(){
		var fieldsetLength = $('.reward-fieldset').length;

		if(fieldsetLength <= 1){
			console.log($('.remove-reward-row'));
			var removeBtn = $('.remove-reward-row').detach();
		}
		else{
			$('#reward-fieldset-1 .reward-ctrl-btn').append(removeBtn);
		}
	});

	function setFieldsetNumber(){
		var idx = 1;

		$('.reward-fieldset').each(function(){
			var fieldset = $(this);
			var removeBtn = '<button data-number="'+idx+'" class="remove-reward-row bg-gray hover:bg-gray-dark text-white text-sm py-1 px-2 ml-2 rounded">리워드 삭제 <i class="xi-minus"></i></button>';

			fieldset.attr('id', 'reward-fieldset-'+idx);
			fieldset.attr('data-number', idx);
			
			fieldset.find('.reward-title').attr('id', 'reward-title' + idx);
			fieldset.find('.reward-number').text(idx);

			fieldset.find('.remove-reward-row').remove();
			fieldset.find('.reward-ctrl-btn').append(removeBtn);
			
			fieldset.find('button').attr('data-number', idx);

			fieldset.find('input, textarea, select').each(function(){
				$(this).attr('name', 'reward['+ $(this).data('name')+ "_" + idx +']');
				$(this).attr('id', $(this).data('name')+ "_" + idx)
			});

			idx++;
		});
	}

	CKEDITOR.replace('campaign_story');
});