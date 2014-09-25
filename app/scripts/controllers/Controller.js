/*global define*/
define(function(require){
	'use strict';

	var Story = require('controllers/Story');


	function Controller(){
		var content = [ 'holly' ];
		var story = new Story(content);


		Object.defineProperty( this, 'story', {
			get: function() { return story; }
		} );
	}

	return Controller;
});