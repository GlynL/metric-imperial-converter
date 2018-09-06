const assert = require("assert");

function ConvertHandler() {
  function checkFraction(num) {
    if (num.includes("/")) {
      const divideNumbers = num.split(/\//);
      // make sure only two numbers - only one fraction in input
      if (divideNumbers.length !== 2) return null;
      // convert to numbers and divide
      return Number(divideNumbers[0]) / Number(divideNumbers[1]);
    }
    // conver to number if not a fraction
    const convertedNum = Number(num);
    // check that number was inputted
    if (convertedNum === NaN) return null;
    return convertedNum;
  }

  this.getNum = function(input) {
    // split input on letters
    const splitInput = input.split(/[a-zA-Z]/);
    const num = splitInput[0];
    // check that input was valid
    if (num === "") return null;
    const result = checkFraction(num);
    return result;
  };

  this.getUnit = function(input) {
    const validUnits = [
      "gal",
      "l",
      "mi",
      "km",
      "lbs",
      "kg",
      "GAL",
      "L",
      "MI",
      "KM",
      "LBS",
      "KG"
    ];

    // split input by numbers
    const splitInput = input.split(/[0-9]/);
    // look for input matching valid units in new array - just use first match - should only be one anyway (bad?)
    const unit = splitInput.filter(val => validUnits.includes(val))[0];
    // check for empty array
    if (!unit) return null;
    return unit;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
