function person() {

	name = 'name';
	fullname = 'fullname';
	getname = function(){};

}

console.log(typeof person.prototype);
console.log(person.prototype);

var demo = Object.create(person.prototype);

console.log(demo);

// console.log(person.prototype.name);