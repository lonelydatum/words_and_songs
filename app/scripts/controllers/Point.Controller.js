/*global define*/
define(function(){
	'use strict';

	var PIXI = require('pixi');
	var Basic = require('controllers/Basic');
	var TweenMax = require('TweenMax');

	function Point( content, mommy, queue ){

		this.content = content;
		this.id = 'POINT';
		this.queue = queue;

		var _from = content.clone();
		var _to = content.clone();



		Basic.call(this, content);
		var _offset = {x:0, y:0 }

		Object.defineProperty( this, 'offsetX', {
			get: function(){ return _offset.x },
			set: function(value){ _offset.x += value; }
		});

		Object.defineProperty( this, 'offsetY', {
			get: function(){ return _offset.y },
			set: function(value){ _offset.y += value; }
		});


		Object.defineProperty( this, 'from', {
			get: function(){ return _from },
			set: function(value){ _from=value; },
		});
		Object.defineProperty( this, 'to', {
			get: function(){ return _to },
			set: function(value){ _to = value }
		});

		Object.defineProperty( _from, '_x', {
			get: function(){ return _from.x+_offset.x; }
		});
		Object.defineProperty( _to, '_x', {
			get: function(){ return _to.x+_offset.x;  }
		});


		Object.defineProperty( _from, '_y', {
			get: function(){ return _from.y+_offset.y; }
		});
		Object.defineProperty( _to, '_y', {
			get: function(){ return _to.y+_offset.y;  }
		});







	}

	Point.prototype = Object(Basic.prototype);
	Point.prototype.constructor = Point;

	Point.prototype.tween = function(newFromPoint){
		this.from = newFromPoint;
		TweenLite.to( this.from, 1, { x:this.to.x, y:this.to.y, ease:Sine.easeOut });
	}

	Point.prototype.offsetWord = function(x, y){

	}




	// Point.prototype.offsetXChildren = function(x){
	// 	console.log(this);
	// }




	return Point;


});


