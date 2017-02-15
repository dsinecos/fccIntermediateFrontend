(function() {

	var name = 'default';
	// var gObject = this;

	test = testD;

	function testD() {

		return {
			getName: function() {
				console.log("Will this work " + name);
			}
		}

	}

})()


var demo = test();

demo.getName();


