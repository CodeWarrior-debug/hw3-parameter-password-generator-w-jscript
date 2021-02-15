var password;
var passwordText;
var passwordLength;

var secUppercase;
var secLowercase;
var secSumbers;
var secSymbols;
var secLength;

var uppercaseArray;
var lowercaseArray;
var numbersArray;
var symbolArray;

var multiSelector;
var actionInstruction;
var chgHeading;
var generateBtn;

lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
uppercaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
numbersArray = ['1','2','3','4','5','6','7','8','9','0'];

//Immediate Changes To View on Page Load - hide items
displayChangeSecuritySettings(false);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
document.addEventListener("DOMContentLoaded",generateBtn.addEventListener("click", generatePassword));

// Generate a password                                              
function generatePassword() {
    chgHeading=true;
    displayChangeSecuritySettings();
    secLength=window.prompt("How many characters would you like your password to be (# between 8 and 128)?");
    password = "Tester";
}

// Write password to the #password input
function writePassword(password) {
  passwordText = password;
  document.querySelector("#password")=passwordText;
}

// View/Hide Multi Select Menu with appropriate header                                            
function displayChangeSecuritySettings() {
    multiSelector = document.querySelector("#selectordisplay");
    passwordDisplay = document.querySelector("#pwddisplay");
    actionInstruction = document.querySelector("h2");
    proceedButton= document.querySelector("#proceed")
    generateBtn = document.querySelector("#generate");

    if (chgHeading){

    if (actionInstruction.innerHTML!=="Generate a Password") {
        actionInstruction.innerHTML="Generate a Password";
    } else {actionInstruction.innerHTML="Choose Security Settings";
    } 
    }

    if (multiSelector.style.display === "none") {
        multiSelector.style.display = "block";
            passwordDisplay.style.display = "none";
    } else {multiSelector.style.display = "none";
            passwordDisplay.style.display = "block";
    }

    if (proceedButton.style.display==="none") {
        proceedButton.style.display="block";
        generateBtn.style.display="none"
    } else {proceedButton.style.display="none";
        generateBtn.style.display="block";
    }
}
