/*global define*/
define(function(require){
	'use strict';

	var Story = require('controllers/Story');




	var api = { };
	api.id = 'Controller';
	api.start = function(){
		var story = [ 'Row row row your boat.', 'Gently down the stream.', 'Merrily Merrily Merrily Merrily Merrily.', 'Life is but a dream.' ];

		var s = new Story(story);
		console.log(s);

	};
	return api;
});