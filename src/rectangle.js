/* globals ctx */

var _ = require('node_modules/underscore/underscore.js');
var Rectangle; 
export default Rectangle = function (width, height, color, x, y) {
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
	}
});

