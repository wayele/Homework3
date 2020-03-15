// Assignment Code
var generateBtn = document.querySelector("#generate");
// List all the different possible values for the different user selections
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "0123456789"
var symbolCharacters = "!@#$%^&*()"
var password = ""

// Create the prompt and confirms to get user selection critieria for password generation and log to console
// Receive input from user how long the password should be

function generatePassword() {

  var passwordLength = prompt("Choose Password length! between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == null) {
    alert("Password must be between 8 and 128 characters long");
  }
  console.log(passwordLength);
  // Prompt to ask if lower case should be included
  var includeLowerCase = confirm("Include lower case? Ok = Yes, Cancel = No");
  console.log(includeLowerCase);
  // Prompt to ask if upper case should be included
  var includeUpperCase = confirm("Include upper case? Ok = Yes, Cancel = No");
  console.log(includeUpperCase);
  // Prompt asking if numbers should be included
  var includeNumbers = confirm("Include numbers? Ok = Yes, Cancel = No");
  console.log(includeNumbers);
  // Prompt asking if symbols should be included
  var includeSymbols = confirm("Include symbols? Ok = Yes, Cancel = No");
  console.log(includeSymbols);

  // Define charType and userChoice that will continue to add character types based on user selection
  if (passwordLength >= 8 && passwordLength <= 128) {
    var charType = ""
    var userChoice = "";
    // If condition to allow and add lowecase as password criteria
    if (includeLowerCase) {
      charType = charType + lowerCaseLetters;
      userChoice = userChoice + lowerCaseLetters.charAt(Math.floor(Math.random() * 26));
      console.log(charType);
      console.log(userChoice);
    }
    // If condition to allow and add uppercase as password criteria
    if (includeUpperCase) {
      charType = charType + upperCaseLetters;
      userChoice = userChoice + upperCaseLetters.charAt(Math.floor(Math.random() * 26));
      console.log(charType);
      console.log(userChoice);
    }
    // If condition to allow and add numbers as password criteria
    if (includeNumbers) {
      charType = charType + numberCharacters;
      userChoice = userChoice + numberCharacters.charAt(Math.floor(Math.random() * 10));
      console.log(charType);
      console.log(userChoice);
    }
    // If condition to allow and add symbols as password criteria
    if (includeSymbols) {
      charType = charType + symbolCharacters;
      userChoice = userChoice + symbolCharacters.charAt(Math.floor(Math.random() * 10));
      console.log(charType);
      console.log(userChoice);
    }
    // For loop that will iterate through all the user selections and randomize the selections 
    for (let i = (userChoice.length + 1); i <= (passwordLength); i++) {
      password = password +
        charType.charAt(Math.floor(Math.random() * charType.length));
      var passwordText = document.querySelector("#password");
      passwordText.value = password + userChoice;
    }
    console.log(passwordText.value.length);

  }

}

generateBtn.addEventListener("click", generatePassword);


