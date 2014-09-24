/*global define, requestAnimFrame*/
define(function(require){
	'use strict';
	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');



	var Common = require('data/Common');
	var Message = require('controllers/Message');
	var Letter = require('views/Letter');



	var _stage;
	var _renderer;
	var _story;

	var _x = 0;
	var _y = 20;

	function Paper( story ){
		_story = story;
		Common.stage = new PIXI.Stage(0x000000);
		_stage = Common.stage;
		_renderer = PIXI.autoDetectRenderer(1700, 1000);
		document.body.appendChild(_renderer.view);
		requestAnimFrame(animate);
		makeMessage();

	}

	function makeMessage(){
		var message = _story.messages(0);
		var timeline = new TimelineMax();
		message.children.list.forEach(function(word){
			var tl = makeWord(word);
			timeline.add(tl);
		})


	}

	function makeWord(word){


		var timeline = new TimelineMax();
		word.children.list.forEach(function hey	(letterData){
			var letter = new Letter( letterData );
			// var tl = makeLetter( letterData );
			// timeline.add(tl);
		});
		_y += (300/1);
		return timeline;
	}

	// function makeLetter(letter){

	// 	_x = (letter.x/1) + 20;
	// 	var timeline = new TimelineMax();
	// 	letter.font.points.forEach(function(line){			
	// 		var tl = letterStroke(letter, line);
	// 		timeline.add(tl);
	// 	});
	// 	return timeline;
	// }

	// function letterStroke(letter, points){
		
	// 	var prev = null;
	// 	var pairCurr = [];
	// 	var pairPrev = [];

	// 	var timeline = new TimelineMax();

	// 	points.forEach(function(p, index){
			

	// 		pairCurr.push(p);

	// 		// we need to points to draw a line
	// 		if(pairCurr.length===2){
	// 			var p1 = new PIXI.Point(pairCurr[0][0], pairCurr[0][1]);
	// 			var p2 = new PIXI.Point(pairCurr[1][0], pairCurr[1][1]);
				
	// 			var tw = animateLine(p1, p2);

	// 			timeline.add(tw.tween);
	// 			// now that we have already draw the line from the 2 elements in the array, 
	// 			// lets remove just the first element and move the second to the first index.
	// 			pairCurr.splice(0, 1);
	// 		}
	// 	})

	// 	return timeline;


	// }

	// function animateLine(p1, p2){



	// 	var xx = Math.pow((p2.x - p1.x), 2);
	// 	var yy = Math.pow((p2.y - p1.y), 2);
	// 	var dist = Math.sqrt(xx + yy);
	// 	var ratio = 300;
	// 	var time = dist/ratio;




	// 	var p = p1.clone();


	// 	var graphics = new PIXI.Graphics();

	// 	// graphics.scale.x = .5;
	// 	// graphics.scale.y = .5;

	// 	graphics.x = _x;
	// 	graphics.y = _y;

	//     var tw = TweenMax.to(p,time,{x:p2.x, y:p2.y, onUpdate:function(){
	//     	graphics.clear();
	//     	graphics.lineStyle(3, 0xffffff, 1);
	// 		graphics.moveTo(p1.x, p1.y);
	//     	graphics.lineTo(p.x, p.y);
	//     	graphics.endFill();
	// 		_stage.addChild(graphics);

	//     }});



	//     return {tween:tw, graphics:graphics};
	// }


	function animate() {
	    requestAnimFrame( animate );
	    _renderer.render( _stage );
	};

	return Paper;
});