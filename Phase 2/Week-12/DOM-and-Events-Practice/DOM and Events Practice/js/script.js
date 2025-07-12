// Question 1
// 1.1
// const samp1 = document.getElementById("sample1");
// 1.2
// console.dir(samp1);
// 1.3
// console.log(samp1.textContent);
// console.log(samp1.innerText); //clears the whitespace but on textContent it doesn't clear z white space
// Question 2
// 2.1
const techcomp = document.getElementById("techCompanies");
// console.log(techcomp);
// // 2.2
// const techcomp1 = document.querySelector("#techCompanies");
// console.log(techcomp1);
// // 2.3
// const total = document.querySelectorAll("#techCompanies li").length;
// console.log(total);
// // 2.4
const redClass = document.getElementsByClassName("red");
console.log(redClass);
const redClass1 = document.querySelectorAll(".red");
console.log(redClass1);
// 2.5
const newliElem = document.createElement("li");
newliElem.textContent = "Facebook";
console.log(newliElem);
// 2.6
newliElem.className = "blue";
// 2.7
techcomp.append(newliElem);
// 2.8
const blueClass = document.getElementsByClassName("blue").length;
console.log(blueClass);
const answer = document.createElement("p");
answer.textContent = `The total number of elements with the class blue is ${blueClass}`;
const parent = document.getElementById("blueCompanies");
parent.append(answer);
console.log(techcomp);
// Question 3
const yesBtn = document.getElementById("yesBackground");
const noBtn = document.getElementById("noBackground");
function changeBackground() {
  document.body.style.backgroundColor = "#99ecff";
}
function removeBackground() {
  document.body.style.backgroundColor = "";
}
yesBtn.addEventListener("click", changeBackground);
noBtn.addEventListener("click", removeBackground);

// Question 4

const form = document.getElementById("adder");
const error = document.createElement("p");
const addition = document.getElementById("sum");
const addBtn = document.getElementById("submitButton");
form.append(error);

function sum() {
  const a = Number(document.getElementById("first").value);
  const b = Number(document.getElementById("second").value);

  if (isNaN(a) || isNaN(b)) {
    error.textContent = "Please enter numerical values only";
  } else {
    let result = a + b;
    console.log(result);
    addition.innerText = `The sum of the two values is ${result}`;
  }
}
addBtn.addEventListener("click", sum);
