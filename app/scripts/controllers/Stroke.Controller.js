/*global define*/
define(function(require){
	'use strict';

	var PIXI = require('pixi');
	var Line = require('controllers/Line.Controller');
	var Basic = require('controllers/Basic');

	var Stroke = function( content, mommy, queue ){




		var twoPoints = [];
		var lines = [];

		//create lines
		_.each(content, function(p){
			var point = new PIXI.Point(p[0], p[1]);
			twoPoints.push(point);


			// we need 2 points to draw a line
			if(twoPoints.length===2){
				var line = [twoPoints[0], twoPoints[1]];
				// now that we have already draw the line from the 2 elements in the array,
				// lets remove just the first element and move the second to the first index.
				twoPoints.splice(0, 1);
				lines.push(line);
			}

		}, this);

		Basic.call(this, content, mommy, queue, 'STROKE');
		this.createChildren( Line, lines, 'lines' );


		Object.defineProperty( this, 'getLetter', { value: this.mommy } );
		Object.defineProperty( this, 'getWord', { value: this.mommy.mommy } );
	}


	Stroke.prototype = Object(Basic.prototype);
	Stroke.prototype.constructor = Stroke;




	return Stroke;

});