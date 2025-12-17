
function countWords(text) {
  return text.trim().split(" ").length;
}

function reverseString(text) {
  return text.split("").reverse().join("");
}

function removeSpaces(text) {
  return text.replaceAll(" ", "");
}

function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let input = "  hello world from javascript  ";

console.log(countWords(input));       
console.log(reverseString(input));        
console.log(removeSpaces(input));     
console.log(capitalizeWords(input));      
