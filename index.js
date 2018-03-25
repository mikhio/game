var pjs = new PointJS(810, 505, {backgroundColor: 'black'})
var game = pjs.game;
var mouse = pjs.mouseControl;
mouse.initControl();
var point = pjs.vector.point;
var key = pjs.keyControl;
key.initKeyControl();
var speed = 5;
var dx = speed;
var dy = speed;
var showSc = true;
var work = true;


var scorpio = game.newRectObject(   { 
	x : 100, 
	y : 100, 
	w : 50, 
	h : 50, 
	fillColor : "orange", 
});
var sabzro = game.newRectObject(   { 
	x : 300, 
	y : 100, 
	w : 50, 
	h : 50, 
	fillColor : "blue", 
});






game.newLoop('myGame', function () {
	if (work) {
		if (key.isDown("A") || key.isDown("LEFT")) {
			scorpio.move(point(-speed, 0));
		}	
		if (key.isDown("D") || key.isDown("RIGHT")) {
			scorpio.move(point(speed, 0));
		}
		if (key.isDown("S") || key.isDown("DOWN")) {
			scorpio.move(point(0, speed));
		}
		if (key.isDown("W") || key.isDown("UP")) {
			scorpio.move(point(0, -speed));
		}	
	}

	if (sabzro.getDistance(scorpio.getPosition()) > 15){ 
		sabzro.moveToC(scorpio.getPosition(), 2);
		sabzro.rotate(scorpio.getPosition());
	}

	if (sabzro.isStaticIntersect(scorpio.getStaticBoxW(0, -speed, 0, speed))){
		showSc = false;
		work = false;
	}




 


	sabzro.draw();
	if (showSc) {
		scorpio.draw();
	}
}) 
game.setLoop('myGame');
game.start();