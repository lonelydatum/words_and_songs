/*global define*/
define(function(require){
	'use strict';

	var _ = require('_');


	var _stage = null;
	var _settings = {
		loop: false
	}


	var Style = {

	};



	var Theme = function(styles){
		this.lineColor = styles.lineColor || 0xFF0000;
		this.backgroundColor = styles.backgroundColor || 0xFF0099;
	}

	var _themes = {};
	_themes.brightYellow = new Theme( {backgroundColor:0xf3d527, lineColor:0xf55930   } );
	_themes.brightGreen = new Theme( {backgroundColor:0x10fead, lineColor:0xffffff   } );
	_themes.greenBlue = new Theme( {backgroundColor:0x77f19c, lineColor:0x0f2a6f   } );
	_themes.pinkGrey = new Theme( {backgroundColor:0xff8283, lineColor:0x666666   } );


	var random = Math.floor(Math.random()*4)

	var found = _.find(_themes, function(item,index, i){

		return (index===random)
	})

	console.log(window.innerHeight);
	Object.defineProperty( Style, 'stageWidth', { value: window.innerWidth });
	Object.defineProperty( Style, 'stageHeight', { value: window.innerHeight });
	Object.defineProperty( Style, 'settings', { value: _settings });
	Object.defineProperty( Style, 'isLoop', { value: _settings.loop });





	Object.defineProperty( Style, 'stage', {
		set: function(value){ _stage = value; },
		get: function(){ return _stage; }
	});



	Object.defineProperty( Style, 'lineWidth', { value: 2 });
	Object.defineProperty( Style, 'lineColor', { value: 0xf3d527 });
	Object.defineProperty( Style, 'leading', { value: 50 });
	Object.defineProperty( Style, 'backgroundColor', { value: 0xFFFF00 });
	Object.defineProperty( Style, 'theme', { value: null });


	return Style;
});

