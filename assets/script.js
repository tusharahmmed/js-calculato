/***
 * Project Name: Calco - Calculator
 * Description: This is a part of practice with Vanilla JavaScript and DOM.
 * Author: Tushar Ahmmed
 * Author URI: https://www.facebook.com/tusharahmmed.sakib
 * UI Design: Designed by Author
 * CSS Framework: Tailwind CSS
 * Copyright© : All rights reserved.
 */

// Event Handlers
const mathField = document.querySelector('.math-field');
const resultField = document.querySelector('.result-field');
const acBtn = document.getElementById('ac');
const delBtn = document.getElementById('del');
const equalBtn = document.getElementById('equal');

/**
 * Add some style
 */

// fonts family
document.body.style.fontFamily = 'Balsamiq Sans, cursive';
// add button class
const buttons = document.querySelectorAll('.body button');
for (let btn of buttons) {
    btn.classList += ' border-r border-b border-indigo-400 w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light';
};




/**
 * Event Functions
 */

// Clicked Button Value Add on 
function buttonClicked(className) {
    const buttonList = document.querySelectorAll('.' + className);
    // loop
    for (let btn of buttonList) {
        btn.addEventListener('click', (event) => {
            let btnValue = event.target.innerText;
            // if it is dot(.) btn
            if (btnValue == '.') {
                btnValue = '0' + btnValue;
            }
            // if result field not empty
            if (resultField.innerText != '') {
                mathField.innerText = '';
                resultField.innerText = '';
            }
            mathField.innerText += btnValue;
        });
    }
}

// equalTo
function equalToclicked() {
    equalBtn.addEventListener('click', (event) => {
        let mathString = mathField.innerText;
        let result = eval(mathString);
        // insert result in resultField
        resultField.innerText = '= ' + result;
    })

}

// allClear Button
function allClearClicked() {
    acBtn.addEventListener('click', (event) => {
        mathField.innerText = '';
        resultField.innerText = '';
    })
}

// delete button
function deleteButtonClicked() {
    delBtn.addEventListener('click', (e) => {
        let currentMathValue = mathField.innerText;
        let newMathValue = currentMathValue.substring(0, currentMathValue.length - 1);
        mathField.innerText = newMathValue;
    })
}


/**
 *  Call Functions
 */

// click number button
buttonClicked('number');
//click operator button
buttonClicked('operator');
// click equal button
equalToclicked();
// click ac button
allClearClicked();
//click del button
deleteButtonClicked();