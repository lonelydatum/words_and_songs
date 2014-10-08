/*global define*/
define(function(){
	'use strict';

	var PIXI = require('pixi');
	var Basic = require('controllers/Basic');
	var TweenMax = require('TweenMax');
	var Signals = require('signals');

	function Point( content, mommy, queue ){

		var _signals = {
			tweenDone: new Signals()
		}


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
		Object.defineProperty( this, 'signals', { value: _signals });







	}

	Point.prototype = Object(Basic.prototype);
	Point.prototype.constructor = Point;

	Point.prototype.tween = function(fromPointType, speed, delay ){

		this.signals.tweenDone.active = true;

		var fromTo = this[ fromPointType ]();

		this.from.x = fromTo.from.x;
		this.from.y = fromTo.from.y;
		this.to.x = fromTo.to.x;
		this.to.y = fromTo.to.y;


		var xx = (fromTo.from.x-fromTo.to.x);
		var yy = (fromTo.from.y-fromTo.to.y);
		var distance = Math.sqrt(Math.pow(xx, 2) + Math.pow(yy, 2));

		var time = distance/speed;




		var tween = TweenLite.to( this.from, time, {
			x:fromTo.to.x,
			y:fromTo.to.y,
			delay: delay,
			ease:Strong.easeOut,
			onCompleteScope: this,
			onComplete: function(){

				this.signals.tweenDone.dispatch(this);

			}
		})


		return tween;

	}

	Point.prototype.reset = function(){
		this.from = this.content.clone();
		this.to = this.content.clone();
	}

	Point.prototype.FROM_SIBLING_TO_HERE = function(){
		// this only works if this point is P2
		if(this.queue.me===1){
			return {from:this.sibling[0].to, to:this.to};
		}else{
			throw "This current point is not P2. I know this because it has a chain."
		}
	}

	Point.prototype.FROM_HERE_TO_SIBLING = function(){
		// this only works if this point is P2
		if(this.queue.me===1){
			return {from:this.to, to:this.sibling[0].content};
		}else{
			throw "This current point is not P2. I know this because it has a chain."
		}
	}





	return Point;


});


