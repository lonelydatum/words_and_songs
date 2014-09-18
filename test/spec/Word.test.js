/*global define, it, describe, beforeEach*/
/*jshint expr:true */
define(function(require){
	'use strict';


	var Word = require('controllers/Word');
	var expect = require('chai').expect;



	describe('Word bitches', function() {

		var _dna = 'ABBA';
		var _word = null;




		_word = new Word(_dna, 0, 4);

		var _childrenList = _word.children.list;


		beforeEach(function(){

		});




		describe('Word Basics', function() {
			it('the word can not contain spaces', function() {
				expect(_word.content).to.not.contain(' ');
			});


			it('the word to be Row', function() {
				expect(_word.content).to.equal(_dna);
			});

			it('3 letters', function() {
				expect(_childrenList.length).to.equal(_dna.split('').length);
			});
		});


		describe('Word Children', function() {
			it('first letter doesnt have chain', function() {
				expect(_childrenList[0].chain).to.be.undefined;
			});
			it('second letter is the same as the first', function() {
				expect(_childrenList[1].chain).to.equal(_childrenList[0]);
			});
		});




	});


});