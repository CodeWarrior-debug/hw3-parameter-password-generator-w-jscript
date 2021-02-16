
// Declares student variable using var keyword 
var studentName;

// Logs "My name is Tonya"
console.log("My name is " + studentName);

//Array 
var students=["Roger", "Pete","Randy","Jacques","Imhotep"]

//for loop
for (var i = 0; i < students.length; i++) { 
    console.log("Great to see you, " + students[i] + "!");
}

//The default keyword "this" refers to the global object..In a browser, the global object is the Window 


// When the keyword "this" is used inside of an object like planet, "this" belongs to that object
var planet = {
  name: "Earth",
  age: "4.543 billion years",
  isPopulated: true,
  population: "7.594 billion",
  logFacts: function () {
     //Logs "This planet's name is Earth"
     console.log("This planet's name is " + this.name);
  },
  logPopulation: function () {
    if (this.isPopulated) {
      // Logs "This planet's population is 7.594 billion"
	  console.log("This planet's population is " + this.population);
	} else {
	  console.log("The planet is unpopulated");
	}   
  }
};

// Calls object methods
planet.logFacts();

//Primitive data types include undefined, string, number and boolean
// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!

// Modulus returns the remainder between two numbers.  
console.log(a % b);

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log(b == c); //use triple strings instead, this double string does not account for data types and leads to unexpected errors
console.log(b != c);

// Compares equality and type (strict equality)
console.log(b === c);
console.log(b !== c);

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2);

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2);

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

// Returns false
console.log(!expression2);

// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""

if (lunchBill < 10) {
    console.log("Cost Rating: $");
  } else if (lunchBill >= 10 && lunchBill < 15) {
    console.log("Cost Rating: $$");
  } else {
    console.log("Cost Rating: $$$");
  }

  // Functions are reusable blocks of code that perform a specific task
// This is a function declaration 
function declareHello() { 
    console.log("Hello, I am a function declaration.");
    console.log("-----------------------------------");
    // Return stops the execution of a function
    return;
  }
  
  // This is a function expression
  var expressHello = function() { 
    console.log("Hello, I am a function expression.");
    console.log("-----------------------------------");
    return;
  };
  
  // Functions must be called to execute
  declareHello(); 
  expressHello();
  
  //Functions can be called again to make the block of code execute again
  declareHello(); 
  
  // Functions can take parameters.
  // Parameters give a name to the data to be passed into the function
  function declareHelloAgain(x,y,z) { 
    console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
    console.log("-----------------------------------");
    return;
  }
  
  // Function arguments give parameters their values
  // Here the parameter x is given the value 7 when the function is called
  declareHelloAgain(7, "Hello", true);

  // A variable declared in global scope is available to all functions
var hello = "Hello"; 

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function // Shadowing happens when the same variable is used in the local and global scope
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Returns selected elements as a new array.
var logicalOperatorsSliced = logicalOperators.slice(0,2);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);

// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

// Objects can store more than primitive data types like strings, booleans and numbers
var planet = {
  isPopulated: true,
  population: "7.594 billion",
  // Objects can store arrays in a key-value pair
  neighboringPlanets: ["Mars", "Venus"],
  // Objects can also store methods
  tellFunFact: function () {
    console.log("The earth is the only planet in our solar system not named after a Roman god or goddess.");
  },
  showWarning: function () {
    console.log("Space junk falls into Earth's atmosphere at a rate of about one a day.");
  }
};

// To access a value in an array, use the name of the object, the key and the index.
// Logs "Mars" using dot notation
console.log(planet.neighboringPlanets[0]);

// Logs "Mars" using bracket notation
console.log(planet["neighboringPlanets"][0]);

// To call a method, use the name of the object and the key. Don't forget the ()!
planet.tellFunFact();

// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }}