/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');
	var TweenMax = require('TweenMax');
	var Signals = require('signals');


	var LineByLineAnimation = require('animations/LineByLine');
	var AllLinesAnimation = require('animations/All');
	var Common = require('data/Common');
	var Basic = require('views/Basic.View');









	var Letter = function( data, mommy ){

		Basic.call(this, data, mommy);

		var _data = data;
		var _index = -1;
		var _graphics = new PIXI.Graphics();



		var _signal = {
			doneAnimate: new Signals()
		}

		Object.defineProperty(this, 'content', { get: function() { return _data.content; } });
		Object.defineProperty(this, 'width', { get: function() { return _data.width+_data.padding; } });
		Object.defineProperty(this, 'height', { get: function() { return _data.height; } });
		Object.defineProperty(this, 'onDoneAnimate', { get: function() { return _signal.doneAnimate; } });
		// Object.defineProperty(this, 'xPos', { get: function() { return _data.x; } });
		Object.defineProperty(this, 'data', { get: function() { return _data; } });
		Object.defineProperty(this, 'graphics', { get: function() { return _graphics; }	});
		Object.defineProperty(this, 'index', {
			get: function() { return _index; },
			set: function(value) { _index = value; }
		});







		this.addChild( this.graphics);

		this.showBoundingBox = true;



	}

	Letter.prototype = Object.create( Basic.prototype );
	Letter.prototype.constructor = Letter;


	Letter.prototype.startAnimation = function(){
		var animation = this.lineByLine();


		// var animation = this.animateAllLines();

		animation.animate();
		animation.signals.done.addOnce(function(){
			this.onDoneAnimate.dispatch();
		}, this)

	}

	Letter.prototype.animateAllLines = function(){
		var xx = this.mommy.rect.width - this.x;
		var yy = this.mommy.rect.height - this.y;

		var a = new AllLinesAnimation(this.graphics, this.data.lines);
		a.x = xx/2;
		a.y = yy/2;
		return a;

	}




	Letter.prototype.lineByLine = function(){
		return  new LineByLineAnimation(this.graphics, this.data.lines);
	}





	return Letter;
});