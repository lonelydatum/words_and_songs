/*global define*/
define(function(require){
	'use strict';

	var PIXI = require('pixi');
	var _ = require('_');

	var Line = function(p1, p2){
		this.p1 = p1;
		this.p2 = p2;
	}

	var parseLetter = function(letter){
		var strokes = letter.points
		var newStrokes = [];



		_.forEach(strokes, function(strokeItem){
			var newStroke = [];
			newStrokes.push(newStroke);
			var twoPoints = [];
			var lines = [];

			_.forEach(strokeItem, function(pointItem){
				var point = new PIXI.Point(pointItem[0], pointItem[1]);
				// newStroke.push(point);

				twoPoints.push(point);


				// we need 2 points to draw a line
				if(twoPoints.length===2){
					var line = [twoPoints[0], twoPoints[1]];
					// now that we have already draw the line from the 2 elements in the array,
					// lets remove just the first element and move the second to the first index.
					twoPoints.splice(0, 1);
					lines.push(line);
					newStroke.push(line);
				}





			})

		})

		letter.parsed = newStrokes;




	}


	var Font = {

		settings: {
			supportsUpperCase: true,
			supportsLowerCase: false
		},


		getCharacter: function(character){
			var abc = this.characters.abc;

			if(!abc[character]){
				if(!this.settings.supportsUpperCase && this.settings.supportsLowerCase){
					character = character.toLowerCase();
				}else if(this.settings.supportsUpperCase && !this.settings.supportsLowerCase){
					character = character.toUpperCase();
				}

			}
			if(abc[character]){
				return abc[character];
			}else{
				return this.characters.special.notfound;
			}

		},

		parse: function(){
			var abc = this.characters.abc;
			_.forEach(abc, parseLetter)

		},





		characters:{
			special:{
				notfound: {
					id: 'notfound',
					points: [ [[], [] ] ]
				}
			},
			abc:{
				A: {
					id: 'A',
					points: [ [[0, 200], [73,0], [150,200]], [[39,100], [113,100] ] ]
				},
				B: {
					id: 'B',
					points: [ [[0,200],[0,0],[150,50],[30,100],[150,150],[0,200]] ]
				},
				C: {
					id: 'C',
					points: [ [[150,50],[80,0],[0,100],[80,200],[150,150]] ]
				},
				D: {
					id: 'D',
					points: [ [[0,200],[0,0],[100,50],[100,150],[0,200]] ]
				},
				E: {
					id: 'E',
					points: [ [[0,0],[0,200]], [[0,0],[125,0]], [[0,100],[75,100]], [[0,200],[125,200]] ]
				},
				F: {
					id: 'F',
					points: [ [[0,0],[0,200]], [[0,0],[125,0]], [[0,100],[75,100]] ]
				},
				G: {
					id: 'G',
					points: [ [[150,50],[80,0],[0,100],[80,200], [150,100], [80,100]]]
				},
				H: {
					id: 'H',
					points: [ [ [0,0], [0,200] ], [ [125,0], [125,200] ], [ [0,100], [125,100] ] ]
				},
				I: {
					id: 'I',
					points: [ [ [0,0], [0,200] ] ]
				},

				J: {
					id: 'J',
					points: [ [ [0,0], [125,0] ], [ [67,0], [67,200], [0,180], [0,160] ] ]
				},

				K: {
					id: 'K',
					points: [ [ [0,0], [0,200] ], [ [125,0], [0,100], [125,200] ] ]
				},

				L: {
					id: 'L',
					points: [ [ [0,0], [0,200], [125,200] ] ]
				},

				M: {
					id: 'M',
					points: [ [ [0,200], [0,0], [75,100], [150,0], [150,200] ] ]
				},


				N: {
					id: 'N',
					points: [ [ [0,200], [0,0], [150,200], [150,200], [150,0] ] ]
				},

				O: {
					id: 'O',
					points: [ [ [125,0], [0,0], [0,200], [125,200], [125,0] ] ]
				},

				P: {
					id: 'P',
					points: [ [ [0,0], [0,200] ], [ [0,0], [125,0], [125,100], [0,100] ] ]
				},


				Q: {
					id: 'Q',
					points: [ [ [125,0], [0,0], [0,200], [125,200], [125,0] ], [ [67,170], [125,225] ] ]
				},

				R: {
					id: 'R',
					points: [ [ [0,0], [0,200] ], [ [0,0], [125,0], [125,100], [0,100] ], [[67,100], [125,200]] ]
				},

				S: {
					id: 'S',
					points: [ [ [125,0], [0,0], [0,100], [125,100], [125,200], [0,200] ] ]
				},

				T: {
					id: 'T',
					points: [ [ [0,0], [125,0] ], [ [67,0], [67,200] ] ]
				},

				U: {
					id: 'U',
					points: [ [ [0,0], [0,200], [125,200], [125,0] ] ]
				},

				V: {
					id: 'V',
					points: [ [ [0,0], [67,200], [125,0] ] ]
				},

				W: {
					id: 'W',
					points: [ [ [0,0], [54,200], [100,0], [153,200], [200,0] ] ]
				},

				X: {
					id: 'X',
					points: [ [ [0,0], [125,200] ], [[125,0], [0,200]] ]
				},

				Y: {
					id: 'Y',
					points: [ [ [0,0], [67,100], [125,0] ], [[67,100], [67,200]] ]
				},

				Z: {
					id: 'Z',
					points: [ [ [0,0], [125,0], [0,200], [125,200] ] ]
				}

			},
		}
	};


	return Font;
});