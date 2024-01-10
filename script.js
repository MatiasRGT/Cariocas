document.addEventListener("DOMContentLoaded", function() {
    // Get the input element
    const userInput = document.getElementById("userInput_p1_1");

    // Add an event listener to the input element
    userInput_p1_1.addEventListener("input", function() {
        // Fetch the value entered by the user
        const inputValue_p1_1 = userInput.value;

        // Display the value in a text line below
        const displayTextElement = document.getElementById("ptsTotal_p1");
        displayTextElement.textContent = `pts: ${inputValue_p1_1}`;
    });
});