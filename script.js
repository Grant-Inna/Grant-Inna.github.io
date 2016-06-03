function onClick() {
    var panel = document.querySelectorAll('.panel .side');
    for (var i = 0; i < panel.length; i++) {
        panel[i].onmouseenter = function () {
            this.style.display = 'none';
            this.parentNode.children[1].style.display = 'block';

            var self = this.parentNode.children[1];
            self.parentNode.onmouseenter = function () {
                setTimeout(function() {
                    self.style.display = 'none';
                    self.parentNode.children[0].style.display = 'block';
                }, 1000)
            };
        }
    }
}

