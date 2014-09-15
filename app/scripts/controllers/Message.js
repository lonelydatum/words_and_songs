/*global define*/
define(function(require){
	'use strict';

	var Signals = require('signals');
	var Word = require('controllers/Word');


	var api = { };
	api.message = '';
	api.words = [];
	api.signals = {
		messageChanged: new Signals()
	};

	api.getMessage = function(){ return this.message; };
	api.getWords = function(){ return this.words; };

	api.setMessage = function(message){
		this.message = message;
		this.words = [];


		var messageSplit = this.message.split(' ');
		messageSplit.forEach(function(wordItem, index){
			var word = Word.create(wordItem, index, messageSplit.length);
			this.words.push(word);
		}, this);

		console.log(this);


		api.signals.messageChanged.dispatch(api);
	};

	return api;

});