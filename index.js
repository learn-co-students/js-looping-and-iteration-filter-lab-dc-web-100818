// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (string) {
      return name.toUpperCase() === string.toUpperCase()});
  }

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (string) {
    return string.startsWith(letters)
  })
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.name === string
  })
}
