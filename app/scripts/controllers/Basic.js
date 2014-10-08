/*global define*/
define(function(){
	'use strict';



	function Basic(content){
		this.content = content;

		this.children = [];





		Object.defineProperty( this, 'totalChildren', {
			get: function(){
				return (children) ? children.list.length : 0;
			}
		} )
	}




	Basic.prototype.offsetXChildren = function(x){

		this.children.forEach(function(childItem){
			childItem.offsetXChildren(x)
		})

	}

	Basic.prototype.getNextChildren = function(mom){
		return mom.children;
	}

	Basic.prototype.getChildAt = function(index){
		if(index >= this.children.length) throw this.id + " Module of "+ index+' is not in the range of 0 and ' + this.children.list.length;
		return this.children[index];
	}


	Basic.prototype.getLetter = function( ){

	}



	Basic.prototype.createChildren = function(Child, contentList){
		var curr, prev;
		contentList.forEach(function(contentItem, index){

			prev = curr;
			var queue = {me: index, total:contentList.length };
			var mommy = this;

			curr = new Child( contentItem, mommy, queue );
			curr.mommy = mommy;
			curr.chain = this.children[this.children.length-1];
			this.children.push(curr);


		}, this);




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