function findMatching(arr, name) {
  return arr.filter(function a(element) {return element.toUpperCase() === name.toUpperCase()});
}

function fuzzyMatch(arr, search) {
  return arr.filter(function a(element) {return element.startsWith(search)})
}

function matchName(arr, name) {
  return arr.filter(function a(object) {return object.name === name})
}
