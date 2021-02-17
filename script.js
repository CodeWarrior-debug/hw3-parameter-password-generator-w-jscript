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

var generateBtn;
var validInput;
var index;
var fillExtra;

var lowerUse;
var upperUse;
var numberUse;
var symbolUse;

var lowercaseUseArray=[];
var uppercaseUseArray=[];
var numbersUseArray=[];
var symbolUseArray=[];

lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
symbolArray = ['"', '!', '"', '#', '%', '&','-','/',':',';','<','=','>','?','@','`','{','}','~'];



//displayChangeSecuritySettings();

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
document.addEventListener("DOMContentLoaded", generateBtn.addEventListener("click", generatePassword));
//document.addEventListener("DOMContentLoaded", proceedBtn.addEventListener("click", calculatePwd));

// Generate a password                                           
function generatePassword() {
    chgHeading = true;
   //Prompt Step Below
    secLength = window.prompt("How many characters would you like your password to be (# between 8 and 128)?");
    validatePwdInput(); //Validation Step Below
    if (validInput === false) {
        alert("Your input was invalid. Please start over.");
        location.reload();
        return;
    }
    calculatePwd()
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

function calculatePwd() {

    index=1;
    var i=0;
    var j=0;
    lowerUse=confirm("Do you want lowercase letters in your password?");
    upperUse=confirm("Do you want UPPERCASE letters in your password?");
    numberUse=confirm("Do you want numbers in your password?");
    symbolUse=confirm("Do you want symbols in your password?");
    var selected = [];
    var extraFilledAlready=false;

    if (lowerUse){
        i++;
    }
    if (upperUse){
        i++;
    }
    if (numberUse){
        i++;
    }
    if (symbolUse){
        i++;
    }

    //Determine number of remaining to fill
    if ((secLength%i) !== 0 ) {
        fillExtra=(secLength%i);
    } else {
        extraFilledAlready=true;
    }

    //Populate List and Count of Types of Characters Chosen
    //Add 1/i from array if array chosen, fillExtra if any remain

    if (upperUse) {
        for (var j = 0; j < Math.floor((secLength/i)); j++) { 
            uppercaseUseArray.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
        } if (!extraFilledAlready){for (var j = 0; j < fillExtra; j++) { 
            uppercaseUseArray.push(uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
            extraFilledAlready=true;
        }
    }
}
    //Add 1/i from array if array chosen, fillExtra if any remain
    if (lowerUse) {
        for (var j = 0; j < Math.floor((secLength/i)); j++) { 
            lowercaseUseArray.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
        } if (!extraFilledAlready){for (var j = 0; j < fillExtra; j++) { 
            lowercaseUseArray.push(lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
            extraFilledAlready=true;
        }
    }
}
    //Add 1/i from array if array chosen, fillExtra if any remain

    if (numberUse) {
        for (var j = 0; j < Math.floor((secLength/i)); j++) { 
            numbersUseArray.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
        } if (!extraFilledAlready){for (var j = 0; j < fillExtra; j++) { 
            numbersUseArray.push(numbersArray[Math.floor(Math.random() * numbersArray.length)]);
            extraFilledAlready=true;
        }
    }
}
    //Add 1/i from array if array chosen, fillExtra if any remain

    if (symbolUse) {
        for (var j = 0; j < Math.floor((secLength/i)); j++) { 
            symbolUseArray.push(symbolArray[Math.floor(Math.random() * symbolArray.length)]);
        } if (!extraFilledAlready){for (var j = 0; j < fillExtra; j++) { 
            symbolUseArray.push(symbolArray[Math.floor(Math.random() * symbolArray.length)]);
            extraFilledAlready=true;
        }
    }
}

    password=((uppercaseUseArray.concat(numbersUseArray,symbolUseArray,lowercaseUseArray)).toString());

//Replace all function thanks to https://dmitripavlutin.com/replace-all-string-occurrences-javascript/
const search = ',';
const replaceWith = '';

    const mypassword=password.replaceAll(search,replaceWith)

    const search2 = ' ';
    const replaceWith2 = '';

    const mypassword2=mypassword.replaceAll(search2,replaceWith2)

    //randomize order - thanks to stack overflow question 3943772
    password=mypassword2.split('').sort(function(){return 0.5-Math.random()}).join('');

    //print to page
    document.querySelector("#password").innerHTML = password;
}