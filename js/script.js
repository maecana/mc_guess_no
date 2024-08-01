/**
 * DONE: Set a random number
 * DONE: Get number in text input field on click of submit button
 * DONE: Save the number in history array and display history
 * DONE: Check if guessed number is correct or wrong
 * DONE: Display message if the guess is correct or wrong
 * DONE: Empty history, messages, and input field when restart button is clicked
 */
 
let history = new Array();
var perfectNum;

window.onload = () => {
    perfectNum = randomize();
}

startGuess = () => {
    let numGuess = document.querySelector('#input_number').value;

    if(numGuess != '') saveToHistory(numGuess);
    resetInput();

    let msg = checkGuess(numGuess);
    displayMsg(msg);
}

randomize = () => {
    return Math.floor(Math.random() * 100)+1;
}

saveToHistory = (numGuess) => {
    history.unshift(numGuess);

    let ul = '<ul>';
        history.forEach(eachNum => { ul += `<li>You guessed : ${eachNum}`; });
    ul += '</ul>';

    let HISTORY = document.querySelector('.div-history');
    HISTORY.innerHTML = ul;
}

checkGuess = (numGuess) => {
    let msg = '';
    let type = '';

    if(numGuess != '') {
        if(numGuess > perfectNum) {
            msg = `${numGuess} is too high.`;
            type = 'warning';
        } else if(numGuess < perfectNum) {
            msg = `${numGuess} is too low.`;
            type = 'warning';
        } else {
            msg = `${numGuess} IS CORRECT !`;
            type = 'success';
        } 
    } else {
        msg = 'You have to guess first.';
        type = 'danger';
    }

    return {msg: msg, type: type};
}

displayMsg = (msg) => {
    let MSG = document.querySelector('.div-msg');
    let div = document.createElement('div');
    let divTextNode = document.createTextNode(msg.msg);

    if(msg.type == 'success') {
        div.setAttribute('class', 'msg msg-success');
    } else if(msg.type == 'warning') {
        div.setAttribute('class', 'msg msg-warning');
    } else if(msg.type == 'danger') {
        div.setAttribute('class', 'msg msg-danger');
    } else {
        div.setAttribute('class', 'msg msg-neutral');
    }

    div.appendChild(divTextNode);
    MSG.innerHTML = '';
    MSG.appendChild(div);
}

resetInput = () => {
    document.querySelector('#input_number').value = '';
}

resetHistory = () => {
    let HISTORY = document.querySelector('.div-history');
    HISTORY.innerHTML = '';
    history = new Array();
}

resetMessage = () => {
    let MSG = document.querySelector('.div-msg');
    MSG.innerHTML = '';
}

reset = () => {
    perfectNum = randomize();
    resetInput();
    resetHistory();
    resetMessage();
}