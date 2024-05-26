// //First code wars challenge
// // Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// // The binary number returned should be a string.

// //in order convert an integer  we have to divide the number by 2, untill its value is zero


function binary(a,b){
    return (a + b).toString(2)
}
console.log(binary(9,5))




//Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]


// convert the numbers into strings
// //use the map method to parse each item in the array back to an integer
function digitize(n) {
const number = n.toString();
return number.split('').map(num =>  parseInt(num));

}

console.log(digitize(1234))


//Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// // we need to use the split method to split each word into its own array
// //we will then use the map method to find out the length of each word

function findShort(s){
     console.log(s.length)
   const words = s.split(' ');

   const wordLength = words.map(word => word.length)
// the Math.min function can help us find the smallest word length
   const shortestWord =  Math.min(...wordLength);
   return shortestWord;



}

console.log(findShort('Hello My name is'))


// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// we can use regex to check if its a letter or number, or any other type of character
function isItLetter(character) {
    const checkLetter =  /[A-Za-z]/.test(character)
    if(checkLetter){
        return true
    } else{
        return false
    }
    
    
}

isItLetter('hello');


// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, 
// then don't add it to the sum. See the 4th example below.

//use conditionals to check if values are less than or greater



const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    } else if((end - begin) % step !== 0){
        end -= (end - begin) % step;
    }
    let  numSteps = Math.floor((end - begin) / step) + 1;
    return numSteps * (begin + end) / 2;
}
  ;