import {Tree,Node} from "./Tree"
import {reg} from './RegexpAutomata'

var checkDTD = (dtd)=>{
  for (var key in dtd) {
    if(/(.).*?\1/.test(dtd[key]))
      return false;
  }
  return true;
}

var dtdValid = (arr,dtd)=>{
  for (var key in arr) {
    console.log(key+":")
    for (var i in arr[key]) {
      console.log(arr[key][i])
      if(dtd[key]=='_'&&arr[key][i].length!=0) return false;
      if(dtd[key]!='_'&&reg(dtd[key],arr[key][i].join(''))!=true) return false;
    }
  }
  return true;
}

var reduceByKey = (arr)=>{
	return arr.reduce(function (pre, cur) {
	        pre[cur.data] = pre[cur.data] || [];
	        pre[cur.data].push(cur.children.map(i=>i.data));
	        return pre;
	    }, Object.create(null));
}

var transformToDict = (str)=>{
	let arr = str.split(' ');
	if(/^[0|1]\s[a-zA-Z]+$/.test(str)==false)
		return null;
	else
		return {key:arr[1],value:arr[0]};
}
var transformDTDToDict = (str)=>{
	let arr = str.split(' ');
	if(/^[a-zA-Z]+\s[a-zA-Z\(\)\+\*\?\.\_]+$/.test(str)==false)
		return null;
	else
		return {key:arr[0],value:arr[1]};
}
var toDirectory = (arr)=>{
  var directory = {};
  for (var i in arr){
    var key = arr[i].key;
    var reg = arr[i].value;
    directory[key]=reg;
  }
  return directory;
}
/**
Check in Stack
**/
var checkWellFormed = (arr) =>{
	let stack = [];
	let num = 1;
	for(var index in arr){
		var i = arr[index];
		if (num>1)
			return false;
		if (i.value == 0)
			stack.push(i)
		if (i.value == 1) {
			var check = stack.pop();
			if(check.key!=i.key)
				return false;
			if(stack.length == 0)
				num++;
		}
	}
	if (stack.length == 0 & num == 2)
		return true;
	else
		return false;
}

/**
Tree Model
**/

/**
generate a tree
stack.slice(-1)[0]
**/
var generateTree = async(data)=>{
	var tree = null;
	var stack = [];
	for (var i in data){
		if(i==0){
			tree = new Tree(data[i].key);
			stack.push(tree._root);
			continue;
		}
		switch(data[i].value)
		{
			case '0':
				var node = new Node(data[i].key);
				node.parent = stack.slice(-1)[0];
  				stack.slice(-1)[0].children.push(node);
  				stack.push(node);
  				break;
			case '1':
  				stack.pop();
  				break;
			default:
  				console.log(data[i]);
		}
	}
	return tree;
}

export {checkDTD,dtdValid,reduceByKey,transformToDict,transformDTDToDict,toDirectory,checkWellFormed,generateTree}
