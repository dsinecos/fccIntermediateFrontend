var person = {
	firstName: "John",
	lastName: "Doe",
	address: "This is the object address",

	getAddress: function(){
		console.log(this.address);
		return;
	}

};

address = 'This is the global address';
console.log(person.getAddress());

var test = person.getAddress;
console.log(test());