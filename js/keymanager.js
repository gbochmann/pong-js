var KeyManager = function () {
	this.listeners = [];
};

_.extend(KeyManager.prototype, {
	register: function (listener) {
		this.listeners.push(listener);
	},
	process: function (event) {
		_.each(this.listeners, function (listener) {
			listener(event);
		});
	}
});