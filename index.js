var circle = document.getElementById('circle');
var delta = 0
setInterval(() => {
  circle.style.right = delta + 'px';
  circle.style.top = delta + 'px';
  delta += 1;
}, 10);