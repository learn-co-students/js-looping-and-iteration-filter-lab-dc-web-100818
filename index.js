// Code your solution in this file
function findMatching(arr, str) {
  return arr.filter( function(driver) {
    return driver.toLowerCase() == str.toLowerCase()
  })
}

function fuzzyMatch(arr, str) {
  return arr.filter(function(driver) {
    return driver.startsWith(str)
  })
}

function matchName(arr, str) {
  return arr.filter(function(driver) {
    return driver.name === str
  })
}
