/*global define*/
define(function(require){
	'use strict';

	var Message = require('controllers/Message');
	var Helper = require('Helper');

	window.oo = {}; // Creates a new object

Object.defineProperty(window.oo, "a", { value : 37,
                                writable : false });

// console.log(o.a); // logs 37
// window.oo.a = 37; // No error thrown (it would throw in strict mode, even if the value had been the same)
// console.log(o.a); // logs 37. The assignment didn't work.




	var Story = {
		id: 'Story'
	};


	Story.start = function(story){
		this.list = Helper.createChildren( Message, story );

	};


	return Story;
});