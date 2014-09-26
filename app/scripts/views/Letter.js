/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');
	var Signals = require('signals');

	
	var Common = require('data/Common');

	
	

	
	
	
	var RATIO_SPEED = 555;

	var Letter = function( data ){

		PIXI.DisplayObjectContainer.call(this);

		var _data = data;
		var _index = -1;
		var _graphics = new PIXI.Graphics();	
		var _signal = {
			doneAnimate: new Signals()
		} 
		
		Object.defineProperty(this, 'content', { get: function() { return _data.content; } });
		Object.defineProperty(this, 'width', { get: function() { return _data.width+_data.padding; } });
		Object.defineProperty(this, 'onDoneAnimate', { get: function() { return _signal.doneAnimate; } });
		Object.defineProperty(this, 'xPos', { get: function() { return _data.x; } });
		Object.defineProperty(this, 'data', { get: function() { return _data; } });
		Object.defineProperty(this, 'graphics', { get: function() { return _graphics; }	});
		Object.defineProperty(this, 'index', {
		    get: function() { return _index; },
		    set: function(value) { _index = value; },
		});
		


		
		

		this.linesThatHaveAlreadyBeenDrawn = [];
		this.addChild( this.graphics);
		


	}

	Letter.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
	Letter.prototype.constructor = Letter;

	
	Letter.prototype.startAnimation = function(){
		this.animateNextLine();
	}

	Letter.prototype.animateNextLine = function(){
		this.index++;
		var nextLine = this.data.lines[this.index];

		


		if(nextLine) {
			var signals = nextLine.animate( nextLine.getTime( RATIO_SPEED ) );
			signals.onUpdate.add(function(ppp){
				 this.graphics.clear();
		    	 this.graphics.lineStyle(1, 0xffffff, 1);
		    	this.linesThatHaveAlreadyBeenDrawn.forEach( function(lineItem){	    		
		    		 this.graphics.moveTo(lineItem[0].x, lineItem[0].y);
		    		 this.graphics.lineTo(lineItem[1].x, lineItem[1].y);
		    	}, this )

				 this.graphics.moveTo(nextLine.p1.x, nextLine.p1.y);
		    	 this.graphics.lineTo(ppp.x, ppp.y);
		    	 this.graphics.endFill();

				
			}, this);

			signals.onComplete.add(function(p){			
				this.linesThatHaveAlreadyBeenDrawn.push(nextLine.points);
				this.animateNextLine();
			}, this);
		}else{
			this.onDoneAnimate.dispatch()
			// no more to animate
		}
	}




	return Letter;
});