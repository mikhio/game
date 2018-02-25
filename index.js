var click = 0;

function increment(e) {
  var x = e.clientX - 250;
  var y = e.clientY - 250;
  var dist = Math.sqrt(y * y + x * x);

  if (dist < 50) {
    click++;
    redraw();
  }

}
var c = document.getElementById('Canvas');
c.addEventListener('click', increment);
var clx = c.getContext('2d');

function redraw() {
  clx.fillStyle = 'red';
  clx.clearRect(0, 0, c.width, c.height);
  clx.font = '20px Verdana';
  clx.fillText('Clicks: ' + click, 190, 20);

  clx.beginPath();
  clx.arc(c.width / 2, c.height / 2, 50, 0, 2 * 3.14);
  clx.fill();
}
redraw();