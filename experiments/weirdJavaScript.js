function test1() {
	console.log(testVariable2);
}

function test2() {
	testVariable = 'Inside function test2'
	console.log(testVariable);

	function test3() {
		console.log(testVariable2);
	}

	test3();
}

testVariable2 = 'Global Object';

test1();
test2();