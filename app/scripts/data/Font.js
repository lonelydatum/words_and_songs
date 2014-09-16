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
					points: [ [[0,200],[0,0],[150,50],[0,100],[150,150]] ]
				}
			},
		}
	};


	return Font;
});