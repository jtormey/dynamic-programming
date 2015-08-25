
var rightBank = [1, 2, 3];
var leftBank =  [3, 2, 1];

var pairs = rightBank.map(function(item, idx) {
  return [item, leftBank[idx]];
});

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

var result = pairCities(pairs);
console.log(result);

