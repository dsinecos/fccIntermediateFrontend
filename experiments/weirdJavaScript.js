
function person() {

	this.name = 'name';
	this.fullname = 'fullname';
	this.getname = function(){};

}

/*
person.prototype.setname = function(){
	var test ='setname';
	console.log("Does this work ");
}
*/

var demo = new person();


console.log(person.prototype);

/*
console.log(demo);
console.log("........................");
console.log(demo.__proto__);
console.log("........................");
console.log(demo.setname);
console.log(demo.setname());
*/
/*

var person = {
	name: 'name',
	fullname: 'fullname',
	getname: function() {}
}

var demo = Object.create(person);


console.log(demo);
console.log("........................");
console.log(demo.__proto__);
console.log("........................");
*/