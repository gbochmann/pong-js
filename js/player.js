/* globals child, hasMovement, hasCollision, Rectangle */
var Player = child(Rectangle, function (upBtn, downBtn, width, height, color, x, y, left) {
	Rectangle.prototype.constructor.call(this, width, height, color, x, y);
	this.upBtn = upBtn;
	this.downBtn = downBtn;
	this.dy = 0;
	this.xBorder = left ? 0 : this.width;
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
	}
});

_.extend(Player.prototype, hasMovement);
_.extend(Player.prototype, hasCollision);
