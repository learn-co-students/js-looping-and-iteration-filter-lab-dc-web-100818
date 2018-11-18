// Code your solution in this file
function findMatching(arr, name) {
  return arr.filter(function (el) {
    return el.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(arr, str) {
  return arr.filter(function (el) {
    return el.slice(0, 2).includes(str);
  });
}

function matchName(arr, str) {
  return arr.filter(function (el) {
    return el.name === str;
  })
}
