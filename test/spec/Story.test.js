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


		var _storyContent = [ 'Row row row your boat.', 'Gently down the stream.', 'Merrily Merrily Merrily Merrily Merrily.', 'Life is but a dream.' ];


		beforeEach(function(){

			var s = new Story( _storyContent );
			_messages = s.list;

		});






		describe('Messages', function(){
			it('has a total messages of 4', function() {
				expect(_messages).to.have.length(4);
			});

			it('\"Row row row your boat.\" has 5 words', function() {
				_firstMessage = _messages[0];
				expect(_firstMessage.list).to.have.length(5);
			});


			describe('Words', function(){
				it('\"Row\" has 3 letters', function() {
					_firstWord = _firstMessage.list[0];
					expect(_firstWord.list).to.have.length(3);
				});



				describe('Letters', function(){
					it('R is a string', function() {
						_firstLetter = _firstWord.list[0];
						expect(_firstLetter.dna).to.be.a('string');
					});

					it('R is === R', function() {
						expect(_firstLetter.dna).to.equal('R');
					});

					it('R queueMe === 0', function() {
						console.log(_firstLetter);
						expect(_firstLetter.queueMe).to.equal(0);
					});
				});

			});
		});


		describe('Helper', function(){
			it('second Message, Word, Letter is same as the first', function() {
				var message_ = _messages[1].chain.dna;
				var wordRow = _firstMessage.list[1].chain.dna;
				var letterR = _firstWord.list[1].chain.dna;
				expect(wordRow).to.equal(_firstWord.dna);
				expect(letterR).to.equal(_firstLetter.dna);
				expect(message_).to.equal(_messages[0].dna);
			});

			it('first Message, Word, Letter is undefined', function() {
				expect(_firstMessage.chain).to.undefined;
				expect(_firstWord.chain).to.undefined;
				expect(_firstLetter.chain).to.undefined;
			});
		});








	});


});