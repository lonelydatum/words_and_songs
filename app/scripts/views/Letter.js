/*global define*/
define(function(){
	'use strict';

	var api = { };
	var letter = {};
	api.create = function(){
		var newLetter = Object.create(letter);
		return newLetter;
	};
	return api;
});