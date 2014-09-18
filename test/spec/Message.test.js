/* global define, describe, it, beforeEach */
/*jshint expr:true */
define(function(require){
	'use strict';

	var expect = require('chai').expect;
	var Message = require('controllers/Message');




	describe('Message', function() {

		
		
		


		describe('Message basics', function() {
			var q = {me:0, total:4};
			var m = new Message( 'One two three your boat.', null, q );
			it('has property queueMe, queueTotal', function() {
				
				console.log(m);
				expect(m).to.have.property('queue');
				expect(m.queue).to.have.property('me');
				expect(m.queue).to.have.property('total');
				
				expect(m).to.have.property('children');
				expect(m.children).to.have.property('list');
				expect(m.children).to.have.property('module');
				
			});

			it('queueMe===0', function() {
				expect(m.queue.me).to.equal(0);
				expect(m.queue.total).to.equal(4);
			});
		});

		describe('Message children', function() {
			var q = {me:0, total:4};
			var m = new Message( 'One two three your boat.', null, q );

			it('list is an array', function() {
				expect(m.children.list).to.be.instanceof(Array);
			});
			it('total words in message', function() {
				expect(m.totalChildren).to.be.equal(5);
			});

			it('The first word has no chain', function() {
				expect(m.words(0).chain).to.be.undefined;
			});
			it('The second word is chained to the first word', function() {
				expect(m.words(1).chain).to.equal(m.words(0));
			});
		});


	});




});