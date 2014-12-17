/*global define*/
require.config({
	paths: {
		pixi: '../bower_components/pixi/bin/pixi.dev',
		TweenMax: '../bower_components/greensock/src/uncompressed/TweenMax',
		TweenLite: '../bower_components/greensock/src/uncompressed/TweenLite',
		TimelineMax: '../bower_components/greensock/src/uncompressed/TimelineMax',
		signals: '../bower_components/signals/dist/signals',
		yt: '../scripts/lib/player_api',
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
		_: '../bower_components/lodash/dist/lodash.min'

	}
});

require(["pixi", "TweenMax", "TweenLite", "TimelineMax", "signals", "yt", "_",  'App'], function(a, b, c, d, e, f, g, App){
	'use strict';
	App.start();
	console.log("window.peep "+window.peep)
	_gaq.push(['_trackEvent', 'Xmas2014', window.peep]);
});
