/*global define*/
define(function(require){
	'use strict';


	// var Helper = require('Helper');


	var Message = require('controllers/Message');
	var Basic = require('controllers/Basic');


	function Story( dna ){
		Basic.call(this, dna);
		this.list = this.makeBabies( Message, dna );
	}

	Story.prototype = Object(Basic.prototype);
	Story.prototype.constructor = Story;

	return Story;
});