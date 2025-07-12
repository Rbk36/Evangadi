// Question 1: Change Background Color Based on Radio Button Selection

// Add a list of radio buttons to the page, each corresponding to a different color option. When a user selects one of these radio buttons, the background color of the page should change to the chosen color.

// Note: When the user selects "Night mode", the background should change to black with white text. When "Sunny mode" is selected, the background should change to light blue with black text.

// *****************************************

// Question 2 : Increase or Decrease Number When Buttons are Clicked

// Create two functions, one for each button, to increase and decrease the value displayed in the middle of the page.
// note: the number shouldn't go below 0 and above 20

// *****************************************

// Question 3 : Simple Form Validation

// Implement form validation for a login form. When the user tries to submit the form with any empty input fields, change the background color of those empty input boxes to pink. If all input fields are filled correctly and the form is submitted, display an alert box with the message "Form submitted."

function delay(seconds) {
  const start = Date.now();
  let x = true;
  while (x) {
    const current = Date.now();
    if (current - start >= seconds * 1000) {
      console.log("hi");
      x = false;
    }
  }
}
delay(5);
