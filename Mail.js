var firebaseConfig = {
    apiKey: "*************",
    authDomain: "*************",
    databaseURL: "*************",
    projectId: "*************",
    storageBucket: "*************",
    messagingSenderId: "*************",
    appId: "*************"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// refrence to the firebase database
var myDatabase = firebase.database();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, message);
    console.log("message sent from mail.js");
}

// get input from values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
    myDatabase.ref('messages/').push({
        name: name,
        email: email,
        message: message
    })
}
