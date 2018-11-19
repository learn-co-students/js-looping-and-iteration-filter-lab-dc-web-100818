// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, partialString) {
  let lengthOfPartial = partialString.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, lengthOfPartial) === partialString;
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
