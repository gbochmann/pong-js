var hasMovement = { // eslint-disable-line no-unused-vars
	move: move
};

function transpose (original, reference) {
	return original - reference;
}

function getDistance(a, b) {
	return Math.abs(a - b);
}

function move () {
	if (this.x && this.dx) this.x += this.dx;
	if (this.y && this.dy) this.y += this.dy;
}


function child (parent, child) { // eslint-disable-line no-unused-vars
    var Proxy = function () {
        this.constructor = child;
    };
    Proxy.prototype = parent.prototype;
    child.prototype = new Proxy();
    return child;
}

function registerKeyEvents () {
	var args = [].slice.call(arguments,0);
	_.each(args, function (player) {
		document.addEventListener('keydown', player.keyEventListener.bind(player));
		document.addEventListener('keyup', player.keyEventListener.bind(player));
	});
}




