import { buttonPress } from "./button.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSF5bPC_Yd9zSD5Qd5QzdfYOvYOiVxS1A",
    authDomain: "javascript-test-5d280.firebaseapp.com",
    databaseURL: "https://javascript-test-5d280-default-rtdb.firebaseio.com",
    projectId: "javascript-test-5d280",
    storageBucket: "javascript-test-5d280.appspot.com",
    messagingSenderId: "699147599321",
    appId: "1:699147599321:web:8ec091afcb7ab95276edc8",
    measurementId: "G-PD5N98KXKD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


let button1 = document.getElementById('button1');
let counter = 0;

button1.onclick = () => {
    let buttonNum = ++counter;

    let newButton = document.createElement('button');
    newButton.innerHTML = 'hello #' + buttonNum;
    newButton.classList.add('new-button');

    newButton.onclick = () => {
        buttonPress(buttonNum);
    }


    let newH1 = document.createElement('h1');
    newH1.innerText = "hi!!!"
    document.body.appendChild(newH1);

    document.body.appendChild(newButton);
}

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'items');

// Add a document with a generated ID
// addDoc(colRef, {
//   name: 'Item 1',
//   description: 'Description of Item 1',
//   price: 10.99
// })
//   .then(docRef => {
//     console.log('Document added with ID: ', docRef.id);
//   })
//   .catch(error => {
//     console.error('Error adding document: ', error);
//   });

//   getDocs(colRef)
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, ' => ', doc.data());
//     });
//   })
//   .catch(error => {
//     console.error('Error getting documents: ', error);
//   });