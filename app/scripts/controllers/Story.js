/*global define*/
define(function(require){
	'use strict';


	var Basic = require('controllers/Basic');
	var Font = require('data/Font');


	function Story( content ){

		this.id = 'STORY';

		// Font.parse();

		Basic.call(this, content);

		var module = require('controllers/Message.Controller');
		this.createChildren( module, content)


	}

	Story.prototype = Object(Basic.prototype);
	Story.prototype.constructor = Story;

	Story.prototype.messages = function(index){
		return this.getChildAt(index);
	}

	return Story;
});