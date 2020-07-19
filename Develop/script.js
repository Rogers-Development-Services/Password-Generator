// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible Password values

var letterValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
var numberValues = '0123456789'.split('');
var symbolValues = '`~!@#$%^&*()_+{}[]<>?'.split('');

// Variables

var confirmLength;
var confirmSymbols;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

// WHEN I click the button to generate a password
document.querySelector('#generate').addEventListener('click', confirmParameters,);

// THEN I am presented with a series of prompts for password criteria

function confirmParameters() {

  // Would you like to include uppercase letters in your password?
  var confirmUpperCase = confirm("Would you like to include uppercase letters in your password?");

  // Would you like to include lowercase letters in your password?
  var confirmLowerCase = confirm("Would you like to include lowercase letters in your password?");

  // Would you like to include numbers in your password?
  var confirmNumbers = confirm("Would you like to include numbers in your password?");

  // WHEN prompted for the length of the password

  // How many characters would you like in your password?
  var confirmLength = parseInt(prompt("How many characters would you like in your password? (It must be between 8-128 characters long)"));
  console.log(confirmLength);

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (confirmLength <= 7 || confirmLength >= 129) {
    confirmLength = alert("Password must be within 8 to 128 characters, please refresh the page and try again");
    console.log('Password length is ' + confirmLength);
  }
}





// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);