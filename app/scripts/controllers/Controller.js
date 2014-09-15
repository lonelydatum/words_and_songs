/*global define*/
define(function(require){
	'use strict';

	var Message = require('controllers/Message');



	var api = { };
	api.start = function(message){

		Message.setMessage(message);
	};
	return api;
});