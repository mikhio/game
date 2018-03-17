var pjs = new PointJS(810, 505, {backgroundColor: '#999999'})
var game = pjs.game;
var mouse = pjs.mouseControl;
mouse.initControl();
var point = pjs.vector.point;
var key = pjs.keyControl;
key.initKeyControl();
var speed = 5;
var dx = speed;
var dy = speed;
var b = "";
var s = "";
var score = 0;
var showCoin = true;

var circle = game.newCircleObject({ 
	x: 100, 
	y: 100, 
	radius: 20, 
	fillColor: "green",   
	angle: 0 
});
var wallD = game.newRectObject({ 
	x : 800, 
	y : 5, 
	w : 1, 
	h : 490, 
	fillColor : "#FBFE6F" 
});
var wallA = game.newRectObject({ 
	x : 10, 
	y : 5, 
	w : 1, 
	h : 490, 
	fillColor : "#FBFE6F" 
});
var wallW = game.newRectObject({ 
	x : 10, 
	y : 5, 
	w : 790, 
	h : 1, 
	fillColor : "#FBFE6F" 
});
var wallS = game.newRectObject({ 
	x : 10, 
	y : 495, 
	w : 790, 
	h : 1, 
	fillColor : "#FBFE6F" 
});
var desk = game.newRectObject({ 
	x : 395, 
	y : 470, 
	w : 150, 
	h : 15, 
	fillColor : "blue" 
});
var coin = game.newRectObject({ 
	x : 390, 
	y : 20, 
	w : 50, 
	h : 20, 
	fillColor : "blue" 
});






game.newLoop('myGame', function () {

	if(key.isDown('D') || key.isDown('RIGHT')) {
 		desk.move(point(speed, 0) );
 	}
 	if(key.isDown('A') || key.isDown('LEFT')) {
 		desk.move(point(-speed, 0) );
 	}
 	if(key.isDown('R')){
 		game.start();
 	}		

	if (wallD.isStaticIntersect(circle.getStaticBoxD(0, 0, speed))){
		dx = -dx;
		circle.setPosition(point(wallD.x - circle.radius * 2, circle.y));
	}
	if (wallA.isStaticIntersect(circle.getStaticBoxA(-speed, 0, speed))){
		dx = -dx;
		circle.setPosition(point(wallA.x + wallA.w + 1, circle.y));
	}
	if (wallW.isStaticIntersect(circle.getStaticBoxW(0, -speed, 0, speed))){
		dy = -dy;
		circle.setPosition(point(circle.x, wallW.y + wallW.h + 1));
	}
	if (wallS.isStaticIntersect(circle.getStaticBoxS(0, 0, 0, speed))){
		dy = -dy;
		circle.setPosition(point(circle.x, wallS.y - circle.radius * 2));
		b = "GAME OVER"
		pjs.brush.drawText({
 			text : b, 
  			x : 320, y : 220, 
  			color : "red",
  			size : 30 
		});
		game.stop();
	}

	if (desk.isStaticIntersect(circle.getStaticBoxS(0, 0, 0, speed))){
		dy = -dy;
		circle.setPosition(point(circle.x, desk.y - circle.radius * 2));
		score++;
	}

	if (wallA.isStaticIntersect( desk.getStaticBoxA(-speed, 0, speed))){
		desk.setPosition(point(wallA.x + wallA.w + 1, desk.y))
	
	}
	if (wallD.isStaticIntersect( desk.getStaticBoxD(0, 0, speed))){
		desk.setPosition(point(wallD.x - desk.w, desk.y))
	}


	if (showCoin && coin.isStaticIntersect(circle.getStaticBoxW(0, -speed, 0, speed))){
		showCoin = false;
		score += 10;
	}


	s = "score:" + score



	circle.move(point(dx, dy));
	circle.draw();

	wallD.draw();		 
	wallA.draw();
	wallW.draw();
	wallS.draw();
	desk.draw();
	if (showCoin) coin.draw(); 

	pjs.brush.drawText({
	 	text : s, 
	  	x : 20, y : 20, 
	  	color : "black",
	  	size : 30 
	});


	
}) 
game.setLoop('myGame');
game.start();