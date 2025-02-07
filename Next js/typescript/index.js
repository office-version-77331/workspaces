"use strict";
console.log('hello Typescript ');
let num = 5;
// fnction define in type script 
//@ts-ignore 
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 'void'));
// @ts-ignore
function sumOfTwoNum(a, b) {
    return a + b;
}
console.log('Total Of Two Num : ', sumOfTwoNum(6, 8));
//  with arrrow function :
const abc = (a, b) => {
    return a + b;
};
let MyName = 'XYZ';
const string = 'Hello, How are you';
const UpperCaseString = string.toUpperCase();
console.log('Upper case String : ', UpperCaseString);
const LowerCaseString = string.toLowerCase();
console.log("Lower  case : ", LowerCaseString);
const isEven = (a) => {
    return a % 2 === 0;
};
console.log(isEven(5));
const isDivisibleByFourAndEight = (a, b) => {
    return a % 4 === 0 && b % 4 === 0 && a % 8 === 0 && b % 8 === 0;
};
console.log('Result of  two numbers in form of booleans : ', isDivisibleByFourAndEight(8, 6));
console.log(2 ^ 4);
const bigNumber = 9007199254740992n;
console.log(bigNumber);
let anyType = 5;
anyType = 'kuch bhi';
anyType = true;
let anyType1 = {
    a: 0,
    b: 'hello'
};
let array = [];
// unknown type  // 
let num1;
num1 = 9;
num1 = true;
num1 = 'Hello';
// usecases  we can  check the  type during  some  opreations like :
const fetchData = async () => {
    const response = await fetch('http://localhost/3000/api');
    const result = await response.json();
    return result;
};
const processData = async () => {
    const result = await fetchData();
    if (typeof result === 'object') {
        return; // Perform  operations on the  response  object; 
    }
};
let message = 'Hello, TypeScript! ';
console.log(typeof message);
//Function declaration in type script and returning :
const greetYou = (name, id) => {
    console.log(`Hello , Welcome  ${name} in Hope station with id :${id} `);
    return 'String';
};
greetYou('Tushar', 10);
const isPalindrome = (string) => {
    const getSring = string;
    const reverseString = getSring.split('').reverse().join('');
    console.log(reverseString);
    return getSring === reverseString;
};
console.log(`Checking Palindrome : ${isPalindrome('Hello')}`);
// Optional and Default parameters  
// 1 Optional parameters : 
const greet1 = (name, id) => {
    if (id) {
        return `Hello , Welcome  ${name} in Hope station with id :${id} `;
    }
    else {
        return `Hello, Boy ${name}`;
    }
};
console.log('with id : ');
console.log(greet1('Tushar', 10));
console.log('Without Id: ');
console.log(greet1('Tushar'));
// 2 Default parameters  : 
const greet2 = (name, id = 2) => {
    console.log(`Hello , Welcome  ${name} in Hope station with id :${id} `);
    return 'String';
};
console.log(greet2('Preet'));
// Arrays in Type Script  
// using Square brackets : 
const number = [2, 3, 3, 3, 4, 4, 55, 5];
// Using array constructor :
const newArray = new Array(2, 34, 6, 7, 5, 46);
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
const newUpadtedArray = fruits.push('Grapes');
console.log(newUpadtedArray);
console.log(fruits);
const newUpdatedArray = fruits.pop();
console.log(newUpdatedArray);
console.log(fruits);
// arary iteration :
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// forEach loop :
fruits.forEach((fruit) => {
    console.log(fruit);
});
// for of loop :..
for (const fruit of fruits) {
    console.log(fruit);
}
//map method :
const newFruits = fruits.map((item, index) => {
    return `${item} - ${index}`;
});
console.log(newFruits);
// filter method :
const filterFruits = fruits.filter((item, index) => {
    return item.length > 5;
});
console.log(filterFruits);
// reduce method :
const reduceFruits = fruits.reduce((acc, item) => {
    return `${acc} ${item}`;
});
console.log(reduceFruits);
// Object in Type Script :
const object = {
    name: 'Tushar',
    age: 23,
    id: 1,
    address: {
        city: 'Pune',
        state: 'MH'
    }
};
console.log(object.name);
