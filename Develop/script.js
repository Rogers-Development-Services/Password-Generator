// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible Password values

var upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numberValues = '0123456789'.split('');
var symbolValues = '`~!@#$%^&*()_+{}[]<>?'.split('');
var userChoice = [];
var defalutChoice =[];
var permittedCharacters = [];
var minCharacters = [];
var passwordText = '';

// WHEN I click the button to generate a password
// generateBtn.addEventListener('click', confirmParameters,);

// THEN I am presented with a series of prompts for password criteria

function confirmParameters() {

  // Would you like to include uppercase letters in your password?
  var confirmUpperCase = confirm("Would you like to include uppercase letters in your password?");

  // Would you like to include lowercase letters in your password?
  var confirmLowerCase = confirm("Would you like to include lowercase letters in your password?");

  // Would you like to include numbers in your password?
  var confirmNumbers = confirm("Would you like to include numbers in your password?");

  // Would you like to include special symbols in your password?
  var confirmSymbols = confirm("Would you like to include special symbols in your password?")

  // If the user selects none of our options, then restart
  if (confirmLowerCase === false && confirmUpperCase == false && confirmNumbers === false && confirmSymbols === false) {
    alert("You haven't selected any characters, please refresh the page and try again.")
    var userChoice = lowerCaseValues.concat(upperCaseValues, numberValues, symbolValues);
  }
  console.log(userChoice);

  // WHEN prompted for the length of the password

  // How many characters would you like in your password?
  var confirmLength = parseInt(prompt("How many characters would you like in your password? (It must be between 8-128 characters long)"));

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (confirmLength <= 7 || confirmLength >= 129) {
    confirmLength = alert("Password must be within 8 to 128 characters, please refresh the page and try again");
  }

  // Adding all permited characters to the userchoice array
  if (confirmUpperCase === true) {
    var userChoice = userChoice.concat(upperCaseValues);
  }
  console.log(userChoice);

  if (confirmLowerCase === true) {
    var userChoice = userChoice.concat(lowerCaseValues);
  }
  console.log(userChoice);

  if (confirmNumbers === true) {
    var userChoice = userChoice.concat(numberValues);
  }
  console.log(userChoice);

  if (confirmSymbols === true) {
    var userChoice = userChoice.concat(symbolValues);
  }
  console.log(userChoice);

  // Once userChoice is full of selected elements, select random element from the array
  function random_selection(userChoice) {
    return userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  console.log(random_selection(userChoice));

  // Print random elements from userChoice into the generated password using "confirmLength" to set the length.

  for (var i = 0; i < confirmLength; i++) {
    permittedCharacters = minCharacters.push(random_selection(userChoice));
  }
  console.log(minCharacters);
  console.log(permittedCharacters);
}
console.log(confirmParameters());

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria

// Write password to the #password input
function writePassword() {
  var password = confirmParameters();
  var passwordText = document.querySelector("#password");
  passwordText = password;
}
// console.log(writePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);