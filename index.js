// Code your solution in this file

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, element) {
  let new_array = array.filter(function(name) {
    if (name.toLowerCase() === element.toLowerCase()) {
      return name;
    }
  });
  return new_array;
}

function fuzzyMatch(array, letters) {
  findLetters = letters.split("")
  foundWords = array.filter(function(name) {
    if (findLetters.includes(name[0])) {
      return name;
    }
  });
  return foundWords;
}

function matchName(nested_array, string) {
  console.log(nested_array);
  let matchObj = nested_array.filter(function(obj) {
    for(let key in obj) {
      if (obj[key] === string) {
        return obj
      }
    }
  });
  return matchObj;
}




