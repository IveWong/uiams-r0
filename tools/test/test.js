var objs = {
	a: "aa",
	b: "bb"
};

console.log(objs['a']);

for(var key of objs){
	console.log(key);
}