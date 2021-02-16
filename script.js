var password;
var passwordText;
var secLength;

var secUppercase;
var secLowercase;
var secSumbers;
var secSymbols;

var uppercaseArray;
var lowercaseArray;
var numbersArray;
var symbolArray;

var multiSelector;
var actionInstruction;
var chgHeading;
var generateBtn;
var validInput;
var index;

lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//Immediate Changes To View on Page Load - hide items
displayChangeSecuritySettings();

// Assignment Code
var generateBtn = document.querySelector("#generate");
var proceedBtn = document.querySelector("#proceed");

// Add event listener to generate button
document.addEventListener("DOMContentLoaded", generateBtn.addEventListener("click", generatePassword));
document.addEventListener("DOMContentLoaded", proceedBtn.addEventListener("click", calculatePwd));

// Generate a password    --- DEVELOPING SEVERAL STEPS ****************************                                           
function generatePassword() {
    chgHeading = true;
    displayChangeSecuritySettings(); //Prompt Step Complete
    secLength = window.prompt("How many characters would you like your password to be (# between 8 and 128)?");
    validatePwdInput(); //Validation Step Complete
    if (validInput === false) {
        alert("Your input was invalid. Please start over.");
        location.reload();
        return;
    }
}

// Write password to the #password input  --- LAST TO DEVELOP ****************************
function writePassword(password) {
    passwordText = password;
    document.querySelector("#password") = passwordText;
}

// View/Hide Multi Select Menu with appropriate header                                            
function displayChangeSecuritySettings() {
    multiSelector = document.querySelector("#selectordisplay");
    passwordDisplay = document.querySelector("#pwddisplay");
    actionInstruction = document.querySelector("h2");
    proceedBtn = document.querySelector("#proceed")
    generateBtn = document.querySelector("#generate");

    if (chgHeading) {

        if (actionInstruction.innerHTML !== "Generate a Password") {
            actionInstruction.innerHTML = "Generate a Password";
        } else {
            actionInstruction.innerHTML = "Choose Security Settings";
        }
    }

    if (multiSelector.style.display === "none") {
        multiSelector.style.display = "block";
        passwordDisplay.style.display = "none";
    } else {
        multiSelector.style.display = "none";
        passwordDisplay.style.display = "block";
    }

    if (proceedBtn.style.display === "none") {
        proceedBtn.style.display = "block";
        generateBtn.style.display = "none"
    } else {
        proceedBtn.style.display = "none";
        generateBtn.style.display = "block";
    }

}

//let User click on Proceed
// function loopArrayAsync(ar, calculatePwd) {
//     index = 0;
//     loop();

//     function loop() {
//         if (index < 1) {
//             // doSomething(ar[index++]);
//             setTimeout(loop, 0);
//         }
//         else {
//             callback();
//         }
//     }
// }

//Validate Password Length
function validatePwdInput() {
    validInput = true; //default true
    secLength = Number(secLength);
    var intTest = 1;
    intTest = secLength - (Math.floor(secLength));

    if (secLength > 128) {
        validInput = false;
    }

    if (secLength < 8) {
        validInput = false;
    }

    if (isFinite(secLength) !== true) {
        validInput = false;
    }

    if (intTest !== 0) {
        validInput = false;
    }
}

//Validate Password Length

function calculatePwd() {
index=1;
var i=0;
var selected = [];
multiSelector=document.querySelector("#selectordisplay");

for (var option of document.getElementById("selectordisplay").options) {
    if (option.selected) {
      selected.push(option.value);
      i=i+1;
    }
  }
  alert(selected);
  alert(i);
}

//var item = items[Math.floor(Math.random() * items.length)];

