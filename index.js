// Code your solution in this file

// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

function findMatching(drivers, string) {
  return drivers.filter(function(dr){ return dr.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(arr, str) {
  return arr.filter(function(dr){ return dr.startsWith(str);});
}






































function matchName(arr, str) {
  return arr.filter(function (dr) { return dr["name"] === str
  });
}
