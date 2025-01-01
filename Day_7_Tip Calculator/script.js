function calculateTip() {
    const billAmountInput = document.getElementById("bill");
    const serviceRatingSelect = document.getElementById("serviceRating");
    const splitCountInput = document.getElementById("people");
    const mealTypeSelect = document.getElementById("mealType");
  
    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");
  
    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseInt(serviceRatingSelect.value);
    const splitCount = parseInt(splitCountInput.value);
    const mealType = mealTypeSelect.value;
  
    if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount) || splitCount <= 0) {
      alert("Please enter valid values");
      return;
    }
  
    let tipAmount = 0;
    switch (serviceRating) {
      case 1:
        tipAmount = billAmount * 0.05;
        break;
      case 2:
        tipAmount = billAmount * 0.1;
        break;
      case 3:
        tipAmount = billAmount * 0.15;
        break;
      case 4:
        tipAmount = billAmount * 0.2;
        break;
    }
  
    let totalAmount = billAmount + tipAmount;
    let amountPerPerson = totalAmount / splitCount;
  
    if (mealType === "dinner") {
      tipAmount += 10;
      totalAmount += 10;
      amountPerPerson += 10;
    }
  
    tipAmountOutput.textContent = 'Tip: $' + tipAmount.toFixed(2);
    totalAmountOutput.textContent = 'Total Amount: $' + totalAmount.toFixed(2);
    amountPerPersonOutput.textContent = 'Amount Per Person: $' + amountPerPerson.toFixed(2);
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculateTip);
  