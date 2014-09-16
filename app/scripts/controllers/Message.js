/*global define*/
define(function(require){
	'use strict';

	var Signals = require('signals');
	var Word = require('controllers/Word');
	var Helper = require('Helper');


	var Message = {
		id: "Message"
	};







	var api = {};
	api.create = function(dna, queueMe, queueTotal){
		// var newMessage = Object.create(Message);
		// newMessage.init(dna, queueMe, queueTotal);

		var newMessage = Object.create(Message);
		newMessage.list = Helper.createChildren( Word, dna.split(' ') );
		newMessage.dna = dna;
		newMessage.queueMe = queueMe;
		newMessage.queueTotal = queueTotal;


		return newMessage;
	};

	return api;

});