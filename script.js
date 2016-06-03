function onClick() {
    var panel = document.querySelectorAll('.panel .side');
    for (var i = 0; i < panel.length; i++) {
        panel[i].onmouseover = function () {
            this.style.display = 'none';
            this.parentNode.children[1].style.display = 'block';

            this.parentNode.children[1].onmouseout = function () {
                this.style.display = 'none';
                this.parentNode.children[0].style.display = 'block';
            };
        }
    }
}

