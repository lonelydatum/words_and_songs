/*global define*/
define(function(require){
	'use strict';

	var Story = require('controllers/Story');


	function Controller(){
		var main = [
			{ message: 'abcdefg hijkl', time: 2000 },
			// { message: 'hell keep going', time: 2000 },
		]


		var story = new Story(main);

		Object.defineProperty( this, 'story', {
			get: function() { return story; }
		} );
	}

	return Controller;
});