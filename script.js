function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  
  // Check if both values have the same type
  return typeof value1 === typeof value2;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert the inputs to numbers (if you want to compare numerical values)
value1 = Number(value1);
value2 = Number(value2);

// Display the result using alert
alert(isSameType(value1, value2));
