var Player = function (upBtn, downBtn, width, height, color, x, y) {
	Rectangle.prototype.constructor.call(this, width, height, color, x, y);
	this.upBtn = upBtn;
	this.downBtn = downBtn;
}

_.extend(Player.prototype, {
	move: move,
	keyEventListener: function (keyName) {
		console.log(keyName);
	}
});
