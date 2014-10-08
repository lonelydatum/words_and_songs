/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');

	var Basic = require('animations/Basic.Animation');


	var AnimationAllLines = function( graphics, lines, rect ){
		Basic.call(this, graphics, lines);
		this.x = 0;
		this.y = 0;





	}
	AnimationAllLines.prototype = Object.create( Basic.prototype );
	AnimationAllLines.prototype.constructor = AnimationAllLines;

	AnimationAllLines.prototype.animate = function( ){
		this.start();
	}



	AnimationAllLines.prototype.start = function( line ){
		var p1From = new PIXI.Point(this.x,this.y);
		var p2From = new PIXI.Point(this.x,this.y);

		var line = this.lines[0];

		line.signals.onUpdate.add( function(){
			//draw start
			this.graphics.clear();
			this.graphics.lineStyle(1, 0xffffff, 1);

			// check all lines and draw updates
			this.lines.forEach(function(lineItem){
				var p1 = lineItem.p1.from;
				var p2 = lineItem.p2.from;
				this.graphics.moveTo(p1.x, p1.y);
				this.graphics.lineTo(p2.x, p2.y);

			}, this)

			this.graphics.endFill();
		} , this );


		line.signals.onComplete.add( function(){
			this.signals.done.dispatch( this );
		}, this );


		this.lines.forEach(function(lineItem){
			lineItem.time = 1;
			lineItem.prepareFrom( p1From.clone(), p2From.clone() );
			lineItem.animate();
		}, this);


	}


	return AnimationAllLines;


});