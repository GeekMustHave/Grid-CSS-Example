// Listen for the submit button, when clicked run the function submitForm

document.getElementById('contactForm').addEventListener('submit', submitForm);

console.log('Hello from JS');

// --- submitForm function

function submitForm(e){
  e.preventDefault();   //--- Prevent forms default behaviour
  console.log (123);

}