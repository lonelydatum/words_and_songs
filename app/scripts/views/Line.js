/*global define*/
define(function(require){
	'use strict';

	var Signals = require('signals');
	var TweenLite = require('TweenLite');

	var Line = function( p1, p2){
		this.p1 = p1;
		this.p2 = p2;
		this.points = [this.p1, this.p2];


		
	}


	Line.prototype.distance = function(){
		var xx = Math.pow((this.p2.x - this.p1.x), 2);
		var yy = Math.pow((this.p2.y - this.p1.y), 2);
		var distance = Math.sqrt(xx + yy);
		return distance;
	};

	Line.prototype.animate = function(){
		var p1Clone = this.p1.clone();
		var signals = {
			onUpdate: new Signals(),
			onComplete: new Signals()
		}
		var tween = TweenLite.to( p1Clone, 1, {x:this.p2.x, y:this.p2.y, 
			onComplete: function(){
				signals.onComplete.dispatch( )
			},
			onUpdate:function(){
				signals.onUpdate.dispatch( p1Clone )
			
		}})

		return signals;
	}

	

	return Line;

});