// Description:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

//determine in which quarter each month belongs; january-march = 1-3, april-june=4-6, july-september=7-9,oct-dec=10-12.Use  function and if else to solve://
function quarter(month) {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 9 && month <= 12) {
    return 4;
  }
}
console.log(quarter(3));
