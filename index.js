// Calculate the sum of numbers within a range.

function calcSumInRange() {
    let startingPoint = parseInt(prompt('Enter starting number'));
    let endingPoint = parseInt(prompt('Enter ending number'));
    let i = startingPoint;
    let finalSum = 0;

    while (i <= endingPoint) {
        finalSum = finalSum + i;
        i++;
    }
    
    alert(`The final sum of the range you provided is ${finalSum}. \nThat is between ${startingPoint} and ${endingPoint}`);
}


// Find the greatest common divisor (GCD) out of two numbers entered by the user

function getGCD() {
    let firstNumber = parseInt(prompt('Enter first number to find GCD'));
    let secondNumber = parseInt(prompt('Enter second number to find GCD'));
    let biggerNumber;
    let i = 1;
    let theDivisor;

    
    if (firstNumber < secondNumber) {
        biggerNumber = secondNumber;
    } else if (firstNumber > secondNumber) {
        biggerNumber = firstNumber;
    } else {
        biggerNumber = firstNumber;
    }


    while ((i < (biggerNumber / 2))) {
        if ((firstNumber % i === 0) && (secondNumber % i === 0)) {
            theDivisor = i;
            i++;
        } else {
            i++;
        }
    }

    alert(`The greatest common divisor of ${firstNumber} and ${secondNumber} is:\n${theDivisor}`);
}


// Function that gets all the divisors of a number and stores them into an array.
function getDivisors() {
    let numToGetDivisors = parseInt(prompt('Enter number to get an array of divisors'));
    let divisorsArray = [];
    let arrayIndex = 0;
    let divisor = 1;
    
    while (divisor <= (numToGetDivisors / 2)) {
        if (numToGetDivisors % divisor === 0) {
            divisorsArray[arrayIndex] = divisor;
            arrayIndex++;
            divisor++;
        } else if (numToGetDivisors % divisor !== 0) {
            divisor++;
        }
    }
    
    alert('The resulting divisors are: \n' + divisorsArray);
}


// Count the number of digits in a number
function countTotalDigits() {
    let numberInt = parseInt(prompt('Enter number to find out its number of digits'));
    let numberArr = numberInt.toString().split('');

    alert(`Your number ( ${numberInt} ) has ${numberArr.length} digits.`);
}


// The user enters 10 numbers and the program calculates how many of the entered numbers are positive, negative, zero, even, and odd.

function tenNumbersStats() {
    let i = 0;
    let j = 0;
    let myArray = [];
    let positiveNums = 0;
    let negativeNums = 0;
    let zeroNums = 0;
    let evenNums = 0;
    let oddNums = 0;

    while (i < 10) {
        myArray[i] = parseInt(prompt(`Number ${i + 1} - enter number`));
        i++;
    }

    while(j < 10) {
        if (myArray[j] === undefined || myArray[j] === null || isNaN(myArray[j])) {
            j++;
        } else {
            if (myArray[j] > 0) {
                positiveNums++;    
            }
            if (myArray[j] < 0) {
                negativeNums++;    
            }
            if (myArray[j] === 0) {
                zeroNums++;    
            }
            if ((myArray[j] % 2) === 0) {
                evenNums++;    
            }
            if ((myArray[j] % 2) === 1) {
                oddNums++;    
            }
            j++;
        }
    }
    
    alert(`The numbers you entered are as following:\n${myNewArray}\nThe following statistics have been carried out:\n- Positive numbers: ${positiveNums}\n- Negative numbers: ${negativeNums}\n- Zeroes: ${zeroNums}\n- Even numbers: ${evenNums}\n- Odd numbers: ${oddNums}`);
}

// Print multiplication table

function multiplicationTable() {
    let y = 1;
    let multiArray = [];

    while (y <= 10) {
        let x = 1;    
        while (x <= 10) {
            multiArray[x - 1] = x * y;
            x = x + 1;
        }
        y = y + 1;
        console.log(multiArray);
    }
    
}

// Display days of the week in a loop - Display the first, ask the user after each if they want to continue and if yes, continue to the next day.

function dayOfTheWeek() {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let i = 0;

    let actualDay = confirm(`Today is ${days[i]}, do you want to continue?`); 
    while (i < days.length - 1) {        
        if (actualDay === true) {
            actualDay = confirm(`Today is ${days[i + 1]}, do you want to continue?`);
            i++;
        };
    }
}


// Guess the number game

function guessNumber() {
    let maxNumber = 100;
    let minNumber = 0;
    let finalNumber = 50;

    let guess = confirm(`The number you were thinking is:\n\n${(maxNumber - minNumber) / 2}`);
    if (guess) {
        alert('You were thinking 50.');
    } else {
        
        

    }
}