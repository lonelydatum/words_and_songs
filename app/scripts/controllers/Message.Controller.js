/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word.Controller');
	var Basic = require('controllers/Basic');



	function Message( content, mommy, queue ){

		this.id = 'MESSAGE';
		this.mommy = mommy;
		this.queue = queue;

		var _max = { width: 1500, height: 800 };

		Basic.call(this, content);
		this.createChildren( Word, content.split(' ') );



		var _x = 0;
		var _y = 0;

		this.children.forEach( function(wordItem){

			//is there enough space on this line

			console.log((_x + wordItem.width));
			if(_x + wordItem.width < _max.width){
				//enough space

			}else{
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