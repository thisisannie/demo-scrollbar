$(function() {
  if($('#count').length && $('#sections')) {

		const count = $('#count');
		
		let currentStep = 0;
		let countTop = count.offset().top;
		$('#sections section').each(function (index) {
			if(countTop >= $(this).offset().top) {
				currentStep = index + 1;
			} else {
				return false; // break
			}
		});	
		count.text(currentStep);

	}
});