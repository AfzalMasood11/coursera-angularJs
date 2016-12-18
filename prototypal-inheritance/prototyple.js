var parent = {
	value: 'parentValue',
	object: {
		objValue: "parentObject"
	},
	walk: function(){
		console.log("walking!");
	}
};

var child = Object.create(parent);

console.log("CHILD- child.value: ", child.value);
console.log("CHILD- child.object.objValue: ", child.object.objValue);
console.log("PARENT- parent.value: ", parent.value);
console.log("PARENT- parent.object.objValue: ", parent.object.objValue);
console.log("CHILD: ", child);
console.log('PARENT: ', parent);