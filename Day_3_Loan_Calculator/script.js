document.getElementById('calculate').addEventListener('click', calculate);

function calculate() {
    const loanAmount = parseFloat(document.getElementById('loanAmountInput').value);
    const interestRate = parseFloat(document.getElementById('interestRateInput').value);
    const loanTerm = parseFloat(document.getElementById('loanTermInput').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please enter a valid number');
        return;  // Dừng lại nếu có lỗi
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Kiểm tra lãi suất bằng 0
    if (monthlyInterestRate === 0) {
        alert('Interest rate cannot be zero.');
        return;
    }

    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments - loanAmount;

    displayResults(monthlyPayment, totalPayment);
}

function displayResults(monthlyPayment, totalPayment) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: $${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Payment: $${totalPayment.toFixed(2)}</strong></p>
    `;
}
