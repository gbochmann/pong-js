var Player = function (upBtn, downBtn, width, height, color, x, y) {
	Rectangle.prototype.constructor.call(this, width, height, color, x, y);
	this.upBtn = upBtn;
	this.downBtn = downBtn;
	this.dy = 0;
}

Player.prototype = new RectangleProxy();

_.extend(Player.prototype, {
	move: move,
	keyEventListener: function (keypress) {
		var type = keypress.type;
		var key = keypress.code;
		var acceleration;
		if (type === 'keydown') acceleration = 8;
		if (type === 'keyup') acceleration = 0;
		if (key === this.upBtn) {
			this.dy = -acceleration;
		};
		if (key === this.downBtn) {
			this.dy = acceleration;
		};
	}
});
