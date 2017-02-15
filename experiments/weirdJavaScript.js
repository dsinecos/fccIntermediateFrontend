(function() {

	var name = 'default';
	var gObject = this;

	gObject.test = testD;

	function testD() {

		return function test1() {
			console.log("Let's see if this works " + name);
		}

	}

})()


var demo = test();

demo();



