/*global define*/
define(function( require ){
	'use strict';

	var PIXI = require('pixi');
	var Word = require('views/Word');

	var _signalTicker = require('common/Everywhere').signals.ticker;

	var Message = function (messageData){

		PIXI.DisplayObjectContainer.call(this);


		// var _w = 0;

		// messageData.children.list.forEach(function(wordData){
		// 	var word = new Word(wordData);

		// 	word.x = _w;
		// 	// console.log(word.x);
		// 	_w += word.width + 88;
		// 	this.addChild( word );

		// }, this);

		// _signalTicker.add(function(){

		// })





	}


	Message.prototype = Object.create( PIXI.DisplayObjectContainer.prototype );
	Message.prototype.constructor = Message;

	return Message;

});