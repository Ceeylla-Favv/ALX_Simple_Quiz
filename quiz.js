function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Select feedback paragraph
    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare answers
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the Submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
