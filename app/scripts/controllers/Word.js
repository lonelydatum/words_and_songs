/*global define*/
define(function(require){
	'use strict';


	var Letter = require('controllers/Letter');
	var Basic = require('controllers/Basic');


	function Word( content, mommy, queue ){
		this.id = 'Word';
		this.mommy = mommy;
		this.queue = queue;

		var children = this.createChildObj();
		children.module = require('controllers/Letter');
		children.content = content.split('');

		Basic.call(this, content, children);



		var width = 0;
		this.children.list.forEach( function(letter){
			letter.x = width;
			width += letter.width + letter.padding;

		} )


	}



	Word.prototype = Object(Basic.prototype);
	Word.prototype.constructor = Word;


	Word.prototype.letters = function(index){


		return this.getChildAt(index);
	}


	return Word;
});

