// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible Password values

var upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numberValues = '0123456789'.split('');
var symbolValues = '`~!@#$%^&*()_+{}[]<>?'.split('');
var userChoice = [];

// WHEN I click the button to generate a password
// generateBtn.addEventListener('click', confirmParameters,);

// THEN I am presented with a series of prompts for password criteria

// function confirmParameters() {

  // Would you like to include uppercase letters in your password?
  var confirmUpperCase = confirm("Would you like to include uppercase letters in your password?");

  // Would you like to include lowercase letters in your password?
  var confirmLowerCase = confirm("Would you like to include lowercase letters in your password?");

  // Would you like to include numbers in your password?
  var confirmNumbers = confirm("Would you like to include numbers in your password?");

  // Would you like to include special symbols in your password?
  var confirmSymbols = confirm("Would you like to include special symbols in your password?")

  // WHEN prompted for the length of the password

  // How many characters would you like in your password?
  var confirmLength = parseInt(prompt("How many characters would you like in your password? (It must be between 8-128 characters long)"));

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (confirmLength <= 7 || confirmLength >= 129) {
    confirmLength = alert("Password must be within 8 to 128 characters, please refresh the page and try again");
  } else {
    confirmLength = alert("Lets construct your secure password!");
  }

  // if (confirmUpperCase === true) {
  //   var userChoice = upperCaseValues;
  //   console.log(userChoice);
  // }

  // if (confirmLowerCase === true) {
  //   var userChoice = lowerCaseValues;
  //   console.log(userChoice);
  // }

  // if (confirmLowerCase === true && confirmUpperCase == true) {
  //   var userChoice = lowerCaseValues.concat(upperCaseValues);
  //   console.log(userChoice);
  // }
  
  // if (confirmNumbers === true) {
  //   var userChoice = numberValues;
  //   console.log(userChoice);
  // }

  // LUNS
  if (confirmLowerCase === true && confirmUpperCase == true && confirmNumbers === true && confirmSymbols === true) {
    var userChoice = lowerCaseValues.concat(upperCaseValues, numberValues, symbolValues);
    console.log(userChoice);
  }

function random_selection(userChoice) {
  return userChoice[Math.floor(Math.random()*userChoice.lenth)];
}
console.log(random_selection(userChoice));


  // // LUN
  // if (confirmLowerCase === true && confirmUpperCase == true && confirmNumbers === true && confirmSymbols === false) {
  //   var userChoice = lowerCaseValues.concat(upperCaseValues, numberValues);
  //   console.log(userChoice);
  // }

  // // LUS
  // if (confirmLowerCase === true && confirmUpperCase == true && confirmNumbers === false && confirmSymbols === true) {
  //   var userChoice = lowerCaseValues.concat(upperCaseValues, confirmSymbols);
  //   console.log(userChoice);
  // }

  // // LNS
  // if (confirmLowerCase === true && confirmUpperCase == false && confirmNumbers === true && confirmSymbols === true) {
  //   var userChoice = lowerCaseValues.concat(numberValues, confirmSymbols);
  //   console.log(userChoice);
  // }

  // // UNS
  // if (confirmLowerCase === false && confirmUpperCase == true && confirmNumbers === true && confirmSymbols === true) {
  //   var userChoice = upperCaseValues.concat(numberValues, confirmSymbols);
  //   console.log(userChoice);
  // }
  
  
  // if (confirmSymbols === true) {
  //   var userChoice = symbolValues;
  //   console.log(userChoice);
  // }

// }

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


  
  


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   password = passwordText;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);