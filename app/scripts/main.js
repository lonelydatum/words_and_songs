/*global define*/
require.config({
	paths: {
		pixi: '../../bower_components/pixi/bin/pixi.dev',
		TweenMax: '../../bower_components/greensock/src/uncompressed/TweenMax',
		TweenLite: '../../bower_components/greensock/src/uncompressed/TweenLite',
		signals: '../../bower_components/signals/dist/signals',
		_: '../../bower_components/lodash/dist/lodash'
	}
});

define(['App'], function(App){
	'use strict';
	App.start();
});