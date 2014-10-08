/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



	var Common = require('data/Common');
	var Everywhere = require('common/Everywhere');






	var _stage;
	var _renderer;
	var _story;



	var _lines = [];




	function Paper( story ){
		_story = story;
		Common.stage = new PIXI.Stage(0x111111);
		_stage = Common.stage;
		_renderer = PIXI.autoDetectRenderer(Common.stageWidth, Common.stageHeight);
		document.body.appendChild(_renderer.view);
		requestAnimFrame(animate);

		getAllLines();
		tweenLine();
	}


	function getAllLines(){
		Everywhere.graphic.x = 11;
		Everywhere.graphic.y = 11;
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
	}

	function tweenLine () {

		_lines.forEach(function(lineItem, index){
			var percent = (index+1)/_lines.length;
			var delay = percent * 3;

			lineItem.p2.tween( lineItem.p1.to, .5, delay );
		})
	}



	function test () {

		Everywhere.graphic.clear();

		_lines.forEach(function(lineItem){

			var p1 = lineItem.p1.from;
			var p2 = lineItem.p2.from;

			Everywhere.graphic.lineStyle(1, 0xff1144, 1);
			Everywhere.graphic.moveTo(p1._x, p1._y);
			Everywhere.graphic.lineTo(p2._x, p2._y);
			Everywhere.graphic.endFill();

		})
	}




	function animate() {
	    requestAnimFrame( animate );
	    _renderer.render( _stage );
	    test();
	};

	return Paper;
});