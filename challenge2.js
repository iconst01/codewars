// Task
// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
/*
1.create a boolean that is true and empty array to store value 
2.Iterate through the list
-if the item "flick" switch to return opposite boolean value.
3.return the list */

function flickToggle(list) {
  let result = [];
  let toggle = true;

  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item === "flick") {
      toggle = !toggle;
    }
    result.push(toggle); //puts toggle into result
  }
  return result;
}
console.log(flickToggle(["codewars", "flick", "code", "wars"]));
