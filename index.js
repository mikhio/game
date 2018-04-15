var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');




/*//ctx.fillRect(x, y, width, height);
ctx.clearRect(0,0, 400, 200);
ctx.strokeStyle = 'blue';
ctx.lineWidth = '10';
ctx.rect(50, 10, 100, 100);
ctx.stroke();
ctx.fill();*/
var x = 10;
var y = 10;

function draw(){
    ctx.clearRect(0,0, 400, 400);
    ctx.fillStyle = "green";
    ctx.fillRect(x,y,15,15);
    x++;
    window.requestAnimationFrame(draw);
}
draw();
