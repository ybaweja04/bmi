var weight, height, measure, bmi, error;

function calculateBMI(){
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    error = "please enter valid values";
    height /= 100;
    height *= height;
    bmi = (weight/height).toFixed(1);

    if (bmi <= 18.4) {
        measure = "Your BMI is " + bmi + ". Hence you are Underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = "Your BMI is " + bmi + ". Hence you have a Normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = "Your BMI is " + bmi + ". Hence you are Overweight.";
    } else if (bmi >= 30) {
        measure = "Your BMI is " + bmi + ". Hence you are Obese.";
    }

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("results").innerHTML = error;
    } else if (weight < 0 || height < 0) {
        document.getElementById("results").innerHTML = "Negative values are not allowed.";
    } else {
        document.getElementById("results").innerHTML = measure;
    }
}