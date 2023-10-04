/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

oddsArray = numbersArray.filter(number => number % 2 == 1);
document.querySelector('#odds').innerHTML = oddsArray;

/* Output Evens Only Array */

evensArray = numbersArray.filter(number => number % 2 == 0);
document.querySelector('#evens').innerHTML = evensArray;

/* Output Sum of Org. Array */

sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedArray;