/*global define*/
define(function(require){
	'use strict';
	window.pixi =  require('pixi');







	var self = { };




// I'll watch them bloom for me and you
// And I think to myself
// What a wonderful world

// Well I see skies of blue
// And I see clouds of white
// And the brightness of day
// I like the dark
// And I think to myself
// What a wonderful world

// The colors of the rainbow so pretty in the sky
// Are also on the faces of people passing by
// I see friends shaking hands
// Saying, "How do you do?"
// They're really saying, I...I love you

// I hear babies cry and I watch them grow,
// They'll learn much more than we'll know
// And I think to myself
// What a wonderful world world

// Someday I'll wish upon a star,
// Wake up where the clouds are far behind me
// Where trouble melts like lemon drops
// High above the chimney top
// That's where you'll find me

// Oh, somewhere over the rainbow way up high
// And the dream that you dare to, why, oh why can't I? I?

	var _story = [
				{ message: 'Somewhere over the rainbow', playAt: 36, readDuration:1 },
				{ message: 'Way up high', playAt: 42, readDuration:1 },
				{ message: 'And the dreams that you dreamed of', playAt: 47, readDuration:1 },
				{ message: 'Once in a lullaby', playAt:53, readDuration:1 },
				{ message: 'Somewhere over the rainbow', playAt:63, readDuration:1 },
				{ message: 'Blue birds fly', playAt:70, readDuration:1 },
				{ message: 'And the dreams that you dreamed of', playAt:75, readDuration:1 },
				{ message: 'Dreams really do come true ooh oh', playAt:78, readDuration:1 },
				{ message: 'Someday Ill wish upon a star', playAt:86, readDuration:1 },
				{ message: 'Wake up where the clouds are far behind me', playAt:89, readDuration:1 },
				{ message: 'Where trouble melts like lemon drops', playAt:97, readDuration:1 },
				{ message: 'High above the chimney tops', playAt:101, readDuration:1 },
				{ message: 'Thats where youll find me', playAt:104, readDuration:1 },
				{ message: 'Oh, somewhere over the rainbow', playAt:110, readDuration:1 },
				{ message: 'bluebirds fly', playAt:117, readDuration:1 },
				{ message: 'And the dream that you dare to,', playAt:121, readDuration:1 },
				{ message: 'Oh why, oh why cant I?', playAt:126, readDuration:1 },
				{ message: 'Someday Ill wish upon a star,', playAt:135, readDuration:1 },
				{ message: 'Wake up where the clouds are far behind me', playAt:139, readDuration:1 },
				{ message: 'Where trouble melts like lemon drops', playAt:145, readDuration:1 },
				{ message: 'High above the chimney top', playAt:149, readDuration:1 },
				{ message: 'Thats where youll find me', playAt:152, readDuration:1 },
				{ message: 'Oh, somewhere over the rainbow', playAt:158, readDuration:1 },
				{ message: 'way up high', playAt:160, readDuration:1 },
				{ message: 'And the dream that you dare to, why, oh why cant I? I?', playAt:163, readDuration:1 }





			]


	Object.defineProperty( self, 'story', { value: _story });



	return self
});


