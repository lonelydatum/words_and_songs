/*global define*/
define(function(){
	'use strict';
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

			return abc[character];
		},

		characters:{
			abc:{
				A: {
					id: 'A',
					width: 159,
					height: 200,
					points: [ [[0, 200], [73,0], [150,200]], [[39,100], [113,100] ] ]
				},
				B: {
					id: 'B',
					width: 150,
					height: 200,
					points: [ [[0,200],[0,0],[150,50],[30,100],[150,150],[0,200]] ]
				},
				C: {
					id: 'C',
					width: 150,
					height: 200,
					points: [ [[150,50],[80,0],[0,100],[80,200],[150,150]] ]
				},
				D: {
					id: 'D',
					width: 100,
					height: 200,
					points: [ [[0,200],[0,0],[100,50],[100,150],[0,200]] ]
				},
				E: {
					id: 'E',
					width: 125,
					height: 200,
					points: [ [[0,0],[0,200]], [[0,0],[125,0]], [[0,100],[75,100]], [[0,200],[125,200]] ]
				},
				F: {
					id: 'F',
					width: 125,
					height: 200,
					points: [ [[0,0],[0,200]], [[0,0],[125,0]], [[0,100],[75,100]] ]
				},
				G: {
					id: 'G',
					width: 125,
					height: 200,
					points: [ [[150,50],[80,0],[0,100],[80,200], [150,100], [80,100]]]
				},
				H: {
					id: 'H',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200] ], [ [125,0], [125,200] ], [ [0,100], [125,100] ] ]
				},
				I: {
					id: 'I',
					width: 1,
					height: 200,
					points: [ [ [0,0], [0,200] ] ]
				},

				J: {
					id: 'J',
					width: 125,
					height: 200,
					points: [ [ [0,0], [125,0] ], [ [67,0], [67,200], [0,180], [0,160] ] ]
				},

				K: {
					id: 'K',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200] ], [ [125,0], [0,100], [125,200] ] ]
				},

				L: {
					id: 'L',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200], [125,200] ] ]
				},

				M: {
					id: 'M',
					width: 150,
					height: 200,
					points: [ [ [0,200], [0,0], [75,100], [150,0], [150,200] ] ]
				},


				N: {
					id: 'N',
					width: 150,
					height: 200,
					points: [ [ [0,200], [0,0], [150,200], [150,200], [150,0] ] ]
				},

				O: {
					id: 'O',
					width: 125,
					height: 200,
					points: [ [ [125,0], [0,0], [0,200], [125,200], [125,0] ] ]
				},

				P: {
					id: 'P',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200] ], [ [0,0], [125,0], [125,100], [0,100] ] ]
				},


				Q: {
					id: 'Q',
					width: 125,
					height: 200,
					points: [ [ [125,0], [0,0], [0,200], [125,200], [125,0] ], [ [67,170], [125,225] ] ]
				},

				R: {
					id: 'R',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200] ], [ [0,0], [125,0], [125,100], [0,100] ], [[67,100], [125,200]] ]
				},

				S: {
					id: 's',
					width: 125,
					height: 200,
					points: [ [ [125,0], [0,0], [0,100], [125,100], [125,200], [0,200] ] ]
				},

				T: {
					id: 'T',
					width: 125,
					height: 200,
					points: [ [ [0,0], [125,0] ], [ [67,0], [67,200] ] ]
				},

				U: {
					id: 'U',
					width: 125,
					height: 200,
					points: [ [ [0,0], [0,200], [125,200], [125,0] ] ]
				},

				V: {
					id: 'V',
					width: 125,
					height: 200,
					points: [ [ [0,0], [67,200], [125,0] ] ]
				},

				W: {
					id: 'W',
					width: 200,
					height: 200,
					points: [ [ [0,0], [54,200], [100,0], [153,200], [200,0] ] ]
				},

				X: {
					id: 'X',
					width: 125,
					height: 200,
					points: [ [ [0,0], [125,200] ], [[125,0], [0,200]] ]
				},

				Y: {
					id: 'Y',
					width: 125,
					height: 200,
					points: [ [ [0,0], [67,100], [125,0] ], [[67,100], [67,200]] ]
				},

				Z: {
					id: 'Z',
					width: 125,
					height: 200,
					points: [ [ [0,0], [125,0], [0,200], [125,200] ] ]
				}

			},
		}
	};


	return Font;
});