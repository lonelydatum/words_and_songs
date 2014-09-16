/*global define*/
define(function(){
	'use strict';

	var api = {};

	api.createChildren = function(Child, list){
		var children = [];

		var curr, prev;
		list.forEach(function(dna, index){
			prev = curr;
			curr = Child.create(dna, index, list.length);


			curr.dna = dna;
			curr.chain = children[children.length-1];
			children.push(curr)

		}, this);

		return children;
	}
	return api;
});