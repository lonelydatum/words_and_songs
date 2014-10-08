/*global define*/
define(function(require){
	'use strict';


	var Letter = require('controllers/Letter.Controller');
	var Basic = require('controllers/Basic');


	function Word( content, mommy, queue ){

		Basic.call(this, content, mommy, queue, 'WORD');
		this.createChildren( Letter, content.split('') );




		var _widthOfChildren = 0;
		var _maxHeight = 0;
		this.children.forEach( function(letter){
			_maxHeight = Math.max(_maxHeight, letter.height);
			letter.offsetX = _widthOfChildren;
			_widthOfChildren += letter.width + letter.padding;
		}, this );

		this.width = _widthOfChildren;
		this.height = _maxHeight;
	}



	Word.prototype = Object(Basic.prototype);
	Word.prototype.constructor = Word;


	Word.prototype.letters = function(index){
		return this.getChildAt(index);
	}


	return Word;
});

