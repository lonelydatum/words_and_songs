/*global define*/
define(function(require){
	'use strict';
	window.pixi =  require('pixi');





var peeps = [];


window.peep = "";

if(window.location.hash) {
	window.peep = window.location.hash.substr(1);

	var peepsGeneral = [
		{ message: 'Hi '+window.peep+'. It\'s been great working with you this year.', playAt: 1 },
		{ message: 'Here\'s to 2015. All the best, Gar', playAt: 8 },
		{ message: '', playAt: 15}
	]

	var peepsAnn = [
		{ message: 'Hi '+window.peep+'. Thanks for all the Telus work.', playAt: 1 },
		{ message: 'Here\'s to 2015. All the best, Gar', playAt: 8 },
		{ message: '', playAt: 15}
	]


	if(peep==="ann"){
		peeps = peepsAnn;
	}else{
		peeps = peepsGeneral;
	}




} else {

}



	var lyrics = [];

	var music = {
		video: 'RDZ3sXVxqDbFk',
		artist: 'Drummer boy',
		lyrics: [
		{ message: 'Happy Holidays, '+window.peep, playAt: 222},
		{ message: '', playAt: 333},
			{ message: 'Should auld acquaintance be forgot,', playAt: 19},
			{ message: 'And never brought to mind?', playAt: 24},
			{ message: 'Should auld acquaintance be forgot,', playAt: 30},
			{ message: 'And days of auld lang syne!', playAt: 36},
			{ message: 'For auld lang syne, my dear', playAt: 42},
			{ message: 'For auld lang syne,', playAt: 47},
			{ message: 'We\'ll drink a cup o\' kindness yet', playAt: 53},
			{ message: 'For auld lang syne!', playAt: 58},
			{ message: 'For auld lang syne, my dear', playAt: 64},
			{ message: 'For auld lang syne,', playAt: 69},
			{ message: 'We\'ll drink a cup o\' kindness yet', playAt: 74},
			{ message: 'For auld lang syne!', playAt: 80},
			{ message: 'We\'ll drink a cup o\' kindness yet', playAt: 88},
			{ message: 'For auld lang syne!', playAt: 92},

		]
	};





lyrics = music.lyrics.concat(peeps)


	var song = {};



	Object.defineProperty( song, 'lyrics', { value: lyrics });
	Object.defineProperty( song, 'video', { value: music.video });








	return song
});
