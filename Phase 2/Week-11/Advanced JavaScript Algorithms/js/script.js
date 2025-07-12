// Question 1

// pseudo code
// define a function with array of numbers
// define a for loop
// check if the numbers in the array are even and if the index of their position is even
// copy the element into another array
// call function

// function getOnlyEvens(arr){
//     let anotherArray=[];
//     for(let i=0;i<arr.length;i++){
//         if((arr[i]%2===0)&&(i%2===0)){
// anotherArray.push(arr[i]);
//         }
//     }
//     return anotherArray
// }
// let newArray1 = getOnlyEvens([1, 2, 3, 6, 4, 8]);
// let newArray2 = getOnlyEvens([0, 1, 2, 3, 4]);
// console.log(newArray1

// );
// console.log(newArray2);

// Question 2
// pseudo code
// define a function with a 2 digit parameter
// check if the input is a 2 digit number
// reverse the digits
// check if reverse is greater than original if so print ok if not print not ok
// call function

// let num =45
// let result=num.toString().split("")
// console.log(result);
// let result1 = result.reverse();
// console.log(result1);
// let result2 = result1.join("");
// console.log(result2);

// const reverseCompare=(num)=>{
//     if (typeof num!="number" || num.length>2|| num>0){
//         return "Please insert a valid value";
//     }
//     let result=num.toString().split("").reverse().join("");
//    if (result<num){
//     return "Ok";
//    }
//    return "Not ok";
// }
// console.log(reverseCompare(72));
// console.log(reverseCompare(23));

// Question 3
// pseudo code
// define a function that takes a positive integer as a parameter
// check if the number is a positive integer
// define a variable for factorial and assign to 1
// if so check if the number is equal to 0 or 1 and if true return 1
// else calculate factorial of number using the formula
// call the function

// const returnFactorial = (number) => {
//   if (typeof number != "number" || number < 0) {
//     return "Please insert a positive integer value";
//   }

//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   let factorial = 1;
//   for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// };
// console.log(returnFactorial(5));
// console.log(returnFactorial(6));
// console.log(returnFactorial(0));

// Question 4 (Meera array)
// pseudo code
// define a function that takes an array as a parameter
// check if the input is an array
// if not display error
// create an empty array(newArray)
// if yes multiply the array elements by 2 and save it on newArray
// check if any of the values of the original array is equal to the new array, if true display "I am not meera array"
//   if false display  "I am a meera array"
// call function

// function checkMeera(arr) {
//   if (Array.isArray(arr) !== true) {
//     return "Please provide an array";
//   }
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * 2);
//   }
//   console.log(newArray);
//   //  let result = arr.some((item) => newArray.includes(item));
//   let result = arr.includes(newArray);
//   if (result === true) {
//     console.log("I am NOT a Meera array");
//   } else {
//     console.log("I am a Meera array");
//   }
// }
// checkMeera([10, 4, 0, 5]);
// checkMeera([7, 4, 9]);
// checkMeera([1, -6, 4, -3]);

// Question 5 (Dual array)
// pseudo code
// define a function with an array as a parameter
// check if the input is an array
// if not return error
// if so check if the length of the array is odd, if so return 0
// define a count variable
// define a nested for loop and check if a number occurs more than 1 time ad if so increment count
// check if the count is 2, if yes return 1
// call the function
// function isDual(arr) {
//   if (Array.isArray(arr) !== true) {
//     return "Please provide an array";
//   }
//   if (arr.length % 2 != 0) {
//     return 0;
//   }
// const isDual = (arr) =>
//   arr.reduce((count,item) => {count[item] = (count[item]||0)+1

// return (count)},{});
// let count = 1;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//       if (count !== 2) {
//        return 0;
//       }
//       else{return 1}
//     }
//   }
// }
// }

// function isDual(arr) {
//   if (Array.isArray(arr) !== true) {
//     return "Please provide an array";
//   }
//   if (arr.length % 2 != 0) {
//         return 0;
//       }
//   const counts = {};
//   for (const i of arr) {
//     if (counts[i]) {
//       counts[i]++;
//     } else {
//       counts[i] = 1;
//     }
    
//   }
//   for (const i in counts) {
//     if (counts[i] !== 2) {
//       return 0;
//     }

//     return 1;
//   }
// }

// console.log(isDual([2, 5, 2, 5, 5]));
// console.log(isDual([1, 2, 1, 3, 3, 2]));

// Question 6
// pseudo code
// define a function with a number as a parameter
// check if the input is a number greater than 0
// if not rdisplay error
// if yes break down the given number into hours minutes and seconds
// display the result

// const digitalclock = (number) => {
//   if (typeof number != "number" || number < 0) {
//     return "Please insert a positive numerical value";
//   }

//   let hours = Math.floor(number / 3600) % 24;

//   let min = Math.floor((number % 3600) / 60);

//   let sec = Math.floor(number % 60);

//   const finalHours = hours < 10 ? "0" + hours : hours;
//   const finalMin = min < 10 ? "0" + min : min;
//   const finalSec = sec < 10 ? "0" + sec : sec;
//   console.log(`The time is ${finalHours}:${finalMin}:${finalSec}`);
// };
// digitalclock(61201);
// digitalclock(87000);


// function min(arr){
//   let newA=[]
//   newA.push((Math.min(...arr)))
//   newA.push((Math.max(...arr)));
//   return newA
// }
// console.log(min([1,2,3,4]));

