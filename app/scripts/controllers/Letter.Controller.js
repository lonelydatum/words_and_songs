/*global define*/
define(function(require){
	'use strict';

	var PIXI = require('pixi');
	var Font = require('data/Font');
	var Line = require('controllers/Line');
	var Stroke = require('controllers/Stroke');

	var _ = require('_');




	function Letter( content, mommy, queue){
		this.content = content;

		this.queue = queue;


		var _font = Font.getCharacter(content);

		var rawPoints = _font.points

		











		var min = {x:99999,y:99999};
		var max = {x:-1,y:-1};


		var strokes = [];


		var lines = [];
		_.each( rawPoints, function(strokeItem){
			var twoPoints = [];
			

			_.each(strokeItem, function(p){
				var point = new PIXI.Point(p[0], p[1]);
				min.x = (point.x<min.x) ? point.x : min.x;
				min.y = (point.y<min.y) ? point.y : min.y;
				max.x = (point.x>max.x) ? point.x : max.x;
				max.y = (point.y>max.y) ? point.y : max.y;
					
				twoPoints.push(point);
				

				// we need 2 points to draw a line
				if(twoPoints.length===2){					
					var line = new Line(twoPoints[0], twoPoints[1]);
					// now that we have already draw the line from the 2 elements in the array, 
					// lets remove just the first element and move the second to the first index.
					twoPoints.splice(0, 1);

					lines.push(line);
				}
			});

			var stroke = new Stroke(lines);
			strokes.push(stroke);			
			
		} );

		var width = max.x - min.x;
		var height = max.y - min.y;
		var rect = new PIXI.Rectangle(min.x, min.y, width, height);
		



		
		
		
		









		var pos = {x:0,y:0};



		
		this.font = Font.getCharacter(content);

		Object.defineProperty(this, 'lines', {
		    get: function() { return lines; },
		});
		Object.defineProperty(this, 'strokes', {
		    get: function() { return strokes; },
		});
		Object.defineProperty(this, 'rawPoints', {
		    get: function() { return rawPoints; },
		});
		Object.defineProperty(this, 'rect', {
		    get: function() { return rect; },
		});

		Object.defineProperty(this, 'width', {
		    get: function() { return rect.width; },
		});

		Object.defineProperty(this, 'padding', {
		    get: function() { return 30; },
		});

		Object.defineProperty(this, 'x', {
		    get: function() { return pos.x; },
		    set: function(value) { pos.x = value; },
		});
		Object.defineProperty(this, 'y', {
		    get: function() { return pos.y; },
		    set: function(value) { pos.y = value; },
		});


		window.letter = this;

	}




	return Letter;
});