function move () {
	if (this.x && this.dx) this.x += this.dx;
	if (this.y && this.dy) this.y += this.dy;
}

function child (parent, child) {
    var Proxy = function () {
        this.constructor = child;
    }
    Proxy.prototype = parent.prototype;
    child.prototype = new Proxy();
    return child;
}