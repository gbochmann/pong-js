var hasCollisionBounce = { // eslint-disable-line no-unused-vars
	collisionReaction: function collisionBounce() {
		console.log(this);
		if (this.dx) this.dx = -this.dx;
		if (this.dy) this.dy = -this.dy;
	}
};

var hasCollision = { // eslint-disable-line no-unused-vars
	findCollision: function findCollsion(collidable){
		var xDistance = norm(transpose(collidable.x + collidable.xBorder, this.x));
		var yDistance = norm(transpose(collidable.y + collidable.yBorder, this.y));
		var xCollison = this.xBorder > xDistance;
		var yCollision = this.yBorder > yDistance;
		this.isColliding = xCollison || yCollision;
		if (this.isColliding) this.collisionReaction();
	},
	isColliding: false
};

function collider (collidables) { // eslint-disable-line no-unused-vars
	var listCopy = collidables.slice();
	var target = listCopy.pop();
	_.inject(listCopy, checkCollisions, target);
}

function checkCollisions(target, collidable) {
	target.findCollision(collidable);
	return target;
}