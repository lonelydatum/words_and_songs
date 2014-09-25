/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');

	var Line = require('views/Line');
	var Common = require('data/Common');

	var _stage = null;
	var _container;
	var _graphics;
	var _index = -1;

	var Letter = function( data ){
		this.data = data;
		_container = new PIXI.DisplayObjectContainer();

		_graphics = new PIXI.Graphics();		
		_container.addChild(_graphics);
		_stage = Common.stage;

		_stage.addChild(_container);
		makeLetter(this.data);



	}

	
	function animateNext(){
		_index++;
		var line = _lines[_index];
		if(!line) {
			console.log(_index);
			return;
		}else{
			animateLine(line);
		}
	}


	function makeLetter(letter){
		var timeline = new TimelineMax();

		letter.font.points.forEach(function(line){			
			var line = letterStroke(line);
			_lines.push(line);
			// timeline.add(tl);

		});

		animateNext();
		
	}



	var _lines = [];

	function letterStroke(points){
		

		var prev = null;
		var twoPoints = [];
		

		var timeline = new TimelineMax();
		var line = null;

		points.forEach(function(p, index){


			twoPoints.push(p);

			// we need to points to draw a line

			if(twoPoints.length===2){
				var p1 = new PIXI.Point(twoPoints[0][0], twoPoints[0][1]);
				var p2 = new PIXI.Point(twoPoints[1][0], twoPoints[1][1]);
				line = new Line(p1, p2);
				
				

				
				
				// now that we have already draw the line from the 2 elements in the array, 

				// lets remove just the first element and move the second to the first index.
				twoPoints.splice(0, 1);
				
			}
		})

		return line;
		
	}


	
	var _____drawnAlready = [];


	function animateLine(liner){
		


		var dist = liner.distance();
		var ratio = 300;
		var time = dist/ratio;



		var signals = liner.animate();
		signals.onUpdate.add(function(ppp){
			_graphics.clear();
	    	_graphics.lineStyle(1, 0xffffff, 1);
	    	_____drawnAlready.forEach( function(lineItem){	    		
	    		_graphics.moveTo(lineItem[0].x, lineItem[0].y);
	    		_graphics.lineTo(lineItem[1].x, lineItem[1].y);
	    	} )

			_graphics.moveTo(liner.p1.x, liner.p1.y);
	    	_graphics.lineTo(ppp.x, ppp.y);
	    	_graphics.endFill();

			
		});

		signals.onComplete.add(function(p){			
			_____drawnAlready.push(liner.points);
			animateNext();
		});



	    _container.addChild(_graphics);





	}


	return Letter;
});