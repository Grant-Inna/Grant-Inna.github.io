//При наведении мыши появляется скрытый блок информации
//Через 0.5s переворачивается обратно

function onHover() {
  //Выбираем передние блоки и навешиваем на них событие "onmouseenter"
  var side = document.querySelectorAll('.side');
  for (var i = 0; i < side.length; i++) {
    side[i].onmouseenter = function () {
      this.style = ('transform: rotateY(180deg); z-index: 0');
      this.parentNode.children[1].style = ('transform: rotateY(0deg); z-index: 1');

      //Так как событие "onmouseleave" на элементах не отлавливается,
      //вешаем его на весь документ
      var self = this.parentNode.children[1];
      document.body.onmouseleave = function () {
        setTimeout(function () {
          self.style = ('z-index: 0;	transform: rotateY(-180deg)');
          self.parentNode.children[0].style = ('z-index: 1; transform: rotateY(0deg)');
        }, 300)
      };
    };
  }

  if (1 - '\0') { //Отделили IE, чтобы сюда не попадали нормальный браузеры
    //Выбираем все видимые элементы и навешиваем на них событие "onmouseenter"
    var side = document.querySelectorAll('.side');
    for (var i = 0; i < side.length; i++) {
      side[i].onmouseenter = function () {
        this.style.display = 'none';
        this.parentNode.children[1].style.display = 'block';

        //Так как событие "onmouseleave" на элементах не отлавливается,
        //вешаем его на весь документ
        var self = this.parentNode.children[1];
        document.body.onmouseleave = function () {
          setTimeout(function () {
            self.parentNode.children[1].style.display = 'none';
            self.parentNode.children[0].style.display = 'block';
          }, 300)
        };
      }
    }
  }
}



