console.log("I am here");
/*
var commonChars = function (words) {
  var ans = [];

  function valueMin(list) {
    var min = list.reduce((a, b) => a + b);
    for (var i in list) {
      if (list[i] < min) min = list[i];
    }
    return min;
  }

  var m = new Map();
  for (var i in words) {
    i = parseInt(i);

    for (var j in words[i]) {
      j = parseInt(j);
      var curLetter = words[i][j];
      if (!m.has(curLetter)) {
        m.set(curLetter, [1]);
      } else {
        var oL = m.get(curLetter);

        var currentLayer = i + 1;

        if (oL.length == currentLayer) oL[i]++;
        else {
          oL.push(1);
        }
      }
    }
  }
  for ([key, value] of m) {
    if (value.length == words.length) {
      for (ii = 0; ii < valueMin(value); ii++) {
        ans.push(key);
      }
    }
  }
  console.log("m1", m);
  return ans;
};
commonChars([
  "acabcddd",
  "bcbdbcbd",
  "baddbadb",
  "cbdddcac",
  "aacbcccd",
  "ccccddda",
  "cababaab",
  "addcaccd",
]);

function addB(el) {
  return el + b;
}
var ori = [1, 2, 3, 4];
var b = 5;
var ans = ori.map(addB);
console.log(ans);
*/
var map = new Map();
map.set(13, 3);
map.set(22, 1);
map.set(0, 4);
map.set(5, 2);
map.set(6, 2);
var entries = map.entries();
//console.log([...entries]);

var afterSort = [...entries].sort(([num1, count1], [num2, count2]) =>
  count1 === count2 ? num2 - num1 : count1 - count2
);

//var s = [3, 1, 5, 2].sort((a, b) => b - a);
console.log(afterSort);
