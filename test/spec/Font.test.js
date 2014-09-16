/* global define, describe, it */
/* jshint loopfunc:true */
define(function(require){
	'use strict';


	var Font = require('data/Font');
	var expect = require('chai').expect;




	describe('Font bitches', function() {

		var _abc = Font.characters.abc;

		describe('Font Basics', function() {


			it('all fonts should have width, height', function(){
				for (var key in _abc) {
					expect(_abc[key]).to.have.property('width');
					expect(_abc[key]).to.have.property('height');
				}
			});


			it('the key and id should match', function(){
				for (var key in _abc) {
					expect(_abc[key].id).to.equal(key);
				}
			});

			it('supports at least upperCase and lowercase', function(){
				expect( (Font.settings.supportsUpperCase || Font.settings.supportsLowerCase) ).to.equal(true);
			});

			it('structure: [ [[x,y]] ]', function(){
				for (var key in _abc) {
					var points = _abc[key].points;
					points.forEach(function(item){
						item.forEach(function(xy){
							expect(xy).to.be.instanceof(Array);
						});
					});
				}
			});

			it('has at least 1 line', function(){

				for (var key in _abc) {
					var points = _abc[key].points;
					expect(points.length).to.be.at.least(1);
				}
			});





		});


	});


});