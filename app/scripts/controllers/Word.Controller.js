/*global define*/
define(function(require){
	'use strict';


	var Letter = require('controllers/Letter.Controller');
	var Basic = require('controllers/Basic');


	function Word( content, mommy, queue ){
		this.id = 'WORD';
		this.mommy = mommy;
		this.queue = queue;

		Basic.call(this, content);
		this.createChildren( Letter, content.split('') );




		var _widthOfChildren = 0;
		var _maxHeight = 0;
		this.children.forEach( function(letter){
			_maxHeight = Math.max(_maxHeight, letter.height);
			letter.offsetX = _widthOfChildren;
			_widthOfChildren += letter.width + letter.padding;
		}, this );


		Object.defineProperty(this, 'width', { get: function() { return _widthOfChildren; } });
		Object.defineProperty(this, 'height', { get: function() { return _maxHeight; } });


		var _offset = {x:0, y:0 };
		Object.defineProperty( this, 'offsetX', {
			get: function(){ return _offset.x },
			set: function(value){
				this.children.forEach(function(letterItem){
					letterItem.offsetX = value;
				})
			}
		});

		Object.defineProperty( this, 'offsetY', {
			get: function(){ return _offset.y },
			set: function(value){
				this.children.forEach(function(letterItem){
					letterItem.offsetY = value;
				})
			}
		});


	}



	Word.prototype = Object(Basic.prototype);
	Word.prototype.constructor = Word;


	Word.prototype.letters = function(index){
		return this.getChildAt(index);
	}


	return Word;
});

