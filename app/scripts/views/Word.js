/*global define*/
define(function(require){
	'use strict';

	var Letter = require('views/Letter');
	var PIXI = require('pixi');



	var Word = function( wordData ){
		PIXI.DisplayObjectContainer.call(this);

		this.lettersIndex = -1;

		var _width = 0;
		var _height = 200;


		this.letters = [];
		this.data = wordData;
		this.data.children.list.forEach(function(letterData){
			var letter = new Letter( letterData, this );



			letter.onDoneAnimate.addOnce(function(){
				// console.log(this.data.content);
			}, letter)
			letter.x = _width;


			_width += letter.width;



			this.addChild( letter );
			this.letters.push(letter);
		}, this);



		var _rect = new PIXI.Rectangle(0,0,_width, _height);




		Object.defineProperty(this, 'width', { get: function() { return _width; } });
		Object.defineProperty(this, 'rect', { get: function() { return _rect; } });



		this.all();

	}




	Word.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
	Word.prototype.constructor = Word;

	Word.prototype.all = function(){
		this.letters.forEach(function( letterItem ){

			letterItem.startAnimation();
		}, this)
	}

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