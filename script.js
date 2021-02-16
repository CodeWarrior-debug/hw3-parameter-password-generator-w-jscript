// Variables and Arrays
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
symbolArray = ['"', '!', '"', '#', '$', '%', '&', '(',')',' * ',' + ',', ',' - ','.',' / ',': ','; ',' < ','=',' > ',' ? ','@','[','^','`','{','|','}','~'];

//Immediate Changes To View on Page Load - hide items
displayChangeSecuritySettings();

// Assignment Code
var generateBtn = document.querySelector("#generate");
var proceedBtn = document.querySelector("#proceed");

// Add event listener to generate button
document.addEventListener("DOMContentLoaded", generateBtn.addEventListener("click", generatePassword));
document.addEventListener("DOMContentLoaded", proceedBtn.addEventListener("click", calculatePwd));

// Generate a password    --- This is just the initial activation step in making a password                                           
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

// View/Hide Multi Select Menu with appropriate header                                            
function displayChangeSecuritySettings() {
    multiSelector = document.querySelector("#selectordisplay");
    passwordDisplay = document.querySelector("#pwddisplay");
    actionInstruction = document.querySelector("h2");
    proceedBtn = document.querySelector("#proceed")
    generateBtn = document.querySelector("#generate");

    if (chgHeading) {
        //Change Action Instruction
        if (actionInstruction.innerHTML !== "Generate a Password") {
            actionInstruction.innerHTML = "Generate a Password";
        } else {
            actionInstruction.innerHTML = "Choose Security Settings";
        }
    }
            //Change Whether Text Area or Settings Selector Shows
        if (multiSelector.style.display === "none") {
            multiSelector.style.display = "block";
            passwordDisplay.style.display = "none";
        } else {
            multiSelector.style.display = "none";
            passwordDisplay.style.display = "block";
        }
            //Change Whether Proceed or Generate Button Shows
        if (proceedBtn.style.display === "none") {
            proceedBtn.style.display = "block";
            generateBtn.style.display = "none"
        } else {
            proceedBtn.style.display = "none";
            generateBtn.style.display = "block";
        }

}

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
var upperItem;
var numberItem;
var symbolItem;
var selected = [];
multiSelector=document.querySelector("#selectordisplay");
    //Populate List and Count of Types of Characters Chosen
for (var option of document.getElementById("selectordisplay").options) {
    if (option.selected) {
      selected.push(option.value);
      i=i+1;
    }
  }
    //Add 1 from uppercase array if uppercase chosen
    if (selected.includes("Uppercase")) { 
    upperItem = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)].toString();
    } else { upperItem = "";
}
    //Add 1 from numbers array if numbers chosen
    if (selected.includes("Numbers")) { 
        numberItem = numbersArray[Math.floor(Math.random() * numbersArray.length)].toString();
    } else { numberItem = "";
}
    //Add 1 from symbols array if symbols chosen
    if (selected.includes("Symbols")) { 
        symbolItem = symbolArray[Math.floor(Math.random() * symbolArray.length)].toString();
    } else { symbolItem = "";
}
    //password before lowercase fill
    password=upperItem.concat(numberItem,symbolItem);

    //lowercase fill to chosen length
    for (var j = 0; j < (secLength-i); j++) { 
        password=password.concat(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)].toString());
    }

    //randomize order - thanks to stack overflow question 3943772
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    displayChangeSecuritySettings();
    document.querySelector("#password").innerHTML = password;
}

