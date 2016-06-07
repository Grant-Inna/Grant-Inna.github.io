//Функция специально для IE 10-11
//При наведении мыши появляется скрытый блок информации
//Через 0.5s переворачивается обратно

function onHover() {
    if (1 - '\0') { //Отделили IE, чтобы сюда не попадали нормальный браузеры
        //Выбираем все видимые элементы и навешиваем на них событие "onmouseenter"
        var side = document.querySelectorAll('.side');
        for (var i = 0; i < side.length; i++) {
            side[i].onmouseenter = function () {
                this.style.display = 'none';
                this.parentNode.children[1].style.display = 'block';

                //Вместо события "onmouseleave", повесим событие "onmouseenter"
                // на родительский элемент
                var self = this.parentNode.children[1];
                self.parentNode.onmouseenter = function () {
                    //Передняя панель будет возвращаться с некоторой задержкой,
                    // дабы приблизить эффект к желаемому
                    setTimeout(function () {
                        self.parentNode.children[1].style.display = 'none';
                        self.parentNode.children[0].style.display = 'block';
                    }, 500)
                };
            }
        }
    }
}



