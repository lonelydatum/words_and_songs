/*global define*/
define(function( require ){
	'use strict';

	var Signals = require('signals');
	var PIXI = require('pixi');

	var api = {
		graphic: new PIXI.Graphics(),
		signals: {
			ticker: new Signals()
		}
	};
	return api;
});