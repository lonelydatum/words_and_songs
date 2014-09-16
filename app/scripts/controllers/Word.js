/*global define*/
define(function(require){
	'use strict';

	var Helper = require('Helper');
	var Letter = require('controllers/Letter');

	var Word = {
		id: 'Word'
	};



	var api = { };
	api.create = function(dna, queueMe, queueTotal){
		var newWord = Object.create(Word);
		newWord.list = Helper.createChildren( Letter, dna.split('') );
		newWord.dna = dna;
		newWord.queueMe = queueMe;
		newWord.queueTotal = queueTotal;
		return newWord;
	};

	return api;
});