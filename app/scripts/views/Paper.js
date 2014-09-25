/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



	var Common = require('data/Common');
	var Message = require('controllers/Message');
	var Letter = require('views/Letter');



	var _stage;
	var _renderer;
	var _story;

	var _x = 0;
	var _y = 20;
	var _letters = [];
	var _lettersIndex = -1;

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
		var message = _story.messages(0);
		
		message.children.list.forEach(function(word){
			makeWord(word);		
		})

		animateNextLetter();
		

	}

	function animateNextLetter(){
		_lettersIndex++;
		var letterNext = _letters[_lettersIndex];
		if(letterNext){
			letterNext.onDoneAnimate.addOnce(function(){
				animateNextLetter();
			})
			letterNext.startAnimation();			
		}
	}

	function makeWord(word){
		word.children.list.forEach(function(letterData){
			var letter = new Letter( letterData );	
			_letters.push(letter);
			letter.onDoneAnimate.addOnce(function(){
				console.log(this.data.content);
			}, letter)
			letter.x = letter.xPos;
			
			_stage.addChild( letter );
		});
		_y += (300/1);
		
	}



	function animate() {
	    requestAnimFrame( animate );
	    _renderer.render( _stage );
	};

	return Paper;
});