/*global define*/
define(function(require){
	'use strict';


	var PIXI 		= require('pixi');
	var Signals 	= require('signals');
	var TweenLite 	= require('TweenLite');
	var Basic 		= require('controllers/Basic');
	var Point 		= require('controllers/Point.Controller');


	var RATIO = 500;

	var Line = function( content, mommy, queue ){

		this.content = content;
		this.id = "LINE";
		this.queue = queue;


		Basic.call(this, content);
		this.createChildren( Point, content );

		Object.defineProperty( this, 'p1', {get: function(){ return this.children[0] } });
		Object.defineProperty( this, 'p2', {get: function(){ return this.children[1] } });







		// var p1 = { from: _p1.clone(), to: _p1.clone() };
		// var p2 = { from: _p2.clone(), to: _p2.clone() };

		// this.offsets = {
		// 	word: new PIXI.Point(0,0),
		// 	message: new PIXI.Point(0,0)
		// }



		// var signals = {
		// 	onUpdate: new Signals(),
		// 	onComplete: new Signals()
		// }

		// Object.defineProperty( this, 'signals', {value:signals})
		// // Object.defineProperty( this, 'cloneP1', {get:function(){return this.p1.to.clone();}})




		// this.points = [this.p1, this.p2];

		// var dist = this.distance(p1.to, p2.to);
		// this.time = dist/RATIO;





	}

	Line.prototype = Object(Basic.prototype);
	Line.prototype.constructor = Line;



	// Line.prototype.offsetX = function(value){
	// 	this.p1.to.x += value;
	// 	this.p2.to.x += value;

	// }
	// Line.prototype.offsetY = function(value){
	// 	this.p1.to.y += value;
	// 	this.p2.to.y += value;
	// }

	// Line.prototype.prepareFrom = function(p1, p2){
	// 	this.p1.from = p1;
	// 	this.p2.from = p2;
	// }


	// Line.prototype.distance = function(p1, p2){
	// 	var xx = Math.pow((p2.x - p1.x), 2);
	// 	var yy = Math.pow((p2.y - p1.y), 2);
	// 	var distance = Math.sqrt(xx + yy);
	// 	return distance;
	// };

	// Line.prototype.animate = function( ){

	// 	var update = function(){
	// 		this.signals.onUpdate.dispatch( this.p1.from, this.p2.from );
	// 	}
	// 	var done = function(){
	// 		this.signals.onComplete.dispatch();
	// 	}

	// 	var ease = Sine.easeOut;
	// 	// p1

	// 	TweenLite.to( this.p1.from, this.time, {x:this.p1.to.x, y:this.p1.to.y,
	// 		ease: ease,

	// 		onComplete: done.bind(this),
	// 		onUpdate: update.bind(this)
	// 	});

	// 	//p2

	// 	TweenLite.to( this.p2.from, this.time, {x:this.p2.to.x, y:this.p2.to.y, ease: ease });
	// }




	return Line;

});








// var Lineeee = function( p1, p2, id){
	// 	this.id = id;
	// 	var _p1 = p1;
	// 	var _p2 = p2;

	// 	this.p1 = { from: p1.clone(), to: p1.clone() }

	// 	this.p2 = { from: p2.clone(), to: p2.clone() }



	// 	this.signals = {
	// 		onUpdate: new Signals(),
	// 		onComplete: new Signals()
	// 	}

	// 	// Object.defineProperty( this, 'signals', {value:signals})
	// 	Object.defineProperty( this, 'cloneP1', {get:function(){return this.p1.to.clone();}})




	// 	this.points = [this.p1, this.p2];

	// 	var dist = this.distance(this.p1.to, this.p2.to);
	// 	this.time = dist/RATIO;




	// }