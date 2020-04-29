	

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

	$('.reward-fieldset').each(function(){
		console.log($(this).index());
	});

	//숫자포맷 세팅
	$('.min_money, .max_money, .goal').number(true, 0);

	$('.add-reward-row').on('click', function(e){
		e.preventDefault();

		var num = $(this).data('number');
		var fieldset = $('#reward-fieldset-'+num).clone(true);
		fieldset.find('input, select, textarea').val('');
		$('#reward-fieldset-'+ num).after(fieldset);

		setFieldsetNumber();
	});

	$(document).on('click', '.remove-reward-row', function(e){

		e.preventDefault();

		var num = $(this).data('number');
		$('#reward-fieldset-'+num).remove();
		setFieldsetNumber();
		
	});

	function setFieldsetNumber(){
		var idx = 1;
		var fieldsetLength = $('.reward-fieldset').length;
		console.log(fieldsetLength);
		if(fieldsetLength == 1){
			console.log($('.remove-reward-row'));
			$('.remove-reward-row').remove();
		}

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