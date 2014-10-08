/*global define*/
define(function(){
	'use strict';



	function Basic(content, mommy, queue, type){


		var _children;
		var _offset = {x:-1, y:-1 };
		var _width = 0;
		var _height = 0;

		if(content){ Object.defineProperty( this, 'content', { value: content } ); }
		if(mommy){ Object.defineProperty( this, 'mommy', { value: mommy } ); }
		if(queue){ Object.defineProperty( this, 'queue', { value: queue } ); }
		if(type){ Object.defineProperty( this, 'type', { value: type } ); }



		Object.defineProperty( this, 'width', {
			get: function(){ return _width },
			set: function(value){ _width = value; }
		});
		Object.defineProperty( this, 'height', {
			get: function(){ return _height },
			set: function(value){ _height = value; }
		});



		Object.defineProperty( this, 'children', {
			set: function(value){ _children = value; },
			get: function(){ return _children; },
		} );

		Object.defineProperty( this, 'totalChildren', {
			value: function(){ return (children) ? children.list.length : 0; }
		} );

		Object.defineProperty( this, 'hasChildren', {
			get: function(){ return (_children) ? true : false; }
		} );



		Object.defineProperty( this, 'offsetX', {
			get: function(){ return _offset.x },
			set: function(value){
				if(this.hasChildren){
					this.children.forEach(function(childItem){
						_offset.x += value;
						childItem.offsetX = value;
					}, this)
				}else{
					_offset.x += value;
				}
			}
		});

		Object.defineProperty( this, 'offsetY', {
			get: function(){ return _offset.y },
			set: function(value){
				if(this.hasChildren){
					this.children.forEach(function(childItem){
						_offset.y += value;
						childItem.offsetY = value;
					})
				}else{
					_offset.y += value;
				}
			}
		});







		var _sibling;
		Object.defineProperty( this, 'sibling', {
			get: function(){

				return _.filter(this.mommy.children, function(childItem){
					return (childItem!==this);
				}, this)
			}
		});
	}







	Basic.prototype.getChildAt = function(index){
		return (index >= this.children.length) ? false : this.children[index];
	}




	Basic.prototype.createChildren = function(Child, contentList, name){
		var _children_ = [];
		this.children = [];
		contentList.forEach(function(contentItem, index){

			var queue = {me: index, total:contentList.length };
			var mommy = this;
			var child = new Child( contentItem, mommy, queue );

			child.chain = _children_[_children_.length-1];

			_children_.push(child);


		}, this);

		this.children = _children_;
	}

	return Basic;

});