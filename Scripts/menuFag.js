document.addEventListener("DOMContentLoaded", function() {

    // start.js
    const backButtion = document.getElementById("back-button");
    const startButton = document.getElementById("start-button");
    
    // Event listeners for mode selection
    backButtion.addEventListener("click", () => {
        // Redirect to the quiz page for endless mode'
        window.location.href = "index.html";
    });
    
    timedModeButton.addEventListener("click", () => {
        // Redirect to the menu page for timed mode
        window.location.href = "menuFag.html";
    });
    
    
    });