/*global define*/
define(function( require ){
	'use strict';




	var Basic = require('animations/Basic.Animation');


	var AnimationLineByLine = function( graphics, lines ){
		Basic.call(this, graphics, lines);

		this.index = -1;
		this.linesThatHaveAlreadyBeenDrawn = [];


		this.lines.forEach(function(lineItem){
			lineItem.prepareFrom( lineItem.p1.to.clone(), lineItem.p1.to.clone() );
		}, this);

	}

	AnimationLineByLine.prototype = Object.create( Basic.prototype );
	AnimationLineByLine.prototype.constructor = AnimationLineByLine;

	AnimationLineByLine.prototype.animate = function( ){
		this.animateNextLine();
	}

	AnimationLineByLine.prototype.drawALine = function( line ){
		line.signals.onUpdate.add(function(p1, p2){
			this.graphics.clear();
			this.graphics.lineStyle(1, 0xffffff, 1);
			this.linesThatHaveAlreadyBeenDrawn.forEach( function(lineItem){

				this.graphics.moveTo(lineItem[0].to.x, lineItem[0].to.y);
				this.graphics.lineTo(lineItem[1].to.x, lineItem[1].to.y);
			}, this )

			this.graphics.moveTo(p1.x, p1.y);
			this.graphics.lineTo(p2.x, p2.y);
			this.graphics.endFill();


		}, this);

		line.signals.onComplete.add(function(p){

			this.linesThatHaveAlreadyBeenDrawn.push(line.points);
			this.animateNextLine();
		}, this);

		line.animate();
	}

	AnimationLineByLine.prototype.animateNextLine = function( ){
		this.index++;
			var nextLine = this.lines[this.index];
			if(nextLine) {
				this.drawALine( nextLine )
			}else{
				this.signals.done.dispatch();
				// this.onDoneAnimate.dispatch()
				// no more to animate
			}
	}

		return AnimationLineByLine;
});