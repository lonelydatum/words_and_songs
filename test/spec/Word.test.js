/*global define*/
define(function(require){
	'use strict';


	var Word = require('controllers/Word');
	var expect = chai.expect;



	describe('Word bitches', function() {

		var _dna = 'Row'
		var _word = Word.create(_dna, 0, 4);


		beforeEach(function(){ });


		describe('Word Basics', function() {
			it('the word can not contain spaces', function() {
		 		expect(_word.dna).to.not.contain(' ');
		    });

		 	it('the word to be Row', function() {
		 		expect(_word.dna).to.equal('Row');
		    });

		    it('3 letters', function() {
		 		expect(_word.list.length).to.equal(_dna.split('').length);
		    });
		});


	    describe('Word Children', function() {
	    	it('first letter doesnt have chain', function() {
		 		expect(_word.list[0].chain).to.be.undefined;
		    });
		    it('second letter is the same as the first', function() {
		 		expect(_word.list[1].chain).to.equal(_word.list[0]);
		    });
	    });




	 });


});