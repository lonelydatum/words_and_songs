/*global define*/
define(function(require){
	'use strict';

	var PIXI = require('pixi');
	var Font = require('data/Font');
	var Line = require('controllers/Line.Controller');
	var Stroke = require('controllers/Stroke.Controller');
	var Basic = require('controllers/Basic');

	var _ = require('_');




	function Letter( content, mommy, queue){
		this.content = content;
		this.id = 'LETTER';

		this.queue = queue;

		var _font = Font.getCharacter(content);

		var rawPoints = _font.points;






		Basic.call(this, content);
		this.createChildren( Stroke, rawPoints );



		//make the rect
		var min = {x:99999,y:99999};
		var max = {x:-1,y:-1};
		_.each( rawPoints, function(strokeItem){
			_.each(strokeItem, function(p){
				var point = new PIXI.Point(p[0], p[1]);
				min.x = (point.x<min.x) ? point.x : min.x;
				min.y = (point.y<min.y) ? point.y : min.y;
				max.x = (point.x>max.x) ? point.x : max.x;
				max.y = (point.y>max.y) ? point.y : max.y;
			}, this);
		}, this );

		var width = max.x - min.x;
		var height = max.y - min.y;
		var _rect = new PIXI.Rectangle(min.x, min.y, (width===0)?1:width, height);



		var _offset = {x:0, y:0 };
		Object.defineProperty( this, 'offsetX', {
			get: function(){ return _offset.x },
			set: function(value){
				var points = this.getPoints();
				points.forEach(function(pointItem){
					pointItem.offsetX = value;
				})
			}
		});

		Object.defineProperty( this, 'offsetY', {
			get: function(){ return _offset.y },
			set: function(value){
				var points = this.getPoints();
				points.forEach(function(pointItem){
					pointItem.offsetY = value;
				})
			}
		});




		Object.defineProperty(this, 'rect', { get: function() { return _rect; } });
		Object.defineProperty(this, 'width', { get: function() { return _rect.width; } });
		Object.defineProperty(this, 'height', { get: function() { return _rect.height; } });
		Object.defineProperty(this, 'padding', { get: function() { return 30; } });

		Object.defineProperty(this, 'lines', { get: function() {
			var strokes = this.children;
			var lines = [];
			strokes.forEach(function(strokeItem){
				strokeItem.children.forEach(function(lineItem){
					lines.push(lineItem);
				})
			});
			return lines;
		} });

		Object.defineProperty(this, 'points', { get: function() {
			this.lines.forEach(function(lineItem){
				lineItem.children.forEach(function(pointItem){
					console.log(pointItem);
				})
			})
		} });



		// Object.defineProperty(this, 'x', {
		//     get: function() { return _rect.x; },
		//     set: function(value) {

		//     	this.lines.forEach(function(lineItem){
		//     		lineItem.offset.word.x = value;
		//     	})
		//     	_rect.x = value; },
		// });
		// Object.defineProperty(this, 'y', {
		//     get: function() { return pos.y; },
		//     set: function(value) { pos.y = value; },
		// });




	}

	Letter.prototype = Object(Basic.prototype);
	Letter.prototype.constructor = Letter;


	Letter.prototype.getPoints = function(){
		var points = [];
		this.children.forEach(function(strokeItem){
			strokeItem.children.forEach(function(lineItem){
				lineItem.children.forEach(function(pointItem){
					points.push(pointItem);
				})
			})
		});

		return points;
	};




	return Letter;
});