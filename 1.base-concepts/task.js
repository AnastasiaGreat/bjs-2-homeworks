'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }
  let discrim = b**2 - 4 * a * c;
  if (discrim > 0) {
    arr[0] = parseInt(( -b + Math.sqrt(discrim)) / (2 * a));
    arr[1] = parseInt(( -b - Math.sqrt(discrim)) / (2 * a));
  }
  else if (discrim === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
