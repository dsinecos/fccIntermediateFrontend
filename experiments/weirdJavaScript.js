var demo = function test() {

	var name = 'name';

	console.log('Hoye');

	return demo;
}

var demo2 = demo();

console.log(demo2);
console.log(demo2.__proto__)