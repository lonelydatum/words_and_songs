/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word');
	var Basic = require('controllers/Basic');



	function Message( content, mommy, queue ){

		this.id = 'Message';
		this.mommy = mommy;
		this.queue = queue;


		var children = this.createChildObj();
		children.module = require('controllers/Word');
		children.content = content.split(' ');
		Basic.call(this, content, children);
	}

	Message.prototype = Object(Basic.prototype);
	Message.prototype.constructor = Message;

	Message.prototype.words = function(index){
		return this.getChildAt(index);
	}

	return Message;

});