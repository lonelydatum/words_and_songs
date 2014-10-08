/*global define*/
define(function(){
	'use strict';

	var PIXI = require('pixi');

	var Basic = function( data, mommy ){

		PIXI.DisplayObjectContainer.call(this);

		this.mommy = mommy;

		var _data = data;
		Object.defineProperty( this, 'rect', { get: function(){return _data.rect} } );
		Object.defineProperty( this, 'showBoundingBox', { set: function(boo){ _graphics.visible = boo; } } );



		//bounding box
		var _graphics = new PIXI.Graphics();
		_graphics.lineStyle(1, 0x00FF00, .1);
		_graphics.drawRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
		this.addChild( _graphics );







		this.showBoundingBox = false;

	}

	Basic.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
	Basic.prototype.constructor = Basic;




	return Basic;

});