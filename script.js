let questions = []; // Initialize an empty array to store questions.

// Function to fetch questions from the JSON file.
function fetchQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            displayQuestion();
        })
        .catch(error => {
            console.error('Error fetching questions:', error);
        });
}

fetchQuestions(); // Call the fetchQuestions function to load questions when the page loads.


let currentQuestionIndex = 0;
let score = 0;
let points = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsHTML = currentQuestion.options.map(option =>
        `<label><input type="radio" name="option" value="${option[0]}"> ${option[0]}</label><br>`
    ).join("");

    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        ${optionsHTML}
    `;
}

function updateScoreAndPoints() {
    const scoreContainer = document.getElementById("score");
    const pointsContainer = document.getElementById("points");

    scoreContainer.textContent = score;
    pointsContainer.textContent = points;
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        return; // User hasn't selected an option
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Find the selected option's text and points
    const selectedOptionData = questions[currentQuestionIndex].options.find(optionData => optionData[0] === userAnswer);

    if (selectedOptionData) {
        let answerPoints = selectedOptionData[1]; // Option points

        if (userAnswer === correctAnswer) {
            score++;
            points += answerPoints;
        }
    }

    

    

    currentQuestionIndex++;
    updateScoreAndPoints()

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}


function showResult() {


    let maxPossiblePoints;
    questions.forEach(question => {
        console.log(question.options);
        var correctOption = question.options.find(maxPointOption => {maxPointOption[0] === question.correctAnswer});
        console.log(correctOption);
        maxPossiblePoints += correctOption[1] 
    });



    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}! \n And got ${points} out of ${maxPossiblePoints} points`;
};

nextButton.addEventListener("click", checkAnswer);
displayQuestion(); // Display the first question