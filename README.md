# pong
A clone of the good old fashioned pong game written in JS


# Todo

* add proper collision detection for paddles i.e. the ball should only collide within the y-range of the paddle
* fix key delay issue
* introduce ES6
* simplify game behaviour manipulation
    * gather all control variables in pong.js
	* introduce input elements for the controls
* refactor collision management i.e.
	* ~~move all collision stuff from common.js to their own file~~
	* refactor *findCollision* if possible
* make it pretty
	* package everything in modules
	* use styles to make game controls pretty
	* thinner paddles
	* round edges (just a little)