/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');
	var Common = require('data/Common');

	var _stage = null;
	var _container;
	var _graphics;

	var Letter = function( data ){
		this.data = data;
		_container = new PIXI.DisplayObjectContainer();
		_graphics = new PIXI.Graphics();
		_stage = Common.stage;

		_stage.addChild(_container);
		makeLetter(this.data);


	}


	function makeLetter(letter){

		// _x = (letter.x/1) + 20;
		var timeline = new TimelineMax();
		letter.font.points.forEach(function(line){
			var tl = letterStroke(letter, line);
			timeline.add(tl);
		});
		return timeline;
	}

	function letterStroke(letter, points){

		var prev = null;
		var pairCurr = [];
		var pairPrev = [];

		var timeline = new TimelineMax();

		points.forEach(function(p, index){


			pairCurr.push(p);

			// we need to points to draw a line
			if(pairCurr.length===2){
				var p1 = new PIXI.Point(pairCurr[0][0], pairCurr[0][1]);
				var p2 = new PIXI.Point(pairCurr[1][0], pairCurr[1][1]);

				var tween = animateLine(p1, p2);
				console.log(tween);

				timeline.add(tween);
				// now that we have already draw the line from the 2 elements in the array,
				// lets remove just the first element and move the second to the first index.
				pairCurr.splice(0, 1);
			}
		})

		return timeline;


	}

	var _drawnAlready = [];

	function animateLine(p1, p2){


		var line = [p1, p2];
		_drawnAlready.push(line);

		var xx = Math.pow((p2.x - p1.x), 2);
		var yy = Math.pow((p2.y - p1.y), 2);
		var dist = Math.sqrt(xx + yy);
		var ratio = 300;
		var time = dist/ratio;




		var p = p1.clone();






		// graphics.x = _x;
		// graphics.y = _y;

	    var tween = TweenMax.to(p,time,{x:p2.x, y:p2.y, onUpdate:function(){
	    	_graphics.clear();
	    	_graphics.lineStyle(7, 0xffffff, 1);
	    	_drawnAlready.forEach( function(lineItem){

	    		_graphics.moveTo(lineItem[0].x, lineItem[0].y);
	    		_graphics.lineTo(lineItem[1].x, lineItem[1].y);
	    	} )

			_graphics.moveTo(p1.x, p1.y);
	    	_graphics.lineTo(p.x, p.y);
	    	_graphics.endFill();

	    	// console.log(_container);


	    }});

	    _container.addChild(_graphics);





	    return tween;
	}


	return Letter;
});