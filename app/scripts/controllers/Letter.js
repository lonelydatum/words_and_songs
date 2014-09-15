/*global define*/
define(function(){
	'use strict';

	var Letter = {};
	Letter.name = null;
	Letter.queueMe = 0;
	Letter.queueTotal = 0;
	Letter.init = function(letter, queueMe, queueTotal){
		this.name = letter;
		this.queueMe = queueMe;
		this.queueTotal = queueTotal;
	};

	var api = { };
	api.create = function(letter, queueMe, queueTotal){
		var newLetter = Object.create(Letter);
		newLetter.init(letter, queueMe, queueTotal);
		return newLetter;
	};

	return api;
});