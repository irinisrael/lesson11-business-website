(function() {
		var documentEl = $(document),
			backgroundContainer = $('div#background-container');

			documentEl.on("scroll", function() {
				var currScrollPos = documentEl.scrollTop();
				backgroundContainer.css('background-position', '0' + -currScrollPos + 'px');
			});
			//slider
$(function() {
	//Configure
	var width = 520;
	var animationSpeed = 1000;
	var pause = 4000;
	var currentSlide = 1;

	//Cache
	var $slider = $('#image_slider');
	var $slideContainer = $slider.find('.slider_wrapper');
	var $slider_wrapper = $slideContainer.find('.slide');

	setInterval(function(){
		$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {
			currentSlide++
			if(currentSlide === $slider_wrapper.length);
				currentSlide = 1;
				// $slideContainer.css('margin-left' 0);
		});

	}, pause);

})

})();