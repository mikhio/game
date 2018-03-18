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
var go = false;
var showEnemy = true;
var s = "";
var m = "";
var miss = 0;

var tank = game.newRectObject(   { 
	x : 100, 
	y : 100, 
	w : 50, 
	h : 50, 
	fillColor : "green", 
});

var pos = tank.getPositionC();

var bullet = game.newCircleObject(   { 
	x : pos.x, 
	y : pos.y, 
	radius : 5, 
	fillColor : "red", 
});
var enemy = game.newRectObject(   { 
	x : 280, 
	y : 100, 
	w : 50, 
	h : 50, 
	fillColor : "blue", 
});
var wallD = game.newRectObject({ 
	x : 800, 
	y : 5, 
	w : 1, 
	h : 490, 
	fillColor : "black" 
});
var wallA = game.newRectObject({ 
	x : 10, 
	y : 5, 
	w : 1, 
	h : 490, 
	fillColor : "black" 
});
var wallW = game.newRectObject({ 
	x : 10, 
	y : 5, 
	w : 790, 
	h : 1, 
	fillColor : "black" 
});






game.newLoop('myGame', function () {
	if(key.isDown('D') || key.isDown('RIGHT')) {
 		tank.move(point(speed, 0) );
 	}
 	if(key.isDown('A') || key.isDown('LEFT')) {
 		tank.move(point(-speed, 0) );
 	}
 	if(key.isDown('S') || key.isDown('DOWN')) {
 		tank.move(point(0, speed) );
 	}
 	if(key.isDown('W') || key.isDown('UP')) {
 		tank.move(point(0, -speed) );
 	}
 	if(key.isDown('SPACE')) {
 		go = true;
 	}




	if (wallA.isStaticIntersect( enemy.getStaticBoxA(-speed, 0, speed))){
		dx = -dx;
		enemy.setPosition(point(wallA.x + wallA.w + 1, enemy.y))
	
	}
	if (wallD.isStaticIntersect( enemy.getStaticBoxD(0, 0, speed))){
		dx = -dx;
		enemy.setPosition(point(wallD.x - enemy.w, enemy.y))
	}
	if (wallW.isStaticIntersect(bullet.getStaticBoxW(0, -speed, 0, speed))){
		go = false;
		miss++;
	}

	if (enemy.isStaticIntersect(bullet.getStaticBoxW(0, -speed, 0, speed))){
		go = false;
		showEnemy = false;
		s = "WIN"

		pjs.brush.drawText({
	 		text : s, 
	  		x : 320, y : 220, 
	  		color : "red",
	  		size : 30 
		});
	}


 

 	if (!go && showEnemy) {
 		pos = tank.getPositionC();
 		bullet.setPosition(point(pos.x, pos.y));
 	}




 	if (showEnemy) {
 		enemy.move(point(dx, 0));
 		enemy.draw();

 	}


 	if (go) {
 		bullet.move(point(0, -speed));
 		bullet.draw();
 	}
	wallA.draw();
	wallD.draw();
	wallW.draw();
	tank.draw();
	m = "MISS:" + miss

	pjs.brush.drawText({
	 	text : m, 
	  	x : 20, y : 20, 
	  	color : "red",
	  	size : 30
	 });
		
}) 
game.setLoop('myGame');
game.start();