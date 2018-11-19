// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, arg) {
  return drivers.filter(function(driver) { return driver.slice(0, 2) === arg; });
}

function matchName(drivers, arg) {
  return drivers.filter(function(driver) { return driver['name'] === arg;});
}
