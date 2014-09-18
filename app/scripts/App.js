/*global define*/
define(function(require){
	'use strict';

	var Controller = require('controllers/Controller');
	var View = require('views/View');


	var api = { };

	api.start = function(){

		var controller = new Controller();
		var view = new View( controller );

		window.c = controller;




	};

	return api;
});