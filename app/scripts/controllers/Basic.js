/*global define*/
define(function(){
	'use strict';



	function Basic(dna, queueMe, queueTotal){
		this.dna = dna;

		this.queueMe = queueMe;
		this.queueTotal = queueTotal;



		// var pos = { x:0, y:0 };






	}

	Basic.prototype.makeBabies = function(Child, dnaList){
		var children = [];

		var curr, prev;
		dnaList.forEach(function(dna, index){
			prev = curr;
			curr = new Child( dna, index, dnaList.length );


			curr.chain = children[children.length-1];
			children.push(curr);

		}, this);

		return children;
	};







	return Basic;

});