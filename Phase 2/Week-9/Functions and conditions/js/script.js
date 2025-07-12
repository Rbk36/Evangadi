// alert("your JS file is connected!!");
//Questions on functions
//Question 1
// function without parameter
function myFirst() {
  console.log("Hello");
}
myFirst();

//Question 2
// function having one parameter
function mySecond(name) {
  console.log(`Hello ${name}`);
}
mySecond("Rebka");

// Question 3
function myThird(anotherName) {
  mySecond(anotherName);
}
myThird("Abebe");

function add(a, b) {
  let sum = a + b;
  return sum;
}
// average of a number
// function add(a,b) {
//   let sum=a+b;
//   return sum;
// }
// function avg(c,d) {
//   addition=add(c,d);
//   avg=addition/2;
//   return avg;
// }
// console.log(avg(3,4));
// Question 4
// take array as an input
function myFourth([arr]) {
  // display the first element of the array
  console.log(arr[0]);
}
myFourth([1, 3, "abebe", 23]);
// Question 5
function myFifth([a, b]) {
  if (typeof a != "number" || typeof b != "number") {
    return "Please insert numerical value";
  }
  console.log(a + b);
}
myFifth([1, 3]);
// Question 6
function minutesToSecondConverter(minutes) {
  // check if the input is a number
  if (typeof minutes != "number") {
    return "Please insert numerical value";
  }
  if (minutes < 0) {
    return "Please insert a positive value";
  }
  return minutes * 60;
}
console.log(minutesToSecondConverter(5));

// Question 7
function increment(number) {
  return ++number;
}
console.log(increment(5));
// Question 8
//pseudo code
// // define the base and height
// function area(base, height)
// check if the values are numerical values and also -ve values
// // multiply the base and height and divide by 2
// result=base*height/2
// // return the value
// return result;
function area(base, height) {
  if (typeof base != "number" || typeof height != "number") {
    return "Please insert numerical value";
  }
  if (base <= 0 || height <= 0) {
    return "Please insert positive value greater than 0";
  }
  result = (base * height) / 2;
  return result;
}

console.log(area(5, 10));
// Question 9
// chicken=2
// cow=pig=4
// a,b,c
// 2 * a + 4(b + c);
// pseudo code
// define animal types a,b,c
// check if the input is a positive numerical value
// use the formula 2 * a + 4(b + c) to calculate the number of legs
// return result
function numberOfLegs(a, b, c) {
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    return "Please insert numerical value";
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Please insert positive value greater than 0";
  }
  return 2 * a + 4 * (b + c);
}
console.log(numberOfLegs(2, 3, 5));
console.log(numberOfLegs(1, 2, 3));

// Question 10
// [a,b]
// [3*a]
// pseudo code
// define the array with two parameters
// check if the inputs are numerical values
// multiply first number by 3
// return result
function triple([a, b]) {
  if (typeof a != "number") {
    return "Please insert numerical value";
  }
  return 3 * a;
}
console.log(triple([2, 3]));

// Questions on Conditional statements and - practice exercise
// Question 11
// num1=3
// num2=4
// num1==num2=>true
// pseudo code
// define the two numbers
// compare the values
// return true if comparision is true else false
function compare(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

console.log(compare(3, "3"));

// Question 12
// a%100=0==>true else false
// // pseudo code
// define the number to be divided
// check if the input is a numerical value
// divide the number by100
// if divided without remainder return true else false
function divisible(a) {
  if (typeof a != "number") {
    return "Please insert numerical value";
  }
  if (a % 100 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisible(1000));

// Question 13
// a%2==0,even else true
// pseudo code
// define the number
// check if the input is numerical value
// check if the number is divided by 2 without remainder
// return even if true else return odd

function evenOrOdd(num) {
  if (typeof num != "number") {
    return "Please insert numerical value";
  }
  if (num % 2 == 0) {
    return '"even"';
  } else {
    return '"odd"';
  }
}
console.log(evenOrOdd(146));

// // Question 14

// // number=-ve or>100 invalid score
// // pseudo code
// define score
// check if the value is number or -ve or >100 return 'invalid score'
// check if valueis b/n 90 and 100
function grade(score) {
  if ( typeof score!="number" || score > 100 || score < 0) {
    return "Invaild score";
  } else if (score >= 90) {
    return "Grade A";
  } else if (score >= 80) {
    return "Grade B";
  } else {
    return "C";
  }
}

console.log(grade(100));

var c="abebe"
console.log(typeof c);

var d= new String("banaba");

console.log(typeof d);
