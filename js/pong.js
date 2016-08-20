/* global Rectangle, Player, Ball, registerKeyEvents */
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bgColor = 'black';
var mainColor = 'green';
var paddleHeight = 80;
var paddleWidth = 20;
var padding = 10;
var startOne = { x: padding, y: canvas.height / 2 - paddleHeight / 2 };
var startTwo = { x: canvas.width - (padding + paddleWidth), y: canvas.height / 2 - paddleHeight / 2 };
var objList;
var ball;
var one;
var two;
var middleLine;
var background;


function determineSide(position, halfField) {
	return position < halfField;
}

background = new Rectangle(canvas.width, canvas.height, bgColor); // Background rectangle

// 				upBtn, 	downBtn, width, height, color, x, y, left
one = new Player(
	'KeyA',
	'KeyS',
	paddleWidth,
	paddleHeight,
	mainColor,
	startOne.x,
	startOne.y,
	determineSide(startOne.x, canvas.width / 2)
); // Player 1

two = new Player(
	'ArrowUp',
	'ArrowDown',
	paddleWidth,
	paddleHeight,
	mainColor,
	startTwo.x,
	startTwo.y,
	determineSide(startTwo.x, canvas.width / 2)
); // Player 2

middleLine = new Rectangle(3, canvas.height, 'green', canvas.width / 2 - 1, 0); // Middle line
ball = new Ball(12, 'green', canvas.width / 2, canvas.height / 2); // Ball
objList = [background, one, two, middleLine, ball];

registerKeyEvents(one, two);

(function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ballCollisions(ball, [one, two]);
	_.each(objList, function (obj) {
		if (obj.move) obj.move();
		obj.draw();
		// obj.isColliding = false;
	});

	window.requestAnimationFrame(draw);
})();

function ballCollisions(ball, collidables) {
	var memo = collidables.reduce(collider, { target: ball, result: false });
	if (memo.result) ball.collisionReaction();
}

function collider(memo, collidable) {
	if (collidable.findCollision(memo.target)) memo.result = true;
	return memo;
}