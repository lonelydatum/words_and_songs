/*global define*/
define(function(require){
	'use strict';

	var Letter = require('views/Letter');
	var PIXI = require('pixi');

	

	var Word = function( wordData ){
		PIXI.DisplayObjectContainer.call(this);

		this.lettersIndex = -1;
		

		var _width = 0;
		this.letters = [];
		this.data = wordData;
		this.data.children.list.forEach(function(letterData){
			var letter = new Letter( letterData );	
			
			letter.onDoneAnimate.addOnce(function(){
				console.log(this.data.content);
			}, letter)
			letter.x = _width;
			
			_width += letter.width;
			
			
			this.addChild( letter );
			this.letters.push(letter);
		}, this);
		



		this.animateNextLetter();

		Object.defineProperty(this, 'width', { get: function() { return _width; } });

	}

	
	

	Word.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
	Word.prototype.constructor = Word;

	Word.prototype.animateNextLetter = function(){
		this.lettersIndex++;
		var letterNext = this.letters[this.lettersIndex];
		
		if(letterNext){
			letterNext.onDoneAnimate.addOnce(function(){

				this.animateNextLetter();
			}, this)
			letterNext.startAnimation();			
		}
	}


	return Word;

});