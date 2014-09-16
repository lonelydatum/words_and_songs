/*global define*/
define(function(){
	'use strict';

	var Letter = {

	};

	Letter.id = "Letter";

	Letter.init = function(dna, queueMe, queueTotal){
		this.dna = dna;
		this.queueMe = queueMe;
		this.queueTotal = queueTotal;

	};

	var api = { };
	api.create = function(dna, queueMe, queueTotal){
		var newLetter = Object.create(Letter);

		newLetter.init(dna, queueMe, queueTotal);
		return newLetter;
	};

	return api;
});