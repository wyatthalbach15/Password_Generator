// Assignment Code
var generateBtn = document.querySelector("#generate");
var Chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var num = ["0","1","2","3","4","5","6","7","8","9"];
//var sChars = ["!","@","#","$","%","&"];

function generatePassword() {
  var length = window.prompt("How long would you like your password? (8-128)");
  var prompt1 = window.prompt("Would you like to include lowercase letters?");
  var prompt2 = window.prompt("Would you like to include capital letters?");
  var prompt3 = window.prompt("Would you like to include numbers?");
  var prompt4 = window.prompt("Would you like to include special characters?");

  //length = length.toLowerCase();
  //prompt1 = prompt1.toLowerCase();
  //prompt2 = prompt2.toLowerCase();
  //prompt3 = prompt3.toLowerCase();
  //prompt4 = prompt4.toLowerCase();

  //var index = Math.floor(Math.random() * Chars.length);
  
  if (prompt1 === "yes", prompt2 === "yes", prompt3 === "yes", prompt4 === "yes") {
    return Chars[Math.floor(Math.random() * Chars.length)];
   // uChars[Math.floor(Math.random() * uChars.length)];
    //num[Math.floor(Math.random() * num.length)];
    //sChars[Math.floor(Math.random() * sChars.length)];
    

  }
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
