/*global define*/
define(function(require){
	'use strict';

	var PIXI = require('pixi');
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

	var w = window.innerWidth - 20;
	var h = window.innerHeight - 30;
	var x = 15;
	var y = 15;

	var canvasW = 1314;
	var canvasH = 1000;
	var canvasScale = 1.2;

	canvasW *= canvasScale;
	canvasH *= canvasScale;


	Object.defineProperty( Style, 'drawingArea', { value: new PIXI.Rectangle(x,y,canvasW,canvasH)  });
	Object.defineProperty( Style, 'stageWidth', { value: w });
	Object.defineProperty( Style, 'stageHeight', { value: h });
	Object.defineProperty( Style, 'settings', { value: _settings });
	Object.defineProperty( Style, 'isLoop', { value: _settings.loop });






	Object.defineProperty( Style, 'stage', {
		set: function(value){ _stage = value; },
		get: function(){ return _stage; }
	});


	var w = Style.stageWidth;
	var h = Style.stageHeight;
	var a = w* h;

	var ratio = -3.5/1600000;
	var lineThickness = 2;

	if(a>1300000 && a<2000000){
		lineThickness = 2.5;
	}else if(a>750000 & a<=1300000){
		lineThickness = 3.5;
	}else if(a>300000 & a<=750000){
		lineThickness = 4.5;
	}
	console.log(a, lineThickness)

	Object.defineProperty( Style, 'lineWidth', { value: lineThickness });
	Object.defineProperty( Style, 'lineColor', { value: 0x726613 });

	Object.defineProperty( Style, 'backgroundColor', { value: 0xDDDDDD });
	Object.defineProperty( Style, 'theme', { value: null });


	return Style;
});
