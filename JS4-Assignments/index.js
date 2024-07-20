// #1- creating the array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log (ages)
/* #1a to programatically complete a desired operation, the best way to go here is to 
write a function that we can invoke to run our operation,
and then return the desired data */
const ageDiffCalc = (array) => array[array.length - 1] - array[0];
 //short for "age difference calculation", which this code will achieve 


let ageDiff = ageDiffCalc(ages); // the variable "ageDiff" is short for "age differential"
console.log (ageDiff) // OP-90

/* #1b now that we have our means of completing the operation, next we are going to add data using the Push method
 and run it back through the function ageDiffCalc */
ages.push (70);

ageDiff = ageDiffCalc(ages);
console.log(ageDiff) // OP- 67

/* #1c now, to create a loop to determine the average age. first we need to consider what math to use.
we should break this into two steps, first we want to figure out the total age by combining all entries byusing array.length. */

const calcAvgAge = (array) => { // arrow functions for somplicity
    let totAge = 0;
    for (let i = 0; i < array.length; i++) {
        totAge += array[i];
    }
    return totAge / array.length; //dividing the sum of all ages by the number of entries give us the average age 
};

let avgAge = calcAvgAge(ages);
console.log(Math.round(avgAge)); 
/* op: 33. I am using math.round to show only the age value, not with decimals since we do not say "I am 33.33 years old"
with this, we have finally completed question #1 */

//#2, creating an array called names

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//#2a create loop to iterate through array and calculate average length of names  

let nameLength = 0; //set equal to zero so we can scale to our index

for (let i = 0; i < names.length; i++) {
    //this will iterate through the array, now to calculate avg 
nameLength += names[i].length;
}

const avgNameLength = nameLength / names.length; 
console.log (names)
console.log (avgNameLength)
/*I maybe could name my variable differently here to avoid confusion in a work environment,
 but I want to demonstrate that I understand that "nameLength" is my var and names.length refers to the length of the array "names" */

// #2c 
names.sort(); //I chose to sort so they will appear in alphabetical order
let nameList = ' '; 
for (let i=0; i < names.length; i++) {
    nameList += names[i];
    if (i < names.length - 1) {
        nameList += ' '; //add a space if there are names remaining
    }
}
console.log(names);
console.log (nameList);

// #3 getting the final value in an array:
/* my preferred way of acessing the last element in an array
would be to use a console.log to print (arrayName).length -1 to the console, as such:
${let arrayName = [name1, name2, name3]
console.log(arrayName.length -1)} */

// #4 getting the first value in an array
/* arrays are tuned to 0, so something like console.log (arrayName[0]) would display the first value */

// #5 create a new array called nameLengths/ 
//write a loop to iterate over the first name length array and add the length of each name to the nameLengths array.
let nameLengths = []; 
/*introduce an index variable and set to 0 so it can scale with our array, 
and connect it to the array "names" so long as it is shorter than our current array */
for (let i = 0; i < names.length; i++) {
    // push each value in the array "names" to the array "nameLengths" relative to the index, which will cycle throught he array
    nameLengths.push(names[i].length); 
} 
//log to console
console.log(nameLengths);
/* I am now getting very confusing with the names of these arrays, functions, and variables, 
in another setting I would name them more uniquely */

// #6 write a loop to calculate sum of nameLengths
let combinedNameLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    combinedNameLength += nameLengths[i];
}

console.log ("combined name length is ", combinedNameLength);
// #7 Write a function that takes two parameters, word and n, and returns word n number of times
function repeater (word, n) {
    let reps = ''; //tell js we are working with words
    for (let i = 0; i < n; i++) { // set values to 0 for scaling
        reps += word; // perform addition
    }
    return reps;
}

//test
let word = "haha";
let n = 10;
let wordReps = repeater(word,n);
console.log(wordReps);
// #8 create a function that combines two variables, "first name" and "last Name" in that order

function yourNameIs(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return fullName;
}

//test
let firstName = 'Charlie';
let lastName = 'Brown';
let fullName = yourNameIs(firstName, lastName)
console.log(fullName);

// #9 write a function that determines if sum of numbers is greater than 100
function overHundred(array) {
    let sum = 0; // 0 for scaling to an array
    for (let i = 0; i < array.length; i++){
    sum += array[i];
    } // add each element to the sum 
if (sum > 100){
    return true;
} else{ 
    return false;
    }
}

// test
let numericData = [98 + 1];
let decision = overHundred(numericData);
console.log (decision); // OP: false

numericData = [98 + 3];
decision = overHundred(numericData);
console.log(decision); // op true

// #10 write a function that takes an arrays of numbers and returns the average of all the elements in the array

function calcAvg (array){ //declare function, name, and data type
   let sum = 0;
   for (let i =0; i < array.length; i++) { //set values and increments
    sum += array[i];
   }
   let avgNum = sum / array.length; // equation
   return avgNum;
}

// test
let avgNums = [23,46,69,92,115,138,161];
console.log (calcAvg(avgNums));

// #11 write a function that compares the averages of 2 arrays of numbers
//to do this, we will call the function we previously created to calculate averages, calcAvg, and we will run that on the 2 arrays we create  
function avgGreater (array1, array2) {
    const avg1 = calcAvg(array1); //const works here because mathematic formuli are typically stagnant
    const avg2 = calcAvg(array2);
    
    return avg1 > avg2;
}
//test 1
let array1 = [10 + 20 + 30 + 40 + 50]; //values
let array2 = [9 + 19 + 29 + 39 + 49];
let outcome = avgGreater(array1, array2); //call function
console.log(outcome); //OP: true

//test2
array1 = [1 + 1 + 1 + 1 + 1];
array2 = [2 + 2 + 2 + 2 + 2];
outcome = avgGreater(array1, array2);
console.log(outcome); // op: false

// #12 determine if will buy drink if conditions are met
// to do this, I will actually create 2 functions to ensure all conditions are met
function tooHot(temperature) {
    const heatParam = 80; //I would consider this a hot day
    if (temperature > heatParam) {
        return true;// it's hot!
    } else {
        return false; //nice day
    }
}

function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
//test

let currentTemp = 94;
let moneyInPocket = 11;
let isHotOutside = tooHot(currentTemp);
let willBuy = willBuyDrink(isHotOutside, moneyInPocket);

console.log(willBuy);

//test 2
currentTemp = 60;
moneyInPocket = 200;
isHotOutside = tooHot(currentTemp);
willBuy = willBuyDrink(isHotOutside, moneyInPocket);

console.log(willBuy);

// #13 will you buy gas?
//we will buy gas if we are low, and if we can afford it, which we will determine below
function buyGas(fuelMiles, cash){ //create fucntion, attune variables
    if (fuelMiles < 25 && cash > 50) { //set thresholds for our decision
return true; 
    } else {
        return false;
    }
}
//test
let fuelMiles = 60;
let cash = 100;

let shouldBuyGas = buyGas(fuelMiles,cash); // op:false, we have money but we have 60 miles still

// test 2
fuelMiles = 5;
cash = 52;

shouldBuyGas = buyGas(fuelMiles,cash);

console.log(shouldBuyGas); // OP; true, we have only 5 miles in the tank, and just enough for $50 worth of gas