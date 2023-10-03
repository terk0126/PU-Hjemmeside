document.addEventListener("DOMContentLoaded", function() {

    // start.js
    const endlessModeButton = document.getElementById("back-button");
    
    // Event listeners for mode selection
    endlessModeButton.addEventListener("click", () => {
        // Redirect to the quiz page for endless mode'
        window.location.href = "index.html";
    });
    
    });