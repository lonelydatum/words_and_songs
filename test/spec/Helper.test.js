/* global define, describe, it, beforeEach */
define(function(require){
	'use strict';


	var Message = require('controllers/Message');




	describe('Message bitches', function() {

		var _message = null;
		beforeEach(function(){
			_message = Message.create('Row row row your boat.', 0, 4);
		});


		it('test the total words', function() {
			_message.list.should.have.length(5);
			console.log(_message);
		});
	});


});