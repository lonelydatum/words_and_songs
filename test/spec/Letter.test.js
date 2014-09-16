/* global define, describe, it */
/*jshint expr:true */
define(function(require) {
	'use strict';
	// var Letter = require('controllers/Letter');
	var Font = require('data/Font');
	var expect = require('chai').expect;


	describe('Letter bitches', function() {



		describe('Letter Basics', function() {

			it('Font exist', function(){
				expect(Font).to.exist;
			});

			it('get letter A', function(){
				var upperCase = 'B';
				var _letterA = Font.getCharacter( upperCase );
				expect( _letterA.id ).to.exist;
			});

			it('only pass a single character', function(){
				var upperCase = 'A';
				var _letterA = Font.getCharacter( upperCase );
				expect( _letterA.id ).to.exist;
			});



		});


	});



});
