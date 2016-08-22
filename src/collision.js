var hasCollisionBounce = { // eslint-disable-line no-unused-vars
	collisionReaction: function collisionBounce() {
		if (this.dx) this.dx = -this.dx;
		if (this.dy) this.dy = -this.dy;
	}
};