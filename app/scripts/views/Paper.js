/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



	var Common = require('data/Common');
	var Everywhere = require('common/Everywhere');

	var Message = require('views/Message');





	var _stage;
	var _renderer;
	var _story;



	var _lines = [];




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




		_stage.addChild( Everywhere.graphic );

		_story.children.forEach(function(messageItem){
			messageItem.children.forEach(function(wordItem){
				wordItem.children.forEach(function(letterItem){
					letterItem.children.forEach(function(strokeItem){
						strokeItem.children.forEach(function(lineItem){
							_lines.push(lineItem);
						})
					})
				})
			})
		})




		tweenLine();


	}

	function tweenLine () {
		_lines.forEach(function(lineItem){
			lineItem.p2.tween( lineItem.p1.to );
		})
	}

	var offsettt = 330;

	function test () {

		Everywhere.graphic.clear();

		_lines.forEach(function(lineItem){

			var p1 = lineItem.p1.from;
			var p2 = lineItem.p2.from;

			Everywhere.graphic.lineStyle(1, 0xffffff, 1);
			Everywhere.graphic.moveTo(p1._x, p1._y);
			Everywhere.graphic.lineTo(p2._x, p2._y);
			Everywhere.graphic.endFill();

		})
		_stage.addChild( Everywhere.graphic );
	}




	function animate() {
	    requestAnimFrame( animate );
	    _renderer.render( _stage );
	    test();
	};

	return Paper;
});