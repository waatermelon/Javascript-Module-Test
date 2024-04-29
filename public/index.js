import { buttonPress } from "./button.js";

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