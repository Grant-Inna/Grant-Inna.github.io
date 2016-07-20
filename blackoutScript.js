(function() {
		var promoPhoto = document.getElementById('promoPhoto'),
			blur = document.getElementById('overlay'),
			windowHeight = window.innerHeight,
			isScroll = false;

		var latestScroll = 0;
		var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  		window.requestAnimationFrame = requestAnimationFrame;

  		var init = function() {
  			window.addEventListener('scroll', function(){
				latestScroll = window.scrollY;
				checkScroll();
			}, false);
  		}

		var checkScroll = function() {
			if(!isScroll) {
				window.requestAnimationFrame(update);
			}
			isScroll = true;
		}

		var update = function() {
			var currentScroll = latestScroll;
			isScroll = false;
			var scrollValue = currentScroll / windowHeight,
				  elemScrollValue = (scrollValue / 5) + 1;

			promoPhoto.style.transform = 'scale(' + elemScrollValue + ')';
			blur.style.opacity = scrollValue;
			if(blur.style.opacity >= 1) {
				blur.style.opacity = 1;
			}
		}

		init();
	})();