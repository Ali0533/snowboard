var images = [
    'picture/catalog/board1.png',
    'picture/catalog/board2.png',
    'picture/catalog/board3.png',
    'picture/catalog/board4.png',
    'picture/catalog/board5.png'
];

var num = 0;
function next () {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--
    if (num< 0) {
        num = images.length-1;
    }
    slider.src = images[num];
};