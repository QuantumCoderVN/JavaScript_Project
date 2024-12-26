document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age")).value;
    const heightFeets = parseInt(document.getElementById("height-feet")).value;
    const heightInches = parseInt(document.getElementById("height-inches")).value;
    const weight = parseFloat(document.getElementById("weight")).value;

    if (gender && gender && heightFeets && heightInches && weight) {

        const heightInMeters = ((heightFeets * 12) + heightInches)*0.0254;//in meters
        const bmi = (weight / (heightInMeters * heightInMeters));
        const resultElement = document.getElementById("bmiResult");
        
        let bmiCategory = "";
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obesity";
        }
        let result = `Your BMI is ${bmi.toFixed(2)} and you are considered ${bmiCategory}`;
        result += "Category: " + bmiCategory;
        resultElement.innerHTML = result;
    }
});