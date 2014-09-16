/*global define*/
define(function(require){
	'use strict';

	var Font = require('data/Font');




	function Letter(dna, queueMe, queueTotal){
		this.dna = dna;

		this.queueMe = queueMe;
		this.queueTotal = queueTotal;

		this.font = Font.getCharacter(dna);

		var pos = { x:0, y:0 };


		Object.defineProperty(this, 'width', {
		    get: function() { return this.font.width; },
		});

		Object.defineProperty(this, 'x', {
		    get: function() { return pos.x; },
		    set: function(value) { pos.x = value; },
		});

	}



	return Letter;
});