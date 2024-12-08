/*Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
Notes
The two strings will be the same length. */

// 1.We need a loop to iterate through each character of the strings.
// 2.For each pair of characters from both strings, we will use the rules mentioned:
// "+" and "+" → "+"
// "-" and "-" → "-"
// "+" and "-" or "-" and "+" → "0"
// 3.The results will be collected and returned as a new string.
function strings(str1, str2) {
  let result = "";

  // Loop through the characters of both strings
  for (let i = 0; i < str1.length; i++) {
    // Get the characters from both strings
    const charecter1 = str1[i];
    const charecter2 = str2[i];

    // Apply the rules for interaction:
    if (charecter1 === "+" && charecter2 === "+") {
      result += "+";
    } else if (charecter1 === "-" && charecter2 === "-") {
      result += "-";
    } else {
      result += "0"; // One positive, one negative, become neutral
    }
  }

  return result;
}
console.log(strings("+-+", "+--"));
