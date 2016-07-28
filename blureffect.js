(function () {
	//Выбираем нужные для затемнения элементы, определяем переменные
  var lastScrollY = 0,
   promoPhoto = document.getElementById('promoPhoto'),
    underLayer = document.getElementById('underLayer'),
    windowHeight = window.innerHeight,
	opacitySpeedDivider = 5,
    isScroll = false;
	
	//requestAnimationFrame для всех браузеров
  var requestAnimationFrame = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || 
	window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;
  

    //addEventListener — "отлавливаем" scroll 
  var init = function () {
    window.addEventListener('scroll', function () {
      lastScrollY = window.pageYOffset;
      checkScroll();
    }, false);
  }
  
    //Если скроллим, помечаем соответственно переменную isScroll
	//ИДЕНТИЧНА
  var checkScroll = function () {
    if (!isScroll) {
      window.requestAnimationFrame(updatePosition);
    }
    isScroll = true;
  }

	//Здесь твориться "магия" — величину скролла преобразуем в величины, пригодные для записи в свойства opacity
  var updatePosition = function () {
    isScroll = false;
    var scrollValue = lastScrollY / windowHeight;
      /* elemScrollValue = (scrollValue / opacitySpeedDivider) + 1; */
	  
	  
	if(lastScrollY < 100) {
		scaleValue = 100 - lastScrollY;
		console.log('lastScrollY равен: ' + lastScrollY);
		promoPhoto.style.transform = 'translate3d( 0px, 0px, ' + scaleValue + 'px)';
		underLayer.style.transform = 'translate3d( 0px, 0px, ' + scaleValue + 'px)';
	} /* else { */	
    underLayer.style.opacity = scrollValue;
      if (underLayer.style.opacity >= 1) {
        underLayer.style.opacity = 1;
      }
	
	
	(function() {
	
	//Выбираем нужные для параллакса элементы, определяем переменные
  var lastScrollY = 0, 
      isScroll = false,
      promoPhoto = document.getElementById('promoPhoto'),	  
      underLayer = document.getElementById('underLayer'),
      speedDivider = 1.1;
	  

  //Обновляем позицию фона
  var updatePosition = function() {
    var translateValue = lastScrollY / speedDivider; //Чем выше speedDivider тем незамтнее эффект параллакса

    //Если скролл отрицательный, пока не будем ничего делать (потом нужен будет ZOOMING)
    if (translateValue < 0)
      translateValue = 0;

    translateY(promoPhoto, translateValue, scaleValue);
	translateY(underLayer, translateValue, scaleValue);

    //Помечаем, что движение прекратилось
    isScroll = false;
  };

  //Перемещаем элемент по оси Y, используя translate3d
  //Сразу зашиваем кроссбраузерность
  var translateY = function(elm, value, scaleValue) { 
    var translate = 'translate3d(0px,' + value + 'px, ' + scaleValue + 'px)';
	console.log('value равен: ' + value);
    elm.style['-webkit-transform'] = translate;
    elm.style['-moz-transform'] = translate;
    elm.style['-ms-transform'] = translate;
    elm.style['-o-transform'] = translate;
    elm.style.transform = translate;
  };

	//Проверяем, двигатеся ли бегунок
	//ИДЕНТИЧНА
  var checkScroll = function() { 
    if (!isScroll) {
      window.requestAnimationFrame(updatePosition);
      isScroll = true;
    }
  };

  //Обновляем значения скролла и запрашиваем checkScroll
  var doScroll = function() { 
    lastScrollY = window.pageYOffset; //window.pageYOffset не что иное, как размер скролла. Если вычесть какое-то число, надпись начнёт двигаться не сразу. Можно ИСПОЛЬЗОВАТЬ С ЗУМОМ!
    checkScroll();
  };

  //Проверяем, загрузилась ли страница
  (function() { 
    var loaded = 0;
    var bootstrap = function() {
      if (loaded) return;
      loaded = 1;

      rafPolyfill();
      window.onscroll = doScroll;
    };

    if ( document.readyState === 'complete' ) {   
      setTimeout( bootstrap );
    } else {
      document.addEventListener( 'DOMContentLoaded', bootstrap, false );
      window.addEventListener( 'load', bootstrap, false );
    }
  })();

  //Функция для IE!
  var rafPolyfill = function() { 
    var lastTime, vendors, x;
    lastTime = 0;
    vendors = ["webkit", "moz"];
    x = 0;
    while (x < vendors.length && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
      ++x;
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime, id, timeToCall;
        currTime = new Date().getTime();
        timeToCall = Math.max(0, 16 - (currTime - lastTime));
        id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
  };

}).call(this);
	
	/* } */
  }

  init();
})();
