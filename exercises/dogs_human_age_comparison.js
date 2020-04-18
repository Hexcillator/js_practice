/*Dogs age differently than humans and a way to understand
how their age relate to human is by making the following
mathematical calculation:
*/

//it prints the name in lowercase
const myName = 'Pascual '.toLowerCase();

const myAge = 8;
let earlyYears = 2;
//the first two years of a dog are the equivalent of 10.5 human years each
earlyYears*=10.5;
//here we take away the first two years and calculate equivalence of later years
let laterYears = (myAge-2) *4;
//we add the two conversions
let myAgeInDogYears=earlyYears+laterYears;

//finally we log the result to the console


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
