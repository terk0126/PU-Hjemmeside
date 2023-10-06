document.addEventListener("DOMContentLoaded", function() {

// start.js
const endlessModeButton = document.getElementById("endless-mode-button");
const menuFagButton = document.getElementById("menu-fag-button");
const minButton = document.getElementById("min-button")

// Event listeners for mode selection
endlessModeButton.addEventListener("click", () => {
    // Redirect to the quiz page for endless mode'
    window.location.href = "endless.html";
});

menuFagButton.addEventListener("click", () => {
    // Redirect to the menu page for timed mode
    window.location.href = "menuFag.html";
});

minButton.addEventListener("click", () => {
    // Redirect to the quiz page for endless mode'
    window.location.href = "minQuiz.html";
});





});

function resetProgress() {

    const userProgress = {
        points: 0,
        score: 0
    }

    userProgressJSON = JSON.stringify(userProgress);



    document.cookie = `userProgress=${userProgressJSON}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}