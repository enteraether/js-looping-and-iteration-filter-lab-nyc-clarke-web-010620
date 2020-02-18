
//returns all drivers that match the passed in name & returns matching drivers if case does not match but letters do
function findMatching(list, name)
    { return list.filter(function (driverName)
        { return driverName.toLowerCase() === name.toLowerCase();
        }) ;}


//Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }
  
  function matchName (list, name) {
    return list.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }