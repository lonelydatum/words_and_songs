/*global define*/
define(function(require){
	'use strict';


	var PIXI 		= require('pixi');
	var Basic 		= require('controllers/Basic');
	var Point 		= require('controllers/Point.Controller');


	var RATIO = 500;

	var Line = function( content, mommy, queue ){
		Basic.call(this, content, mommy, queue, 'LINE');
		this.createChildren( Point, content );
		var point_1 = this.children[0];
		var point_2 = this.children[1];


		Object.defineProperty( this, 'p1', {get: function(){ return point_1 } });
		Object.defineProperty( this, 'p2', {get: function(){ return point_2 } });
		Object.defineProperty( this, 'getLetter', { value: this.mommy.mommy } );
		Object.defineProperty( this, 'getWord', { value: this.mommy.mommy.mommy } );
	}

	Line.prototype = Object(Basic.prototype);
	Line.prototype.constructor = Line;

	return Line;
});
