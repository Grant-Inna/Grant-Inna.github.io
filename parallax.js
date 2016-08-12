(function() {
  // Выбираем нужные для эффекта элементы, определяем переменные
  var lastScrollY = 0, // Изначально скролл равен 0
    isScroll = false, // Наличие скролла помечаем как false
    promoPhoto = document.getElementById('promoPhoto'),
    underLayer = document.getElementById('underLayer'),
    cssScale = 1.05,
    opacityDelay = 0.2, // Задержка непрозрачности
  // Драйвера для преобразование размера скролла
  // в приемлимую величину
    opacityDriver = 270,
    speedDivider = 2,
    scaleDriver = 1000;

  // Обновляем положение элементов
  var updatePosition = function() {
    var translateValue = lastScrollY / speedDivider; // Основная переменная

    // Параллакс при отрицательном скролле нам не нужен
    if (translateValue < 0) {
      translateValue = 0;
    }

    translateY(promoPhoto, translateValue);

    // Обработали движение и прерываем работу, помечая переменную как false
    isScroll = false;
  };

  // Функция, включающая в себя обновление масштаба, отдаление по оси Y, а так же меру прозрачности
  var translateY = function(elm, value) {
    var scaleV = cssScale - (value / scaleDriver);
    if (scaleV > 1) {
      var scaleTranslate = 'scale(' + scaleV + ') translateY(0px)';
      elm.style['-webkit-transform'] = scaleTranslate;
      elm.style['-moz-transform'] = scaleTranslate;
      elm.style['-ms-transform'] = scaleTranslate;
      elm.style['-o-transform'] = scaleTranslate;
      elm.style.transform = scaleTranslate;
    } else if (scaleV < 1) {
      scaleV = 1;
    }
    var translate = 'scale(' + scaleV + ') translateY(' + value + 'px)';
    elm.style['-webkit-transform'] = translate;
    elm.style['-moz-transform'] = translate;
    elm.style['-ms-transform'] = translate;
    elm.style['-o-transform'] = translate;
    elm.style.transform = translate;

    var opacityV = (value / opacityDriver) - opacityDelay;
    underLayer.style.opacity = opacityV;
    if (underLayer.style.opacity >= 1) {
      underLayer.style.opacity = 1;
    }
  };

  // Убеждаемся, то событие произошло, если так, то обрабатываем движение
  var requestTick = function() {
    if (!isScroll) {
      window.requestAnimationFrame(updatePosition);
      isScroll = true;
    }
  };

  // Обновляем переменную прокрутки, вызываем функцию
  // для подтверждения движения
  var doScroll = function() {
    lastScrollY = window.pageYOffset; //window.pageYOffset не что иное, как размер скролла
    requestTick();
  };

  // Активация при загрузке элементов страницы
  (function() {
    var loaded = 0;
    var bootstrap = function() {
      if (loaded) return;
      loaded = 1;

      rafPolyfill();
      window.onscroll = doScroll;
    };
    // Убеждаемся, что страница загрузилась
    if ( document.readyState === 'complete' ) {
      setTimeout( bootstrap );
    } else {
      document.addEventListener( 'DOMContentLoaded', bootstrap, false );
      window.addEventListener( 'load', bootstrap, false );
    }
  })();

  // RequestAnimationFrame для старых (читай дурацких) браузеров
  var rafPolyfill = function() { //Для IE!
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
      window.requestAnimationFrame = function(callback) {
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