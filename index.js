// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, begName) {
  let nameLength = begName.length
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === begName
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
