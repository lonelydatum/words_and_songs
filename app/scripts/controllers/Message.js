/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word');
	var Basic = require('controllers/Basic');



	function Message( dna, queueMe, queueTotal ){
		Basic.call(this, dna, queueMe, queueTotal);
		this.list = this.makeBabies(Word, dna.split(' ') );
	}

	Message.prototype = Object(Basic.prototype);
	Message.prototype.constructor = Message;

	return Message;

});