/*global define*/
define(function(require){
	'use strict';

	var Story = require('controllers/Story');
	var Common = require('data/Common');
	var Font = require('data/Font');


	function Controller(){


		_.each(Font.characters.abc, function(letterItem){
			letterItem.points.forEach(function(strokeItem){
				strokeItem.forEach(function(pointItem){
					pointItem[0] *= Font.scale;
					pointItem[1] *= Font.scale;
				})
			})
		})



		var story = new Story(Common.story);

		Object.defineProperty( this, 'story', {
			get: function() { return story; }
		} );
	}

	return Controller;
});