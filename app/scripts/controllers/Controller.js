/*global define*/
define(function(require){
	'use strict';

	var Story = require('controllers/Story');
	var Common = require('data/Common');


	function Controller(){




		var story = new Story(Common.story);

		Object.defineProperty( this, 'story', {
			get: function() { return story; }
		} );
	}

	return Controller;
});