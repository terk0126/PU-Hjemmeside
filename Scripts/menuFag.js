document.addEventListener("DOMContentLoaded", function() {

    // start.js
    const endlessModeButton = document.getElementById("back-button");
    const start_Button  = document.getElementById("start-button");

    const subjects = ["matematik","fysik","kemi","biologi","teknologi","engineering","geografi"]

    const inputs = subjects.map(subject => document.getElementById(subject));


    start_Button.addEventListener("click", () => {

        var chosenSubjects  = [];

        // Redirect to the quiz page for timed mode
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked === true) {
                chosenSubjects.push(inputs[i].value);
            }
        }

        if (chosenSubjects.length === 0) {
            alert("Du skal vælge mindst et emne");
            return;
        } 
        

        //console.log(chosenSubjects);
        //console.log(`menuFagQuiz.html?subjects=${chosenSubjects.join(",")}`);

        window.location.href = `menuFagQuiz.html?subjects=${chosenSubjects.join(",")}`;
    });


    // Event listeners for mode selection
    endlessModeButton.addEventListener("click", () => {
        // Redirect to the quiz page for endless mode'
        window.location.href = "index.html";
    });
    






    });