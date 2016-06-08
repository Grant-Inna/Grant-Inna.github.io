//При наведении мыши появляется скрытый блок информации
//Через 0.5s переворачивается обратно

function onHover() {
  //Выбираем передние блоки и навешиваем на них событие "onmouseenter"
  var side = document.querySelectorAll('.side');
  for (var i = 0; i < side.length; i++) {
    side[i].onmouseenter = function() {
      this.style = ('transform: rotateY(180deg); z-index: 0');
      //console.log('Появился: ' + this.className);
      this.parentNode.children[1].style = ('transform: rotateY(0deg); z-index: 1');
      //console.log('Исчез: ' + this.parentNode.children[1].className);
      var self = this.parentNode.children[1];


      self.onmouseleave = function() {
        setTimeout(function () {

          console.log('Исчез: ' + self.className);

          self.style = ('z-index: 0;	transform: rotateY(-180deg)');
          self.parentNode.children[0].style = ('z-index: 1; transform: rotateY(0deg)');
          //console.log('Появился: ' + self.parentNode.children[0].className);


          /* self.parentNode.children[1].style = ('z-index: 0;	transform: rotateY(-180deg)');
           self.parentNode.children[0].style = ('z-index: 1; transform: rotateY(0deg)');*/
        }, 300)
      };

      };

      //Повесим дополнительно событие "onmouseenter"
      // на родительский элемент
 /*     self.parentNode.onmouseenter = function () {*/
        //Передняя панель будет возвращаться с некоторой задержкой

    }

}



