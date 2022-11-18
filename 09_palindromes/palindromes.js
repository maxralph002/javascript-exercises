const palindromes = function (str) {
 let finalStr = str.toLowerCase().replace(/[^a-z]/g, "");
 let firstComparison = finalStr.split("").join("");
 let secondComparison = finalStr.split("").reverse().join("");
 // let secondComparison = str.split("").reverse().join("");
 if (firstComparison === secondComparison) {
  return true;
 } else if (firstComparison !== secondComparison) {
  return false;
 }
};

// Do not edit below this line
module.exports = palindromes;
