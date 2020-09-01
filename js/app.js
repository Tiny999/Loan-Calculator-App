// Variables 
const form = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.querySelector('#interest');
const years =  document.querySelector('#years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
 




// Event Listeners
form.addEventListener('submit', calculateResults);








// Functions
function calculateResults(e){
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments 

  const x = Math.pow(1+ calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else{
    showError("Please Check Your Details");
  }

  e.preventDefault();
}

function showError(msg){

  // Create A Div
  

}
