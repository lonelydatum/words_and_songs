/*global define*/
define(function(require){
	'use strict';
	window.pixi =  require('pixi');




	var _stage = null;


	var self = { };

	Object.defineProperty( self, 'stageWidth', { value: 1500 });
	Object.defineProperty( self, 'stageHeight', { value: 850 });

	Object.defineProperty( self, 'stage', {
		set: function(value){
			_stage = value;
			window.stage = _stage;
		},
		get: function(){
			return _stage;
		}
	})

	return self
});


