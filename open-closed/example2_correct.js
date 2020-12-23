// Opened portion
class BooleanQuestion {
	constructor(description) {
		this.description = description;
	}
	printQuestionChoices() {
		console.log("1. True");
		console.log("2. False");
	}
}

class MultipleChoicesQuestion {
	constructor(description, options) {
		this.description = description;
		this.options = options;
	}
	printQuestionChoices() {
		this.options.forEach((option, index) => {
			console.log(`${index + 1}. ${option}`);
		});
	}
}

class TextQuestion {
	constructor(description) {
		this.description = description;
	}
	printQuestionChoices() {
		console.log("Answer: __________");
	}
}

class RangeQuestion {
	constructor(description) {
		this.description = description;
	}
	printQuestionChoices() {
		console.log("Minimum: ________");
		console.log("Maximum: ________");
	}
}

// closed portion
function printQuiz(questions) {
	questions.forEach(question => {
		console.log(question.description);
		question.printQuestionChoices();
		console.log('');
	});
}

const questions = [
	new BooleanQuestion("This video is useful."),
	new MultipleChoicesQuestion("What's your favorite language?", [ "CSS", "Java", "JS", "Python" ]),
	new TextQuestion("Describe your favorite JS feature."),
	new RangeQuestion("what is the speed limit in your city?")
];

printQuiz(questions);