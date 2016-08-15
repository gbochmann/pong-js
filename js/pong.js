/* global Rectangle, Player, Ball, KeyManager, collider*/
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	bgColor = 'black',
	objList,
	ball,
	one,
	two,
	middle,
	background,
	collidables,
	keyMan;
var boundProcess;

keyMan = new KeyManager();


background = new Rectangle(canvas.width, canvas.height, bgColor); // Background rectangle
one = new Player('KeyA', 'KeyS', 20, 80, 'green', 10, canvas.height/2 - 40, false); // Player 1
two = new Player('ArrowUp', 'ArrowDown', 20, 80, 'green', canvas.width - 30, canvas.height/2 - 40, true); // Player 2
middle = new Rectangle(3, canvas.height, 'green', canvas.width/2 - 1, 0); // Middle line
ball = new Ball(12, 'green', canvas.width/2, canvas.height/2); // Ball
objList = [background, one, two, middle, ball];

collidables = _.filter(objList, function (obj) {
	return obj.isColliding != null;
});

boundProcess = keyMan.process.bind(keyMan);

document.addEventListener('keydown', boundProcess);
document.addEventListener('keyup', boundProcess);

keyMan.register(one.keyEventListener.bind(one));
keyMan.register(two.keyEventListener.bind(two));

(function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	collider(collidables);
	_.each(objList, function (obj) {
		if (obj.move) obj.move();
		obj.draw();
		// obj.isColliding = false;
	});

	window.requestAnimationFrame(draw);
})();
