//html references
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const quizContainer = document.getElementById('quiz');
const message = document.getElementById('message');

//quiz q 
let questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question('whats 2+2', '4', ['1', '2', '3']));
questions.push(new Question('whats 2*2', '4', ['2', '6', '9']));
questions.push(new Question('whats 4+3', '7', ['3', '6', '8']));


//events
startButton.addEventListener('click', function () {
	startButton.classList.add('disable');
	message.textContent = 'Choose an answer';
	loadNextQuestion();

});

nextButton.addEventListener('click', function () {
	quizContainer.textContent = '';
	message.textContent = 'Choose an answer';
	nextButton.classList.add('disable');
	currentQuestion++
	loadNextQuestion();
});

endButton.addEventListener('click', function () {
	quizContainer.textContent = '';
	endButton.classList.add('disable');
	message.textContent = `You got ${score} out of ${questions.length}! `;
	if (score <= questions.length - 1) {
		message.textContent += 'Better luck next time.';
	} else {
		message.textContent += 'Perfect!';
	}
});


//callback gunction
function loadNextQuestion() {
	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);
}

function questionAnswered(isCorrect) {
	if (isCorrect) {
		message.textContent = "correct";
		score++;
	} else {
		message.textContent = "incorrect";
	}

	if (currentQuestion < questions.length - 1) {
		nextButton.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}}

function createElement(tagName, className, text) {
		const elem = document.createElement(tagName);
		elem.classList.add(className);
		elem.textContent = text;
		return elem;
	}