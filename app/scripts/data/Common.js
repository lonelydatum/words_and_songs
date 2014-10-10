/*global define*/
define(function(require){
	'use strict';
	window.pixi =  require('pixi');




	var _stage = null;


	var self = { };

	var _settings = {
		loop: false
	}

	var _story = [
				{ message: 'Somewhere over the rainbow', playAt: 36, readDuration:1 },
				{ message: 'Way up high', playAt: 42, readDuration:1 },
				{ message: 'And the dreams that you dreamed of', playAt: 47, readDuration:1 },
				{ message: 'Once in a lullaby', playAt:53, readDuration:1 },
				{ message: 'Somewhere over the rainbow', playAt:63, readDuration:1 },
				{ message: 'Blue birds fly', playAt:70, readDuration:1 },
				{ message: 'And the dreams that you dreamed of', playAt:75, readDuration:1 },
				{ message: 'Dreams really do come true ooh oh', playAt:78, readDuration:1 },
				// { message: '', playAt:, readDuration:1 },
				// { message: '', playAt:, readDuration:1 },
				// { message: '', playAt:, readDuration:1 },
				// { message: '', playAt:, readDuration:1 },
				// { message: '', playAt:, readDuration:1 },

			]

	Object.defineProperty( self, 'stageWidth', { value: 1800 });
	Object.defineProperty( self, 'stageHeight', { value: 1000 });
	Object.defineProperty( self, 'settings', { value: _settings });
	Object.defineProperty( self, 'story', { value: _story });
	Object.defineProperty( self, 'isLoop', { value: _settings.loop });





	Object.defineProperty( self, 'stage', {
		set: function(value){ _stage = value; },
		get: function(){ return _stage; }
	});


	return self
});


