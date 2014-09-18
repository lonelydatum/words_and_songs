/* global define, describe, describe, it, beforeEach */
/*jshint expr:true */
define(function(require){
	'use strict';


	var Story = require('controllers/Story');
	var expect = require('chai').expect;

	describe('Story bitches', function() {
		var _messages = [];
		var _firstMessage;
		var _firstWord;
		var _firstLetter;


		// var _storyContent = [ 'Row row row your boat.', 'Gently down the stream.', 'Merrily Merrily Merrily Merrily Merrily.', 'Life is but a dream.' ];
		var _storyContent = [ 'abcdefghijk lmnopqrst uvwxyz' ];

		beforeEach(function(){

			var s = new Story( _storyContent );			
			_messages = s.children.list;

		});






		describe('Messages', function(){
			it('has a total messages of 4', function() {				
				var s = new Story( [ 'abcdefghijk lmnopqrst uvwxyz' ] );						
				expect(s.children.list.length).to.equal(1);
			});

			it('\"Row row row your boat.\" has 5 words', function() {
				var s = new Story( [ 'Row row row your boat' ] );
				expect(s.messages(0).totalChildren).to.equal(5);
			});


			describe('Words', function(){
				it('\"boat\" has 4 letters', function() {
					var s = new Story( [ 'Row row row your boat' ] );
					expect(s.messages(0).words(4).totalChildren).to.equal(4);
				});



				describe('Letters', function(){
					it('R is a string', function() {						
						var s = new Story( [ 'Row row row your boat' ] );						
						expect(s.messages(0).words(0).letters(0).content).to.be.a('string');
					});

					it('R is === R', function() {
						var s = new Story( [ 'Row row row your boat' ] );						
						expect(s.messages(0).words(0).letters(0).content).to.equal('R');
					});

					it('R queueMe === 0', function() {
						var s = new Story( [ 'Row row row your boat' ] );						
						expect(s.messages(0).words(0).letters(1).queue.me).to.equal(1);
					});
				});

			});
		});


		describe('Helper', function(){
			it('second Message, Word, Letter is same as the first', function() {
				var s = new Story( [ 'Row row row your boat', 'Gently down the stream' ] );
				// var message_ = _messages[1].chain.dna;
				// var wordRow = _firstMessage.list[1].chain.dna;
				// var letterR = _firstWord.list[1].chain.dna;
				
				expect(s.messages(1).chain).to.equal(s.messages(0));
				expect(s.messages(0).words(1).chain).to.equal(s.messages(0).words(0));
				expect(s.messages(0).words(0).letters(1).chain).to.equal(s.messages(0).words(0).letters(0));
				// expect(letterR).to.equal(_firstLetter.dna);
				// expect(message_).to.equal(_messages[0].dna);
			});

			it('first Message, Word, Letter is undefined', function() {
				var s = new Story( [ 'Row row row your boat', 'Gently down the stream' ] );
				expect(s.messages(0).chain).to.undefined;
				expect(s.messages(0).words(0).chain).to.undefined;
				expect(s.messages(0).words(0).letters(0).chain).to.undefined;
			});
		});








	});


});