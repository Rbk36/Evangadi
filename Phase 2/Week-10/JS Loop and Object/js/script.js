// Question 1

// pseudo code
// define a function
// inside the function define a for loop with a variable i , initialize i from 1 , check the condition if i<10, increment i
// display the value of the i
// call the function
// function displayNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// displayNumbers();

// Question 2

// pseudo code
// define a function that takes a parameter num
// check if the argument is a number if not display error message
// inside the function define a for loop with a variable i , initialize i, check the condition i<=i+5, increment i
// increment i by i and display result
// call function

// function nextFivenumbers(num) {
//   if (typeof num != "number") return "Please insert a numerical value";
//   for (let i = num + 1; i <= num + 5; i++) {
//     console.log(i);
//   }
// }
// nextFivenumbers(7);

// // Question 3

// // pseudo code
// // define a function with x as a parameter
// // check if the argument is a number if not display error message
// // create a sum variable which is first assigned to 0
// // inside the function define a for loop with a variable i , initialize i, check the condition i<=i+10, increment i
// // update the value of sum by adding i value to sum
// // return the result of sum
// // call the function

// function sumNextNumbers(x) {
//   let sum = 0;
//   if (typeof x != "number") return "Please insert a numerical value";
//   for (let i = x + 1; i <= x + 10; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumNextNumbers(7));

// // Question 4
// // pseudo code
// // define a function with array as a parameter
// // inside the function define a for loop with a variable i , initialize i, check the condition i<=array.length, increment i
// // print the values in the array
// // call function

// function myArray(arr) {
//   for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// myArray([1, "Hello", 8, 44]);

// // Question 5
// // pseudo code
// // define a function with an array as a parameter
// // display the total number of elements using the .length property
// // call the function

// function totalArrayelements(arr) {
//   console.log(arr.length);
// }
// totalArrayelements([1, "Hello", 8, 44]);

// totalArrayelements(["world", 13]);

// // Question 6
// // pseudo code
// // define a function with an array as a parameter
// // create a sum variable which is first assigned to 0
// // inside the function define a for loop with a variable i , initialize i, check the condition i<array.length, increment i
// // update the value of sum
// // call the function

// function sumArrayElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       return "Please make sure all array elements are numbers";
//     }
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumArrayElements([5, 6, 99, 8, 76, 4, 68, 44]));
// console.log(sumArrayElements([3, 0]));

// console.log(sumArrayElements([3, 0, "1"]));
// // Question 7
// // pseudo code
// // define a function with an array parameter
// // declare two variables sum of odd and sum of even, initialize them to 0
// // inside the function define a for loop with a variable i , initialize i, check the condition i<array.length, increment i
// // check if all array elements are numbers if not display error message
// // check if our element is even then sum the even values and update the first variable declared(sum of even)
// // check if our element is odd then sum the odd values and update the first variable declared(sum of odd)
// // subtract the above two sum values and return the value
// // call the function
// function differenceOfTotalsum(arr) {
//   let sumOfEven = 0;
//   let sumOfOdd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") {
//       return "Please make sure all array elements are numbers";
//     }
//     if (arr[i] % 2 == 0) {
//       sumOfEven += arr[i];
//     }
//     if (arr[i] % 2 != 0) {
//       sumOfOdd += arr[i];
//     }
//   }

//   return sumOfEven - sumOfOdd;
// }
// console.log(differenceOfTotalsum([5, 6, 99, 8, 76, 4, 68, 44]));

// // Question 8
// // pseudo code
// // define a function with an array as a parameter
// // inside the function define a for loop with a variable i , initialize i, check the condition i<array.length, increment i
// // check if the element is even and display the index of the even elements
// // call the function
// function displayEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// displayEvenIndex([5, 6, 99, 8, 76, 4, 68, 44]);
// displayEvenIndex([11, "Sam", 3, 7, "car"]);

// // Question 9
// // pseudo code
// // define a function with am array as a parameter
// // use the array object splice to remove the last element from the array and add a new value, return the array
// // call the function
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// function removeLastElement(sampleArray) {
//   sampleArray.splice(7, 1, "32");
//   return sampleArray;
// }
// console.log(removeLastElement(sampleArray));

// // Question 10
// // pseudo code
// // define a function with an array as a parameter
// // use the sort method to sort the array in ascending order
// // call the function

//   sampleArray.sort(function (a, b) {
//     return a - b;
//   });
  

// console.log((sampleArray));

// // Question 11

// let evangadiClass = {
//   lengthOfCourse: "1 Month",
//   website: "https://www.evangadi.com/",
//   isChallenging: false,
//   topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//   students: [
//     {
//       name: "Abebe",
//       age: 34,
//       sex: "M",
//     },
//     {
//       name: "Kebede",
//       age: 44,
//       sex: "M",
//     },
//     {
//       name: "Almaz",
//       age: 27,
//       sex: "F",
//     },
//     {
//       name: "Challa",
//       age: 22,
//       sex: "M",
//     },
//     {
//       name: "Chaltu",
//       age: 19,
//       sex: "F",
//     },
//   ],
// };
// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass);

// // Question 12
// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);

// // Question 13
// // pseudo code
// // define a function with the object  as a parameter
// access the object's property and assign to x
// define a sum variable and initialize to 0
// define a for loop
//   -i=0, i<x.length,increment i
//  then in the loop add the value of age in the students array within the object to the sum variable
// define a variable average and assign it to sum/no of elements in the array
// return average
// // call the function with argument evangadiClass object

// function averageAge(myObject){
//     let x = evangadiClass.students;
//     let sum=0;
//     for(i=0;i<x.length;i++){
//         sum=sum+x[i].age;
//     }
//     let average=sum/x.length;
//     return Math.round(average);
// }
// console.log(averageAge(evangadiClass.students));

// Question 14
// pseudo code
// define a function with object as a parameter
// define the length of the students property in the object evangadiClass(x)
// define a count variable and assign it to 0
// define a for loop with initialization(i=0) , condition (i<x.length) and expression(i++)
// inside the loop use a conditional statement and
//  check if the gender property in the student object is male if so increment count
// define a variable for percentage and assign it to count/array length and multiply by 100%
// return percentage
// call the function with argument evangadiClass object

// function percentage(obj) {
//   let x = evangadiClass.students;
//   let count = 0;
//   for (i = 0; i < x.length; i++) {
//     if(evangadiClass.students[i].sex=="M"){
//       count++;
//     }
  
//   }
//   let percentage = `${(count / x.length) * 100}%`;
//   return percentage;
// }
// console.log(percentage(evangadiClass));

// Question 15
// define a function with two parameters(a,b) for low and high numbers
// calculate length (length=a-b)
// define a for loop with initialization(i=a+1) , condition (i<b) and expression(i++)
// display i on the console
// define a condition statement to check if i is divisible by 3 and display "div3" if it is
// call function

// function divisorOfThree(a,b){
// check validation if a<b
//     for(i=a+1;i<b;i++){
//         console.log(i);
//         if(i%3==0){
//             console.log("div3");
//         }
//     }
// }
// divisorOfThree(10,15);

// Question 16
// pseudo code
// define a function
// define a for loop with initialization(i=1), condition(i<=100), condtion (i++)
// check if i is divisible by 3 and 5 if true display fizzbuzz on the console
// 2nd condition , check if a i is divisible by 3 if true display fizz on the console
// 3rd condition , check if  i is  divisible by 5 if true display buzz on the console
// else print the number itself
// call the function

// function fizzbuzz(){
//     for(i=1;i<=100;i++){
//         if (i%3==0&& i%5==0){
//             console.log("FizzBuzz");
//         }else if(i%3==0){
//             console.log("Fizz");
//         }else if(i%5==0){
//             console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// }
// fizzbuzz();

// Question 17
// pseudo code
// define a function with a number as a parameter
// separate the digits of the number and use map method to  convert the separated digits to numbers
// check if each digits are even(divisible by 2) and return 1 if true else 0
// call the function

// let num=897;
// let d = [...(num + "")]
// console.log(d);
// let c = [...(num + "")].map((n) => +n);
// console.log(c);
// function evensNumber(number) {
//   let digits = [...(number + "")].map((n) => +n);
//   for (i = 0; i < digits.length; i++) {
//     if (digits[i] % 2 == 0) {
//       return 1;
//     }
//     return 0;
//   }
// }

// console.log(evensNumber(2426));
// console.log(evensNumber(3224));


function sortArray(arr){
  let check = true;
  while (check) {
    check = false;
    for (i = 0; i < arr.length - 1; i++) {
      let temp = [];
      if (arr[i] > arr[i + 1]) {
        check = true;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray([45,34,5,52,88,33]));