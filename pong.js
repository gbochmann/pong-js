var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	bgColor = 'black',
	Rectangle,
	Ball,
	objList,
	ball,
	one,
	two,
	middle,
	background;



Rectangle = function (width, height, color, x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.dx = 0;
	this.dy = 0;
	this.width = width;
	this.height = height;
	this.color = color;
};

_.extend(Rectangle.prototype, {
	draw: function drawRect() {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	},
	move: move
});



Ball = function (radius, color, x, y) {
	this.radius = radius;
	this.color;
	this.x = x || 0;
	this.y = y || 0;
	this.dx = 5;
	this.dy = 2;
};

_.extend(Ball.prototype, {
	draw: function () {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI + (Math.PI * 360)/2);
		ctx.fill();
		ctx.closePath();
	},
	move: move
});


// document.addEventListener('keydown', function (event) {

// });

// function keyListener (event) {
// 	var keyName = event.key;
// }


function move () {
	if (this.x && this.dx) this.x += this.dx;
	if (this.y && this.dy) this.y += this.dy;
}



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
