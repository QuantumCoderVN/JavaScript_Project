document.getElementById('calculate').addEventListener('click', calculate);
function calculate() {
const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
const interestRate = parseFloat(document.getElementById('interestRateInput').value);
const loanTerm = parseFloat(document.getElementById('loanTermInput').value);


    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please enter a valid number');
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments - loanAmount;

    displayResults(monthlyPayment, totalPayment);
}

function displayResults(monthlyPayment, totalPayment) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: $${monthlyPayment.toFixed(2)}</p></strong>
        <p><strong>Total Payment: $${totalPayment.toFixed(2)}</p><strong>
    `;
}