var password;
var passwordText;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

document.addEventListener("DOMContentLoaded",generateBtn.addEventListener("click", writePassword));

// Generate a password                                              --DEVELOPING
function generatePassword() {
 password = "Tester";
}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText = password;
  document.querySelector("#password")=passwordText;
}


//document.addEventListener("DOMContentLoaded", function() 