
var weights = [2, 3, 4, 5];
var values =  [3, 7, 2, 9];

function knapsack(maxWeight, weights, values) {

  var numItems = values.length;

  var L = new Array(numItems + 1);
  for (var i = 0; i <= numItems; i++) {
      L[i] = new Array(maxWeight + 1);
  }

  for (var i = 0; i <= numItems; i++) {

    for (var w = 0; w <= maxWeight; w++) {

      if (i === 0 || w === 0) {
        L[i][w] = 0;
      } else if (weights[i-1] <= w) {
        L[i][w] = Math.max(values[i-1] + L[i-1][w-weights[i-1]], L[i-1][w]);
      } else {
        L[i][w] = L[i-1][w];
      }

    }

  }

  return L[numItems][maxWeight];
}

var r = knapsack(5, weights, values);
console.log(r);

