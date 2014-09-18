/*global define*/
define(function( require ){
	'use strict';

	var Paper = require('views/Paper');

	var _story;
	var _paper;

	function View( controller ){
		_story = controller.story;
		_paper = new Paper( _story );
	}

	function draw(){

	}






	return View;
});