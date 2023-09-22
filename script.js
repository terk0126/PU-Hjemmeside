let questions = []; // Initialize an empty array to store questions.
let currentQuestion; // Declare currentQuestion as a global variable
let recentlyAskedQuestions = []; // Initialize an array to store recently asked questions.

fetchQuestions(); // Call the fetchQuestions function to load questions when the page loads.

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


var currentQuestionIndex = 0;
let score = 0;
let points = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");

function getRandomQuestion() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (recentlyAskedQuestions.includes(randomIndex) && recentlyAskedQuestions.length < 10);
    recentlyAskedQuestions.push(randomIndex);
    if (recentlyAskedQuestions.length > 10) {
        recentlyAskedQuestions.shift(); // Remove the oldest question from the list.
    }
    console.log(randomIndex);
    console.log(recentlyAskedQuestions);
    return questions[randomIndex];
}

function displayQuestion() {
    currentQuestion = getRandomQuestion(); // Assign the global currentQuestion variable
    console.log(currentQuestion);

    if (!currentQuestion) {
        console.error('No currentQuestion found.');
        return;
    }

    console.log(currentQuestion.type);

    if (currentQuestion.type === "multipleChoice") {
        if (!currentQuestion.options || !Array.isArray(currentQuestion.options)) {
            console.error('Invalid options for multipleChoice question.');
            return;
        }

        const optionsHTML = currentQuestion.options.map(option =>
            `<label><input type="radio" name="option" value="${option[0]}"> ${option[0]}</label><br>`
        ).join("");

        questionContainer.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${optionsHTML}
        `;

    } else if (currentQuestion.type === "number") {
        if (currentQuestion.options || Array.isArray(currentQuestion.options)) {
            console.error('Invalid options for number question.');
            return;
        }

        var questionText = currentQuestion.question

        if (currentQuestion.marginOfError !== undefined) {
            questionText += ` (Inden for ${currentQuestion.marginOfError})`;
        }

        const questionHTML = `<input type="number" name="numberAnswer" id="numberAnswer" placeholder="Skriv dit svar her">`

        

        questionContainer.innerHTML = `
            <p>${questionText}</p>
            ${questionHTML}
        `;
    }
}


function updateScoreAndPoints() {
    const scoreContainer = document.getElementById("score");
    const pointsContainer = document.getElementById("points");

    scoreContainer.textContent = score;
    pointsContainer.textContent = points;
}

function checkAnswer() {
    if (!currentQuestion) {
        console.error('No currentQuestion found.');
        return;
    }

    if (currentQuestion.type === "multipleChoice") {
        var selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) { return; } // Added null check

        const userAnswer = selectedOption.value;
        const correctAnswer = currentQuestion.correctAnswer; // Use the global currentQuestion

        // Find the selected option's text and points
        const selectedOptionData = currentQuestion.options.find(optionData => optionData[0] === userAnswer);

        if (selectedOptionData) {
            let answerPoints = selectedOptionData[1]; // Option points

            if (userAnswer === correctAnswer) {
                score++;
                points += answerPoints;
            }
        }

    } else if (currentQuestion.type === "number") {
        var numberInput = document.querySelector('input[name="numberAnswer"]');
        if (!numberInput) { return; } // Added null check

        const userAnswer = parseFloat(numberInput.value);
        const correctAnswer = parseFloat(currentQuestion.correctAnswer); // Use the global currentQuestion
        const marginOfError = parseFloat(currentQuestion.marginOfError) || 0; // Default to 0 if marginOfError is not specified

        if (correctAnswer !== undefined && userAnswer !== undefined) {
            if (Math.abs(userAnswer - correctAnswer) <= marginOfError) {
                // User's answer is within the acceptable margin of error
                score++;
                points += currentQuestion.point;
            }
        }

    }
    
    currentQuestionIndex++;
    updateScoreAndPoints();

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}! \n And got ${points} out of  points`;
}

nextButton.addEventListener("click", checkAnswer);
displayQuestion(); // Display the first question

function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
}
