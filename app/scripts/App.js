/*global define*/
define(function(require){
	'use strict';

	var Controller = require('controllers/Controller');
	var View = require('views/View');


	var api = { };

	api.start = function(){

		Controller.start();
		View.start();


	};

	return api;
});