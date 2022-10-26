$(function() {
  if($('#count').length && $('#sections')) {

		const count = $('#count');
		
		$(window).bind('load resize scroll', function () {
			setTimeout(function() {
				setCount();
			}, 100);
		});

		function setCount () {
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

	}
});