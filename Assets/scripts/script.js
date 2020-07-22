// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible Password values

var upperCaseValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCaseValues = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numberValues = '0123456789'.split('');
var symbolValues = '`~!@#$%^&*()_+{}[]<>?'.split('');
var permittedCharacters = [];
var passwordText = '';

function confirmParameters() {
  var userChoice = [];

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
  }

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
  // console.log(userChoice);

  if (confirmLowerCase === true) {
    var userChoice = userChoice.concat(lowerCaseValues);
  }
  // console.log(userChoice);

  if (confirmNumbers === true) {
    var userChoice = userChoice.concat(numberValues);
  }
  // console.log(userChoice);

  if (confirmSymbols === true) {
    var userChoice = userChoice.concat(symbolValues);
  }
  // console.log(userChoice);

  // Once userChoice is full of selected elements, run random_selection to select a random element.
  function random_selection(userChoice) {
    return userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  // console.log(random_selection(userChoice));

  // Run random_selection for as many times as confirmLength, and store the copied the elements in permittedCharacters. 

  for (var i = 0; i < confirmLength; i++) {
    permittedCharacters.push(random_selection(userChoice));
  }
  // console.log(permittedCharacters);

  // Convert the array the confirmParameters is returning as a string
  return permittedCharacters.join('');
}

// Write password to the #password input
function writePassword() {
  var password = confirmParameters();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);