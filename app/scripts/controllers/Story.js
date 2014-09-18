/*global define*/
define(function(require){
	'use strict';


	var Basic = require('controllers/Basic');


	function Story( content ){

		this.id = 'Story';
		var children = this.createChildObj();
		children.module = require('controllers/Message');
		children.content = content;
		Basic.call(this, content, children);
	}

	Story.prototype = Object(Basic.prototype);
	Story.prototype.constructor = Story;

	Story.prototype.messages = function(index){
		return this.getChildAt(index);
	}

	return Story;
});