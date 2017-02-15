function test() {

	console.log("What is the value of this " + this);

}


function test2(callback) {

	callback();
}


test2(test);
