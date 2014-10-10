/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



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

		_renderer = PIXI.autoDetectRenderer(Style.stageWidth, Style.stageHeight-50, myView, true, true);
		requestAnimFrame(animate);

		// Everywhere.graphic.x = 20;
		// Everywhere.graphic.y = 20;
		_stage.addChild( Everywhere.graphic );

		_tween = new TweenController();

		_player = new PlayerController(_story.children);
		_player.signals.playMessage.add(function(message){
			createNextMessage(message);
		})

		// var startText = document.getElementById('startText');
		// startText.addEventListener('click', function(event) {
		//   	createTimelinesForMessage();
		// });
		// TweenMax.delayedCall(2, function(){
		// 	createNextMessage(_story.messages(0));
		// })


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



		console.log(message);




		var signalDone = _tween.lines( getAllLines( message ) );
		signalDone.addOnce(function(){




			// setTimeout(function(){

			// 	createNextMessage();
			// }, _message.time)


		}, this)
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


		// Everywhere.graphic.beginFill(0xFF700B, 1);
		// Everywhere.graphic.drawRect(Style.drawingArea.x, Style.drawingArea.y, Style.drawingArea.width, Style.drawingArea.height);

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