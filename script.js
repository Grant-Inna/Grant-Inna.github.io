//При наведении мыши появляется скрытый блок информации
//Через 0.5s переворачивается обратно

function onHover() {
  //Выбираем передние блоки и навешиваем на них событие "onmouseenter"
  var side = document.querySelectorAll('.side');
  for (var i = 0; i < side.length; i++) {
    side[i].onmouseenter = function() {
      this.style = ('transform: rotateY(180deg); z-index: 0');
      console.log(this);
      this.parentNode.children[1].style = ('transform: rotateY(0deg); z-index: 1');
      var self = this.parentNode.children[1];
      self.onmouseleave = function() {
        self.style = ('z-index: 0;	transform: rotateY(-180deg)');
        self.parentNode.children[0].style = ('z-index: 1; transform: rotateY(0deg)');
      }

/*      //Вместо события "onmouseleave", повесим событие "onmouseenter"
      // на родительский элемент
      .parentNode.children[1];
      self.parentNode.onmouseenter = function () {
        //Передняя панель будет возвращаться с некоторой задержкой,
        // дабы приблизить эффект к желаемому
        setTimeout(function () {
          self.parentNode.children[1].style.display = 'none';
          self.parentNode.children[0].style.display = 'block';
        }, 500)
      };*/
    }
  }
}



