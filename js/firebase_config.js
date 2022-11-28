
const firebaseConfig = {
    apiKey: "AIzaSyDyLbZdgLd4-tFFrWKpSMykeAkDBDet9mw",
    authDomain: "alwyn-joseph-portfolio.firebaseapp.com",
    databaseURL: "https://alwyn-joseph-portfolio-default-rtdb.firebaseio.com",
    projectId: "alwyn-joseph-portfolio",
    storageBucket: "alwyn-joseph-portfolio.appspot.com",
    messagingSenderId: "690759969534",
    appId: "1:690759969534:web:7cfcbaefe727ca378913af",
    measurementId: "G-Q2M5EMZ1VN"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};