var quoteData = [{
	quote: "I'll make them an offer they can't refuse",
	author: "Michael Corleone",
	color: "brown"
}, {
	quote: "You were right warden, salvation lies within",
	author: "Andy Dufresne",
	color: "red"
}, {
	quote: "Let's not blow this out of proportion",
	author: "Joker",
	color: "blue"
}];

function search(phrase){

	for (var i in quoteData) {

		if (quoteData[i]['author'] == author) {
			var x = parseInt(i) + 1;

			if (x >= quoteData.length) {
				return quoteData[0];
			} else {
				return quoteData[x];
			}
		}
	}
}

console.log(search("Michael Corleone"));