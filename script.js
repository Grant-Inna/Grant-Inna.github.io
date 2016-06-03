//Функция специально для IE 10-11
//При наведении мыши появляется скрытый блок информации
//Через 0.5s переворачивается обратно

function onHover() {
    if (1 - '\0') {
        var panel = document.querySelectorAll('.panel .side');
        for (var i = 0; i < panel.length; i++) {
            panel[i].onmouseenter = function () {
                this.style.display = 'none';
                this.parentNode.children[1].style.display = 'block';

                var self = this.parentNode.children[1];
                self.parentNode.onmouseenter = function () {
                    setTimeout(function () {
                        self.style.display = 'none';
                        self.parentNode.children[0].style.display = 'block';
                    }, 500)
                };
            }
        }
    }
}



