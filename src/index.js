import { buttonPress } from "../button.js";

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