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




/*
const questions = [
    {
        question: "Question 1?",
        options: ["Option A", "Option B", "Option C"],
        correctAnswer: "Option A"
    },
    {
        question: "Question 2?",
        options: ["Option X", "Option Y", "Option Z"],
        correctAnswer: "Option Z"
    },
    // Add more questions here
];
*/


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

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        return; // User hasn't selected an option
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        score++;
        points = points + questions[currentQuestionIndex].options[]
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}! \n And got `;
}

nextButton.addEventListener("click", checkAnswer);
displayQuestion(); // Display the first question