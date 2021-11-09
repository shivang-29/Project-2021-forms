import firebase from "firebase";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDvSlI7IiOoiV4IFHq8gJsJuyV_wp1bUeg",
    authDomain: "contactform-5d8ed.firebaseapp.com",
    projectId: "contactform-5d8ed",
    storageBucket: "contactform-5d8ed.appspot.com",
    messagingSenderId: "202563001208",
    appId: "1:202563001208:web:5db8a9ce4df9140ff7868d"
  };

  
  const app = initializeApp(firebaseConfig);

// Referance messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

// Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    saveMessage(name,company,email,phone,message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
}

function getInputVal(id){
    return document.getElementById(id),values;
}
function saveMessage(name,company ,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}