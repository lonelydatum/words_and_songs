/*global define*/
define(function( require ){
	'use strict';

	var Signals = require('signals');
	var TimelineMax = require('TimelineMax');


	var TweenController = function(){

	}

	TweenController.prototype.lines = function(lines){
		var doneCount = 0;
		var obj = {signalsList:[], signalDone:new Signals()}
		var tl = new TimelineMax({
			onCompleteScope:this,
			onComplete:function(){
				obj.signalDone.dispatch();
			}});

		tl.pause();
		lines.forEach(function(lineItem, index){
			var percent = (index+1)/lines.length;
			var delay = percent * 2;
			var speed = 200;
			var signals = lineItem.p2.signals;
			var tween = lineItem.p2.tween( 'FROM_SIBLING_TO_HERE', speed, delay );
			signals.tweenDone.add(function(){
				doneCount++;
				if(doneCount === lines.length){
					obj.signalDone.dispatch();
				}
			})
			// tl.append( tween, 0 );
		});

		// tl.play();
		return obj.signalDone;
	}

	// function onTweenDone( point ){

	// 	point.signals.tweenDone.active = false;
	// 	var isAllDone = _.every(this.signalsList, function(signalItem){
	// 		return (!signalItem.tweenDone.active);
	// 	})

	// 	if(isAllDone){
	// 		console.log('-------------------------');
	// 		this.signalDone.dispatch();
	// 	}
	// }



	return TweenController;
});