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

		var _font = Font.getCharacter(content);

		Basic.call(this, content, mommy, queue, 'LETTER');
		this.createChildren( Stroke, _font.points, 'stroke' );

		//make the rect
		var min = {x:99999,y:99999};
		var max = {x:-1,y:-1};
		var rawPoints = _font.points;
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

		this.width = _rect.width;
		this.height = _rect.height;

		Object.defineProperty(this, 'rect', { get: function() { return _rect; } });
		Object.defineProperty(this, 'padding', { get: function() { return 30; } });
		Object.defineProperty( this, 'getWord', { value: this.mommy } );

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



	Letter.prototype.getLines = function(){
		var lines = [];
		this.children.forEach(function(strokeItem){
			strokeItem.children.forEach(function(lineItem){
				lines.push(lineItem);
			})
		});
		return lines;
	};




	return Letter;
});