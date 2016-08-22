/* globals child, hasMovement Rectangle getDistance transpose */
var Player = child(Rectangle, function (upBtn, downBtn, width, height, color, x, y, left) {
	Rectangle.prototype.constructor.call(this, width, height, color, x, y);
	this.upBtn = upBtn;
	this.downBtn = downBtn;
	this.dy = 0;
	this.side = left ? -1 : 1;
	this.xBorder = left ? width + 10: 10;
	this.height = height;
});

_.extend(Player.prototype, {
	keyEventListener: function (keypress) {
		var type = keypress.type;
		var key = keypress.code;
		var acceleration;
		if (type === 'keydown') acceleration = 8;
		if (type === 'keyup') acceleration = 0;
		if (key === this.upBtn) this.dy = -acceleration;
		if (key === this.downBtn) this.dy = acceleration;
	},
	findCollision: function playerFindCollision(ball) {
		var playerX = transpose(this.x, ball.x) * this.side;
		var ballY = ball.y;
		var lower = this.y + this.height;
		var upper = this.y;
		if (playerX < 0 + this.xBorder) {
			if (ballY < lower && ballY > upper) return true;
		}
		return false;
	}
});

_.extend(Player.prototype, hasMovement);