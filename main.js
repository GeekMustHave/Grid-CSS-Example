// --- Authenrication to Firebase, came from Firebase cPanel

// Initialize Firebase connection
var config = {
  apiKey: "AIzaSyBrETQ3L68SI-ESgiilLfXi3d0Vpd83pUA",
  authDomain: "contactform-1c218.firebaseapp.com",
  databaseURL: "https://contactform-1c218.firebaseio.com",
  projectId: "contactform-1c218",
  storageBucket: "contactform-1c218.appspot.com",
  messagingSenderId: "328725298353"
};
firebase.initializeApp(config);

// --- noDQL collection is like a SQL Table
//     a collection can be created on the fly, no create table required

// --- message collection
let messageRef = firebase.database().ref('messages');

// Listen for the submit button, when clicked run the function submitForm

document.getElementById('contactForm').addEventListener('submit', submitForm);

// console.log('Hello from JS');

// --- submitForm function (e) is the event
function submitForm(e){
  e.preventDefault();   //--- Prevent forms default behaviour
  //console.log(123);

  //-- Get the form fields by the ID names
  let inName = getInputVal('txtName');
  let inCompany = getInputVal('txtCompany');  
  let inEmail = getInputVal('txtEmail');  
  let inPhone = getInputVal('txtPhone');  
  let inMessage = getInputVal('txtMessage');
  //console.log(name);

  // --- Save the message data
  saveMessage(inName, inCompany, inEmail, inPhone, inMessage)
  

}

// --- Helper function to get form .values
function getInputVal(id){
  return document.getElementById(id).value;
}

// --- Save the message fields into Firebase
function saveMessage(inName, inCompany, inEmail, inPhone, inMessage){
  let newMessageRef = messageRef.push();  //-- Similar to SQL Insert
  newMessageRef.set({   //-- JSON formatted fields  firebaseField: inputValue
    name: inName,
    company: inCompany,
    email: inEmail,
    phone: inPhone,
    message: inMessage
  })

}