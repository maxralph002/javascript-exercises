const repeatString = function(str, num) {
 if (num < 0) {
  return "ERROR"
 } else {
  return str.repeat(num);
 }
};

// repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
