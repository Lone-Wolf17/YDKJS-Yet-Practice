// Practicing Closure

// The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers.
//  The second argument is also a number representing the end of the desired range (inclusive).
//  If the second argument is omitted, then another function should be returned that expects that argument.

function range(start, end) {
  // Declare second function
  function printRange(endValue) {
    let result = [];

    for (start; start <= endValue; start++) {
      result.push(start);
    }

    console.log(result);
    return result;
  }

  if (typeof end === "undefined") {
    return printRange;
  } else {
    return printRange(end);
  }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

start4(6); // [4,5,6]
