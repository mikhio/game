var click = 0;

function increment() {
  click++;
  redraw();
}
var c = document.getElementById("Canvas");
var clx = c.getContext('2d');

function redraw() {
  clx.clearRect(0,0,c.width,c.height);
  clx.font="20px Verdana";
  clx.fillText("Clicks: " + click,190,20)
}
redraw();