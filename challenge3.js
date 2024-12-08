// Description:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1
/* check if characters are letters and if the are upper or lower case.
use if else stament to compare. */

function sameCase(charecter1, charecter2) {
  // Step 1: Check if both characters are letters
  if (
    (charecter1 >= "a" && charecter1 <= "z") ||
    (charecter1 >= "A" && charecter1 <= "Z")
  ) {
    // charecter1 is a letter
  } else {
    return -1; // charecter1 is not a letter, return -1
  }

  if (
    (charecter2 >= "a" && charecter2 <= "z") ||
    (charecter2 >= "A" && charecter2 <= "Z")
  ) {
  } else {
    return -1;
  }

  // Step 2: Check if both characters are the same case
  if (
    charecter1 === charecter1.toLowerCase() &&
    charecter2 === charecter2.toLowerCase()
  ) {
    return 1; // Both characters are lowercase
  }

  if (
    charecter1 === charecter1.toUpperCase() &&
    charecter2 === charecter2.toUpperCase()
  ) {
    return 1; // Both characters are uppercase
  }

  return 0; // Characters are different cases (one lowercase, one uppercase)
}
console.log(sameCase("a", "g"));
