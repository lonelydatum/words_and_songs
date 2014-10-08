/*global define*/
define(function(){
	'use strict';

	var Signals = require('signals');


	var BasicAnimation = function( graphics, lines ){
		this.graphics = graphics;
		this.lines = lines;

		this.signals = {
			done: new Signals()
		}
	}

	BasicAnimation.prototype.none = function(){
		//draw start
		this.graphics.clear();
		this.graphics.lineStyle(1, 0xffffff, 1);

		// check all lines and draw updates
		this.lines.forEach(function(lineItem){
			var p1 = lineItem.p1.from;
			var p2 = lineItem.p2.from;
			this.graphics.moveTo(p1.x, p1.y);
			this.graphics.lineTo(p2.x, p2.y);

		}, this)

		this.graphics.endFill();
	}

	// BasicAnimation.prototype


	return BasicAnimation;
});