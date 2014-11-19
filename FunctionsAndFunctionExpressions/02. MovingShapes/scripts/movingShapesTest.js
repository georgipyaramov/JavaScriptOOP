var addCircleBtn = document.getElementById('addCircle');
addCircleBtn.addEventListener('click', function () {
    movingShapes.add('ellipse');
}, false);
var addRectBtn = document.getElementById('addRect');
addRectBtn.addEventListener('click', function () {
    movingShapes.add('rect');
}, false);
var moveBtn = document.getElementById('moveBtn');
moveBtn.addEventListener('click', function () {
    movingShapes.move();
}, false);