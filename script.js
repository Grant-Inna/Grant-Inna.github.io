//������� ��� ������ � ����� ���� � ������ ��� ���������.
//��� ����������� ��� ��� ����� div

function showBack() {
    document.body.onmouseover = document.body.onmouseout = handler;

    function handler(event) {
        var ev = (event||window.event); //��� IE ��������� "window.event"
        var elem = ev.target.className;
        if (elem == "flip") {
            if (ev.type == 'mouseover') {
                ev.target.style.background = 'lightgreen'
            }
            if (ev.type == 'mouseout') {
                ev.target.style.background = 'white'
            }
        }
    }
}
