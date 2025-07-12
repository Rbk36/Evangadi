alert("your JS file is connected!!");
// Question 1
console.log(24 > 3); //true
console.log(2 < "12"); //true
console.log(0 == 2); //false
console.log(2.0 === 2); //true
console.log(2.0 == "2"); //true
console.log(2 < "John"); //false
console.log(2 > "John"); //false
console.log("2" < "2"); //false
console.log("2" > "12"); //true
console.log(1 == 1 || 3 == 2 || 3 == 7); //true
console.log(1 == 1 && 2 == 2 && 3 == 7); //false
console.log(1 == 1 || (2 == 2 && 3 == 7)); //true
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
); //true
//Question 3:
// Write a simple script that adds 1 and 2 and displays the result on the console
let a = 1,
  b = 2;
let c = a + b;
console.log(c);

// Question 4

let first_name;
let last_name;
let full_name;
first_name = "Rebka";
last_name = "Ayele";
// full_name = first_name + " " + last_name;
full_name=`${first_name} ${last_name}`;
console.log(full_name);
let name;
name="fhghgjg"