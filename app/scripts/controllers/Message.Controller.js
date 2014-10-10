/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word.Controller');
	var Basic = require('controllers/Basic');
	var Common = require('data/Common');
	var Style = require('data/Style');


	function Message( content, mommy, queue ){
		Basic.call(this, content.message, mommy, queue, 'MESSAGE');

		this.playAt = content.playAt;
		this.readDuration = content.readDuration;

		this.createChildren( Word, content.message.split(' ') );

		var _x = 0;
		var _y = 0;
		var _max = { width:Common.stageWidth , height: Common.stageHeight };

		this.children.forEach( function(wordItem){
			//is there enough space on this line
			// console.log(wordItem.content, _x + wordItem.width);
			if(_x + wordItem.width > _max.width){
				_x = 0;
				_y += 200 + Style.leading;
			}
			wordItem.offsetX = _x;
			wordItem.offsetY = _y;

			_x += wordItem.width + 80;
		}, this );
	}

	Message.prototype = Object(Basic.prototype);
	Message.prototype.constructor = Message;
	Message.prototype.words = function(index){
		return this.getChildAt(index);
	}


	return Message;

});