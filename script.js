//Функция для отлова и увода мыши с нужных нам элементов.
//Для наглядности это три блока div


function showBack() {
    document.body.onmouseover = document.body.onmouseout = handler;

    function handler(event) {
        var ev = (event||window.event); //Для совместимости с IE добавляем "window.event"
        var elem = ev.target.className;
        if (elem == "image") {
            if (ev.type == 'mouseover') {
                ev.target.nextElementSibling.classList.add('visible');
                ev.target.style.display = 'none';
            }
            if (ev.type == 'mouseout') {
                ev.target.nextElementSibling.classList.remove('visible');
                ev.target.style.display = 'block';
            }
        }
    }
}

