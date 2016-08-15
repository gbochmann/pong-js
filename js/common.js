var hasMovement = { // eslint-disable-line no-unused-vars
	move: move
};

var hasCollision = { // eslint-disable-line no-unused-vars
	findCollision: function findCollsion(collidable){
		var xDistance = norm(transpose(collidable.x + collidable.xBorder, this.x));
		var yDistance = norm(transpose(collidable.y + collidable.yBorder, this.y));
		var xCollison = this.xBorder > xDistance;
		var yCollision = this.yBorder > yDistance;
		this.isColliding = xCollison || yCollision;
		console.log(this.isColliding);
		if (this.isColliding) this.collisionReaction();
	},
	isColliding: false
};

var hasCollisionBounce = { // eslint-disable-line no-unused-vars
	collisionReaction: function collisionBounce() {
		console.log(this);
		if (this.dx) this.dx = -this.dx;
		if (this.dy) this.dy = -this.dy;
	}
};

function norm(num) {
	return num < 0 ? -num : num;
}

function transpose (original, reference) {
	return original - reference;
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

function collider (collidables) { // eslint-disable-line no-unused-vars
	var listCopy = collidables.slice();
	var target = listCopy.pop();
	_.inject(listCopy, checkCollisions, target);
}

function checkCollisions(target, collidable) {
	target.findCollision(collidable);
	return target;
}