// Activity 2: Age Checker Application

function checkAge() {
    //Get the input value
    const ageInput = document.getElementById("ageInput");
    const resultDiv = document.getElementById("result");
    const inputValue = ageInput.value.trim();

    console.log(`User input: "${inputValue}"`);

    //clear previous styling
    resultDiv.className = "";

    //check if input is empty
    if (inputValue === ""){
        resultDiv.textContent = "Please enter your age";
        resultDiv.className = "invalid";
        console.log("Result: Empty input");
        return;
        }

        //Convert to number
        const age = Number(inputValue);

        //check if input in a valid number
        if(isNaN(age)) {
            resultDiv.textContent = "Invalid age - Please enter a number";
            resultDiv.className = "invalid";
            console.log("Result: not a number");
        }

        //Check if real age
        if (age < 0 || age > 150) {
            resultDiv.textContent = "Invalid age - please enter a realistic age (0-150)";
            resultDiv.className = "invalid";
            console.log("Result: Age out of range");
            return;
        }

        if (age >= 18){
            resultDiv.textContent = `You are ${age} years old - you are an adult`;
            resultDiv.className = "adult";
            console.log(`Result: Adult (age: ${age} years old)`);
        } else{
            resultDiv.textContent = `You are ${age} years old - you are a minor`
            resultDiv.className = "minor";
            console.log(`Result: Minor (age: ${age} years old)`)
        }
}