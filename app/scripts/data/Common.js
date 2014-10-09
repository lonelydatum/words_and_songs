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
				{ message: '12 abcdefghij klmnopqrst uwxyz', time: 1000 },
				// { message: 'finley loves eliot', time: 1000 },
				// { message: 'hell keep going', time: 2000 },
			]

	Object.defineProperty( self, 'stageWidth', { value: 1700 });
	Object.defineProperty( self, 'stageHeight', { value: 950 });
	Object.defineProperty( self, 'settings', { value: _settings });
	Object.defineProperty( self, 'story', { value: _story });
	Object.defineProperty( self, 'isLoop', { value: _settings.loop });





	Object.defineProperty( self, 'stage', {
		set: function(value){ _stage = value; },
		get: function(){ return _stage; }
	});


	return self
});


