document.addEventListener("DOMContentLoaded", function() {

// start.js
const endlessModeButton = document.getElementById("endless-mode-button");
const timedModeButton = document.getElementById("timed-mode-button");

// Event listeners for mode selection
endlessModeButton.addEventListener("click", () => {
    // Redirect to the quiz page for endless mode'
    console.log("HEJ");
    window.location.href = "endless.html";
});

timedModeButton.addEventListener("click", () => {
    // Redirect to the quiz page for timed mode
    window.location.href = "quiz.html";
});


});