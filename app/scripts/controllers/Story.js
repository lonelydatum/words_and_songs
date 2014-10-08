/*global define*/
define(function(require){
	'use strict';


	var Basic = require('controllers/Basic');
	var Font = require('data/Font');
	var Message = require('controllers/Message.Controller');

	function Story( content ){

		this.id = 'STORY';
		Basic.call(this, content);
		this.createChildren( Message, content)
	}

	Story.prototype = Object(Basic.prototype);
	Story.prototype.constructor = Story;

	Story.prototype.messages = function(index){
		return this.getChildAt(index);
	}

	return Story;
});