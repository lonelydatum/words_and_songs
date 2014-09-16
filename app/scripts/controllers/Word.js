/*global define*/
define(function(require){
	'use strict';


	var Letter = require('controllers/Letter');
	var Basic = require('controllers/Basic');


	function Word( dna ){
		Basic.call(this, dna );
		this.list = this.makeBabies(Letter, dna.split('') );
	}

	Word.prototype = Object(Basic.prototype);
	Word.prototype.constructor = Word;



	return Word;
});

