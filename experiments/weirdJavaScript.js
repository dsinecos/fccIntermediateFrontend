var person = function() {
	this.name = 'name';
	this.lastname = 'lastname';
	this.fullname = 'fullname';
}

var demo = new person();

person.prototype.test = function() {

	var self = this;

	function withinTest() {

		console.log(self.name);
		console.log(self.lastname);
	}
}

demo.withinTest();