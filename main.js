/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(num) {
  if (num / 3) {
    //return 'Fizz';
  } else if (num / 5) {
    return 'Buzz';
  } else if (num / 3 && num / 5) {
      return 'Buzz';
    } else (num); {
    return num;
  }
}








/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
