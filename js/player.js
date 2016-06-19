var Player = function (upBtn, downBtn, width, height, color, x, y) {
	Rectangle.prototype.constructor.call(this, width, height, color, x, y);
	this.upBtn = upBtn;
	this.downBtn = downBtn;
	this.dy = 0;
}

Player.prototype = new RectangleProxy();

_.extend(Player.prototype, {
	move: function () {
		if (this.y && this.dy) this.y += this.dy;
		console.log(this.dy);
	},
	keyEventListener: function (keypress) {
		var type = keypress.type;
		var key = keypress.code;
		var acceleration;
		if (type === 'keydown') acceleration = 8;
		if (type === 'keyup') acceleration = 0;
		if (key === this.upBtn) this.dy = -acceleration;
		if (key === this.downBtn) this.dy = acceleration;
	},
	collisionDetection: function () {
		if (this.y + this.dy > canvas.height - this.height) this.dy = 0;
		if (this.y + this.dy < 0 + this.width/2) this.dy = 0;
	}
});
