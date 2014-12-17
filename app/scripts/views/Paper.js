/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');
	var $ = require('jquery');




	var Common = require('data/Common');
	var Style = require('data/Style');
	var Everywhere = require('common/Everywhere');
	var TweenController = require('controllers/Tween.Controller');
	var PlayerController = require('controllers/Player.Controller');

	var Common = require('data/Common');




	var _stage;
	var _renderer;
	var _story;



	var _lines = [];
	var _messageIndex = -1;
	var _tween;

	var _theme;
	var _style = {

	}

	var _timeline = [];
	var _message;
	var _dc;
	var _player;

	function Paper( story ){
		_story = story;
		_style.lineColor = (Style.theme)?Style.theme.lineColor : Style.lineColor;
		_style.backgroundColor = (Style.theme)?Style.theme.backgroundColor : Style.backgroundColor;

		_stage = new PIXI.Stage(_style.backgroundColor);

		Style.stage = _stage ;

		var myView = document.getElementById('rhythym');



		var ratioScreen = Style.drawingArea.width / Style.drawingArea.height;





		_renderer = PIXI.autoDetectRenderer(Style.drawingArea.width, Style.drawingArea.height, myView, true, true);



		var scale = Math.min( Style.stageWidth/_renderer.width, (Style.stageHeight)/(_renderer.height))

		var newWidth = (_renderer.width * scale);
		var newHeight = (_renderer.height * scale);
		$("#rhythym").css("width", newWidth+"px");
		$("#rhythym").css("height", newHeight+"px");
		var left = (Style.stageWidth - newWidth) / 2;
		var top = ((Style.stageHeight) - newHeight) / 2;
		$("#rhythym").css("left", left+"px");




		$("#rhythym").css("top", top+"px");


	var area = newWidth * newHeight
	




		requestAnimFrame(animate);
		_stage.addChild( Everywhere.graphic );

		_tween = new TweenController();



		_player = new PlayerController(_story.children);
		_player.signals.playMessage.add(function(message){
			createNextMessage(message);
		})


	}

	function createTimelinesForMessage (argument) {
		_story.children.forEach(function(messageItem){
			console.log(messageItem.playAt);
			var dc = TweenMax.delayedCall(messageItem.playAt, function(){
				createNextMessage(messageItem);
			})
			_timeline.push(dc);
		})
	}


	function createNextMessage(message){





		var signalDone = _tween.lines( getAllLines( message ) );

	}


	function getAllLines( message ){
		_lines = [];

		message.children.forEach(function(wordItem){
			wordItem.children.forEach(function(letterItem){
				letterItem.children.forEach(function(strokeItem){
					strokeItem.children.forEach(function(lineItem){
						_lines.push(lineItem);
					})
				})
			})
		})
		return _lines;
	}







	function test () {

		Everywhere.graphic.clear();


		_lines.forEach(function(lineItem){

			var p1 = lineItem.p1.from;
			var p2 = lineItem.p2.from;

			Everywhere.graphic.lineStyle(Style.lineWidth, _style.lineColor, 1);
			Everywhere.graphic.moveTo(p1._x, p1._y);
			Everywhere.graphic.lineTo(p2._x, p2._y);
			// console.log(p2._y);
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
