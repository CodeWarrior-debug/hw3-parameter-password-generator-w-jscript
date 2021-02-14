var password = ""

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Generate a password                                              --DEVELOPING
function generatePassword() {
  password = "Tester"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  writePassword()
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
