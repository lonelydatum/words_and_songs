/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word.Controller');
	var Basic = require('controllers/Basic');
	var Common = require('data/Common');


	function Message( content, mommy, queue ){
		Basic.call(this, content, mommy, queue, 'MESSAGE');
		this.createChildren( Word, content.split(' ') );

		var _x = 0;
		var _y = 0;
		var _max = { width:Common.stageWidth , height: Common.stageHeight };

		this.children.forEach( function(wordItem){
			//is there enough space on this line
			if(_x + wordItem.width > _max.width){
				_x = 0;
				_y += 200 + 50;
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