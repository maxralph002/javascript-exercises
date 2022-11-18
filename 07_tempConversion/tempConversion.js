const ftoc = function(fahrenheit) {
  // return ((fahrenheit - 32) * (5/9)).toFixed(2);
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
};

const ctof = function(celsius) {
  // return (celsius * (9/5) + 32).toFixed(2);
  return Math.round(((celsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
