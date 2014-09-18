/*global define*/
require.config({
	paths: {
		pixi: '../../bower_components/pixi/bin/pixi.dev',
		TweenMax: '../../bower_components/greensock/src/uncompressed/TweenMax',
		signals: '../../bower_components/signals/dist/signals'
	}
});

define(['App'], function(App){
	'use strict';
	App.start();
});