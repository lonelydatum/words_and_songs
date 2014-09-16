/* global define, xdescribe, describe, it, beforeEach */
define(function(require){
	'use strict';

	var expect = require('chai').expect;
	var Message = require('controllers/Message');




	describe('Message', function() {

		var _message = null;
		var _dna = 'One two three your boat.';

		beforeEach(function(){
			_message = new Message(_dna, 0, 4);
		});




		describe('Message basics', function() {
			it('has property queueMe, queueTotal', function() {
				console.log(_message);
				expect(_message).to.have.property('queueMe');
				expect(_message).to.have.property('queueTotal');

				expect(_message).to.have.property('list');
				expect(_message).to.have.property('dna');
			});

			it('queueMe===0', function() {
				expect(_message.queueMe).to.equal(0);
				expect(_message.queueTotal).to.equal(4);
			});
		});

		describe('Message children', function() {
			it('list is an array', function() {
				expect(_message.list).to.be.instanceof(Array);
			});
			it('total words in message', function() {
				expect(_message.list.length).to.be.equal(5);
			});

			it('The first word has no chain', function() {
				expect(_message.list[0].chain).to.be.undefined;
			});
			it('The second word is chained to the first word', function() {
				expect(_message.list[1].chain).to.equal(_message.list[0]);
			});




		});



	});




});