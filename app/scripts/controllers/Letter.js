/*global define*/
define(function(require){
	'use strict';

	var Font = require('data/Font');




	function Letter( content, mommy, queue){
		this.content = content;

		this.queue = queue;


		this.font = Font.getCharacter(content);


		var pos = { x:0, y:0 };


		Object.defineProperty(this, 'width', {
		    get: function() { return this.font.width; },
		});

		Object.defineProperty(this, 'padding', {
		    get: function() { return 30; },
		});

		Object.defineProperty(this, 'x', {
		    get: function() { return pos.x; },
		    set: function(value) { pos.x = value; },
		});

	}





	return Letter;
});