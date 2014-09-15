/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');

	var Message = require('controllers/Message');



	var _stage;
	var _renderer;

	var api = { };
	api.start = function(){

		_stage = new PIXI.Stage(0x66FF99);
		_renderer = PIXI.autoDetectRenderer(900, 600);
		document.body.appendChild(_renderer.view);

		Message.signals.messageChanged.add(function(from){
			console.log(from);
		}, this);

		requestAnimFrame(this.animate.bind(this));




	};

	api.animate = function() {
	    requestAnimFrame(this.animate.bind(this));
	    _renderer.render(_stage);
	};

	return api;
});