/*global define*/
define(function(){
	'use strict';



	function Basic(content, children){
		this.content = content;

		this.children = children;



		if(children){
			this.makeBabies( children );
		}
	}


	Basic.prototype.getChildAt = function(index){
		if(index >= this.children.list.length) throw this.id + " Module of "+ index+' is not in the range of 0 and ' + this.children.list.length;
		return this.children.list[index];
	}




	Basic.prototype.createChildObj = function(){

		var children = {module:null, content:null, list:[] };
		return Object.create(children);

	}

	Basic.prototype.makeBabies = function( children ){


		var lister = [];
		var Child = children.module;
		var content = children.content;


		var curr, prev;

		content.forEach(function(contentItem, index){

			prev = curr;
			var queue = {me: index, total:content.length };
			var mommy = this;

			curr = new Child( contentItem, mommy, queue );
			curr.chain = lister[lister.length-1];
			lister.push(curr);
		}, this);

		children.list = lister;

		return lister;
	};







	return Basic;

});