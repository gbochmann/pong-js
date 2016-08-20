/* globals ctx, hasMovement, hasCollisionBounce */
var Ball = function (radius, color, x, y) {
	this.radius = radius;
	this.color;
	this.x = x || 0;
	this.y = y || 0;
	this.dx = 8;
	this.dy = 0;
	this.xBorder = this.radius;
	this.yBorder = this.radius;
};

_.extend(Ball.prototype, {
	draw: function () {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI + (Math.PI * 360)/2);
		ctx.fill();
		ctx.closePath();
	}
});

_.extend(Ball.prototype, hasMovement);
_.extend(Ball.prototype, hasCollisionBounce);