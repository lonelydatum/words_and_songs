/*global define*/
define(function(){
	'use strict';

	var PIXI = require('pixi');
	var Basic = require('controllers/Basic');
	var TweenMax = require('TweenMax');

	function Point( content, mommy, queue ){




		Basic.call(this, content, mommy, queue, 'POINT');

		var _from = content.clone();
		var _to = content.clone();


		Object.defineProperty( this, 'getLetter', { value: this.mommy.mommy.mommy } );
		Object.defineProperty( this, 'getWord', { value: this.mommy.mommy.mommy.mommy } );


		Object.defineProperty( this, 'from', {
			get: function(){ return _from },
			set: function(value){ _from=value; },
		});
		Object.defineProperty( this, 'to', {
			get: function(){ return _to },
			set: function(value){ _to = value }
		});

		var me = this;
		Object.defineProperty( _from, '_x', {
			get: function(){ return _from.x+me.offsetX; }
		});
		Object.defineProperty( _to, '_x', {
			get: function(){ return _to.x+me.offsetX;  }
		});


		Object.defineProperty( _from, '_y', {
			get: function(){ return _from.y+me.offsetY; }
		});
		Object.defineProperty( _to, '_y', {
			get: function(){ return _to.y+me.offsetY;  }
		});







	}

	Point.prototype = Object(Basic.prototype);
	Point.prototype.constructor = Point;

	Point.prototype.tween = function(newFromPoint, time, delay){
		this.from = newFromPoint;
		TweenLite.to( this.from, time, { x:this.to.x, y:this.to.y, ease:Strong.easeOut, delay:delay });
	}





	return Point;


});


