var hasMovement = { // eslint-disable-line no-unused-vars
	move: move
};

var hasCollision = { // eslint-disable-line no-unused-vars
	findCollision: function findCollsion(collidable){
		this.isColliding = this.x < collidable.x || this.y < collidable.y;
		if (this.isColliding) console.log(this);
		if (this.isColliding) console.log(this.isColliding);
	},
	isColliding: false
};

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
	var target = collidables.pop();
	_.inject(collidables, checkCollisions, target);
}

function checkCollisions(target, collidable) {
	target.findCollision(collidable);
	return target;
}