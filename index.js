// Code your solution in this file
function findMatching (drivers, name) {
    return drivers.filter (function (el) {
      return el.toLowerCase() === name.toLowerCase();
      });
}

function fuzzyMatch (drivers, letters) {
    return drivers.filter (function (el) {
      return el.slice(0, 2).includes(letters);
    });
}

function matchName(drivers, name){
  return drivers.filter(function (driver) {
    return driver.name === name
  });
}
