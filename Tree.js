class Node{
	constructor(data){
		this.data = data;
    this.parent = null;
    this.children = [];
	}
}

class Queue{
  constructor(){
    this._storage = {};
    this._oldestIndex = 1;
    this._newestIndex = 1;
  }
  size(){
    return this._oldestIndex - this._newestIndex;
  }
  enqueue(data){
    this._storage[this._newestIndex] = data;
    this._newestIndex += 1;
  }
  dequeue(){
    if (this._oldestIndex !== this._newestIndex) {
      const deletedData = this._storage[this._oldestIndex];
      delete this._storage[this._oldestIndex]
      this._oldestIndex += 1;
      return deletedData;
    }
  }
}

class Tree{
	constructor(data) {
    	this._root = new Node(data);
	}
	traverseDF(callback){
		var arr = [];
		 (function recurse(currentNode) {
        	for (var i = 0, length = currentNode.children.length; i < length; i++)
            recurse(currentNode.children[i]);
        arr.push(currentNode);
    	})(this._root);
			callback(arr);
	}
	traverseBF(callback){
		let queue = new Queue();
 		queue.enqueue(this._root);
  	let currentTree = queue.dequeue();
 		while(currentTree) {
   			for(let i = 0, j = currentTree.children.length; i < j; i++) {
    			queue.enqueue(currentTree.children[i]);
   			}
   		callback(currentTree);
   		currentTree = queue.dequeue();
  		}
	}
	contains(callback, traversal){
		traversal.call(this, callback);
	}
	add(data, toData, traversal){
		let child = new Node(data),
     		parent = null,
     		callback = function(node) {
      			if (node.data = toData)
       				parent = node;
     		}
 		this.contains(callback, traversal);
  		if (parent) {
   			parent.children.push(child);
   			child.parent = parent;
  		} else
  			throw new Error("Cannot add node to non-existent parent");
	}
  // var tree = new Tree('CEO');
  // tree.add('VP of Happiness', 'CEO', tree.traverseBF);
  // tree.add('VP of Finance', 'CEO', tree.traverseBF);
  // tree.add('VP of Sadness', 'CEO', tree.traverseBF);
  // tree.add('Director of Puppies', 'VP of Finance', tree.traverseBF);
  // tree.add('Manager of Puppies', 'Director of Puppies', tree.traverseBF);

/*

 tree

 'CEO'
 ├── 'VP of Happiness'
 ├── 'VP of Finance'
 │   ├── 'Director of Puppies'
 │   └── 'Manager of Puppies'
 └── 'VP of Sadness'

 */
	remove (data, fromData, traversal) {
 		let tree = this,
     		parent = null,
     		childToRemove = null,
     		index,
     		callback = function(node) {
      			if (node.data === fromData) {
       				parent = node;
      			}
     		}
 		this.contains(callback, traversal);
 		if (parent) {
  			index = findIndex(parent.children, data);
  			if (index === undefined) {
   				throw new Error("Node to remove does not exist");
  			} else {
   				childToRemove = parent.children.splice(index, 1);
  				}
 		} else {
  			throw new Error("Parent does not exist");
 		}
 		return childToRemove;
	}
	findIndex(arr, data) {
 		let index;
 		for (let i = 0, j = arr.length; i < j; i++) {
  		if (arr[i].data === data)
   			index = i;
 		}
 		return index;
	}
}

export {Tree,Node}
