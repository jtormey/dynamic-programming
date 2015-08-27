
var rightBank = [2, 4, 1, 3];
var leftBank =  [1, 2, 3, 4];

var pairs = rightBank.map(function(item, idx) {
  return [item, leftBank[idx]];
});

// Stack overflow solution
// note: doesn't seem to work

function pairCities(pairs) {

  var n = pairs.length;
  var max = 0;
  var dp = new Array(n);

  for (var i = 0; i < dp.length; i++) {
    dp[i] = 1;
  }

  for (var i = 1; i < n; i++) {
    for (var j = 0; j < i; j++) {
      if (pairs[i][1] > pairs[j][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }

  return max;

}

console.log(pairCities(pairs));

// My solution

function findOpposites(cities, bank) {
  var opposites = [];
  for (var i = 0; i < cities.length; i++) {
    var opposite = findOpposite(cities[i], bank);
    opposites.push(opposite);
  }
  return opposites;
}


function findOpposite(city, bank) {
  return bank.indexOf(city);
}

function pairThem(cities0, cities1) {

  var opposites = findOpposites(cities0, cities1);
  var currentCount = 1;
  var maxCount = 1;

  for (var i = 0; i < opposites.length; i++) {

    if (opposites[i] > opposites[i - 1]) {
      currentCount += 1;
    } else {
      maxCount = currentCount;
      currentCount = 1;
    }
  }

  return maxCount;

}

var res = pairThem(rightBank, leftBank, rightBank);
console.log(res);














