const sumAll = function(start, end) {
 if (typeof(start) == 'number' && typeof(end) == 'number' && start > 0 && end > 0) {

  if (end > start) {
   let total = start;

   for (let i=(start+1); i<=end; i++) {
    total+=i
   }
   return total;
   // console.log(total);


  } else if (start > end) {
   let total = end;

   for (let i=start; i>=(end+1); i--) {
    total+=i
   }
   return total;
   // console.log(total);


  } else {
   return "ERROR";
  }

 } else {
  return "ERROR";
 }

};

// sumAll(1, 4)
// sumAll(4, 1)

// Do not edit below this line
module.exports = sumAll;
