/*global define*/
define(function(require){
	'use strict';

	var Letter = require('controllers/Letter');

	var Word = {};
	Word.namer = null;
	Word.queueMe = 0;
	Word.queueTotal = 0;
	Word.letters = [];
	Word.init = function(word, queueMe, queueTotal){
		this.namer = word;
		this.queueMe = queueMe;
		this.queueTotal = queueTotal;
		this.letters = [];
		var lettersSplit = this.namer.split('');
		lettersSplit.forEach(function(letter, index){
			var l = Letter.create(letter, index, lettersSplit.length);

			this.letters.push( l );
		}, this);

		console.log(this);

	};

	var api = { };
	api.create = function(word, queueMe, queueTotal){
		var newWord = Object.create(Word);
		newWord.init(word, queueMe, queueTotal);
		return newWord;
	};

	return api;
});