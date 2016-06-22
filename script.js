function onHover() {
  var panel = document.getElementsByClassName('panel');
  panel.onmouseenter = function() {
    var smile = document.getElementsByClassName('front');
    smile.style = ('transform: rotateZ(180deg);');
  }
}
