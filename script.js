/*document.addEventListener("DOMContentLoaded", function() {
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
*/

/*
document.addEventListener("DOMContentLoaded", function() {
    // Get the input elements
    const userInput_p1_1 = document.getElementById("userInput_p1_1");
    const userInput_p1_2 = document.getElementById("userInput_p1_2");
    const userInput_p1_3 = document.getElementById("userInput_p1_3");
    const userInput_p1_4 = document.getElementById("userInput_p1_4");
    const userInput_p1_5 = document.getElementById("userInput_p1_5");
    const userInput_p1_6 = document.getElementById("userInput_p1_6");
    const userInput_p1_7 = document.getElementById("userInput_p1_7");
    const userInput_p1_8 = document.getElementById("userInput_p1_8");
    const userInput_p1_9 = document.getElementById("userInput_p1_9");
    const userInput_p1_10 = document.getElementById("userInput_p1_10");

    // Add event listeners to the input elements
    userInput_p1_1.addEventListener("input", updateSum);
    userInput_p1_2.addEventListener("input", updateSum);
    userInput_p1_3.addEventListener("input", updateSum);
    userInput_p1_4.addEventListener("input", updateSum);
    userInput_p1_5.addEventListener("input", updateSum);
    userInput_p1_6.addEventListener("input", updateSum);
    userInput_p1_7.addEventListener("input", updateSum);
    userInput_p1_8.addEventListener("input", updateSum);
    userInput_p1_9.addEventListener("input", updateSum);
    userInput_p1_10.addEventListener("input", updateSum);



    // Function to update the sum
    function updateSum() {
        // Fetch the values entered by the user
        const inputValue_p1_1 = parseInt(userInput_p1_1.value) || 0;
        const inputValue_p1_2 = parseInt(userInput_p1_2.value) || 0;
        const inputValue_p1_3 = parseInt(userInput_p1_3.value) || 0;
        const inputValue_p1_4 = parseInt(userInput_p1_4.value) || 0;
        const inputValue_p1_5 = parseInt(userInput_p1_5.value) || 0;
        const inputValue_p1_6 = parseInt(userInput_p1_6.value) || 0;
        const inputValue_p1_7 = parseInt(userInput_p1_7.value) || 0;
        const inputValue_p1_8 = parseInt(userInput_p1_8.value) || 0;
        const inputValue_p1_9 = parseInt(userInput_p1_9.value) || 0;
        const inputValue_p1_10 = parseInt(userInput_p1_10.value) || 0;


        // Calculate the sum
        const sum = inputValue_p1_1 + inputValue_p1_2 + inputValue_p1_3 + inputValue_p1_4 + inputValue_p1_5 + inputValue_p1_6 + inputValue_p1_7 + inputValue_p1_8 + inputValue_p1_9 + inputValue_p1_10;


        // Display the sum in a text line
        const displayTextElement = document.getElementById("ptsTotal_p1");
        displayTextElement.textContent = `pts: ${sum}`;
    }
});

*/

/*

document.addEventListener("DOMContentLoaded", function() {
    const userInputPrefix = "userInput_p1_"; // Prefijo para columna 1
    const numInputs = 10; // cantidad de juegos

    // Add event listeners to the input elements
    // Loop para cada juego
    for (let i = 1; i <= numInputs; i++) {
        const userInput = document.getElementById(userInputPrefix + i);
        userInput.addEventListener("input", updateSum);
    }

    // Function to update the sum
    function updateSum() {
        let sum = 0;

        // Iterate through the input elements and calculate the sum
        // Loop para sumar cada juego usando el prefijo
        for (let i = 1; i <= numInputs; i++) {
            const userInput = document.getElementById(userInputPrefix + i);
            const inputValue = parseInt(userInput.value) || 0;
            sum += inputValue;
        }

        // Display the sum in a text line
        const displayTextElement = document.getElementById("ptsTotal_p1");
        displayTextElement.textContent = `pts: ${sum}`;
    }
});

*/

// Ultima implementacion que suma todos los puntajes de cada contenido de cada DIV

document.addEventListener("DOMContentLoaded", function () {
    // Get all the persona divs
    const personaDivs = document.querySelectorAll('.content_section > div[class^="persona"]');

    // Add event listeners to each input inside persona divs
    personaDivs.forEach((personaDiv) => {
        const inputs = personaDiv.querySelectorAll('input[type="text"]');
        inputs.forEach((input) => {
            input.addEventListener('input', updateSum);
        });
    });

    // Function to update the sum
    function updateSum() {
        // Get the parent persona div
        const personaDiv = this.closest('.content_section > div[class^="persona"]');

        // Get all inputs inside the current persona div
        const inputs = personaDiv.querySelectorAll('input[type="text"]');

        // Calculate the sum
        const sum = Array.from(inputs).reduce((total, input) => {
            const inputValue = parseInt(input.value) || 0;
            return total + inputValue;
        }, 0);

        // Get the corresponding ptsTotal element
        const ptsTotalElement = personaDiv.querySelector('h2[id^="ptsTotal_p"]');
        
        // Display the sum in the ptsTotal element
        ptsTotalElement.textContent = `pts: ${sum}`;
    }
});
