
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() { 

  var passwordCriteria = getCheckedCheckboxesForCriteria();
  //ensure that at least one checkbox gets checked.
    if (!passwordCriteria.length) {
    alert("You must have at least one criteria selected.");
    return;
    }
var passwordText = document.querySelector("#password");
    passwordText.value = password;

var lengthOfPassword = document.getElementById("pwlength").value;
var password = "";
//puts out a password that is the length chosen- between 8 and 128    
for (var x = 0; x < lengthOfPassword; x++) {
      var criteriaSelected = selectRandomItem(passwordCriteria);
      var randomCharacter = getRandomCharacter(criteriaSelected);
      console.log(criteriaSelected, randomCharacter)
      password += randomCharacter;
    }
};
//makes sure that the check boxes apply the selected criteria
function getCheckedCheckboxesForCriteria() {
  var checkboxes = document.querySelectorAll('input[name="criteria"]:checked');
  var checkBoxesEnabled = [];
  for (var x = 0; x < checkboxes.length; x++) {
    checkBoxesEnabled.push(checkboxes[x].value);
  }
  return checkBoxesEnabled;
  }
  //ensures the randomness of the password generator
  function selectRandomItem(arrayOfItems) {
      return arrayOfItems[Math.floor(Math.random() * arrayOfItems.length)];
  }
  //identify the characters that are in the array
function getRandomCharacter(characterOptions) {
  var options = {
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    symbols: ["!", "@", "#", "$", "%", "^", "&", "*"],
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  }
  var criteria = options[characterOptions];
  return selectRandomItem(criteria);
}
