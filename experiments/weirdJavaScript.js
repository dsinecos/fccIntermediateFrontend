var person = {
	firstName: "John",
	lastName: "Doe",
	address: "This is the object address",

	getAddress: function(){
		console.log(address);
		return;
	}

};

address = 'This is the global address';
console.log(person.getAddress());