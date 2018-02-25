var pjs = new PointJS('2d', 400, 400, {backgroundColor : '#DDDDDD'});

var game = pjs.game

var ball = game.newCircleObject({
  x : 100,
  y : 150,
  radius : 20,
  fillColor : '#EF7676'

});

// game.setLoop('game', function () {
//  ball.draw();
// });

// me.setLoop('game');
game.start();