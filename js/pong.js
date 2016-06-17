var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	bgColor = 'black',
	Ball,
	objList,
	ball,
	one,
	two,
	middle,
	background;


objList = [
	background = new Rectangle(canvas.width, canvas.height, bgColor), // Background rectangle
	one = new Rectangle(20, 80, 'green', 10, canvas.height/2 - 40), // Player 1
	two = new Rectangle(20, 80, 'green', canvas.width - 30, canvas.height/2 - 40), // Player 2
	middle = new Rectangle(3, canvas.height, 'green', canvas.width/2 - 1, 0), // Middle line
	ball = new Ball(12, 'green', canvas.width/2, canvas.height/2) // Ball
];



(function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	_.each(objList, function (obj) {
		obj.move();
		obj.draw();
	});

	window.requestAnimationFrame(draw);
})();
