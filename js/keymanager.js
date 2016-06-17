var KeyManager = function () {
	this.listeners = [];
};

_.extend(KeyManager.prototype, {
	register: function (listener) {
		this.listeners.push(listener);
	},
	process: function (keyName) {
		_.each(this.listeners, function (listener) {
			listener(keyName);
		})
	}
});