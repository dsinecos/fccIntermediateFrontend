(function() {

	var name = 'default';
	var gObject = this;

	gObject.test = testD;

	function testD() {

		return function test1() {

			return function test2() {
				console.log("Does this work inside nested level 2" + name);
			}
		}

	}

})()


var demo = test();

var demo2 = demo();

demo2();



