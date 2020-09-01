// Variables 
const form = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.querySelector('#interest');
const years =  document.querySelector('#years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
const card = document.querySelector('.card');




// Event Listeners
form.addEventListener('submit', function(e){
  // Hide Results
  document.getElementById('results').style.display = 'none';

  // Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});








// Functions
function calculateResults(){
  
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

    // Show Results
    document.getElementById('results').style.display = 'block';

    // Hide Spinner
    document.getElementById('loading').style.display = 'none';
  } else{
    showError("Please Check Your Details!!");
  }
}

function showError(msg){
  // Show Results
  document.getElementById('results').style.display = 'none';

  // Hide Spinner
  document.getElementById('loading').style.display = 'none';

  // Create A Div
  const errorDiv = document.createElement('div');

  // Add class
  errorDiv.className = "alert alert-danger";

  // Get parent element
  const heading = document.querySelector('.heading');

  // Add text and append
  errorDiv.appendChild(document.createTextNode(msg));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(()=> {
    document.querySelector('.alert').remove();
  } , 3000 )

}
