const removeFromArray = function (...args) {
 const array = args[0];
 return array.filter(val => !args.includes(val))
};

// removeFromArray([1, 2, 3, 4], 7, 2)


// const removeFromArray2 = function (...args) {
//  const array = args[0];
//  const newArray = [];
//  array.forEach((item) => {
//   if (!args.includes(item)) {
//    newArray.push(item);
//   }
//  });
//  return newArray;
// }

// Do not edit below this line
module.exports = removeFromArray;
