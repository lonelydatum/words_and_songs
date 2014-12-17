/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word.Controller');
	var Basic = require('controllers/Basic');
	var Common = require('data/Common');
	var Style = require('data/Style');
	var Font = require('data/Font');


	function Message( content, mommy, queue ){
		Basic.call(this, content.message, mommy, queue, 'MESSAGE');

		this.playAt = content.playAt;
		this.virgin = true;

		this.readDuration = content.readDuration;

		this.createChildren( Word, content.message.split(' ') );

		var _drawingArea = Style.drawingArea;
		var _x = _drawingArea.x;
		var _y = _drawingArea.y;
		var _max = { width:Style.stageWidth , height: Style.stageHeight };



		this.children.forEach( function(wordItem){
			//is there enough space on this line
			
			if(_x + wordItem.width > _drawingArea.width){
				_x = Style.drawingArea.x;
				_y += Font.height + Font.leading + 0;
			}
			wordItem.offsetX = _x;
			wordItem.offsetY = _y;

			_x += wordItem.width + Font.space;
		}, this );
	}

	Message.prototype = Object(Basic.prototype);
	Message.prototype.constructor = Message;
	Message.prototype.words = function(index){
		return this.getChildAt(index);
	}


	return Message;

});
