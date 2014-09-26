/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



	var Common = require('data/Common');
	var Message = require('views/Message');
	
	



	var _stage;
	var _renderer;
	var _story;

	var _x = 0;
	var _y = 20;
	var _letters = [];
	

	function Paper( story ){
		_story = story;
		Common.stage = new PIXI.Stage(0x000000);
		_stage = Common.stage;
		_renderer = PIXI.autoDetectRenderer(1700, 1000);
		document.body.appendChild(_renderer.view);
		requestAnimFrame(animate);
		makeMessage();

	}

	function makeMessage(){
		var messageData = _story.messages(0);	
		var message = new Message( messageData );

		_stage.addChild( message );

		
		

	}

	

	



	function animate() {
	    requestAnimFrame( animate );
	    _renderer.render( _stage );
	};

	return Paper;
});