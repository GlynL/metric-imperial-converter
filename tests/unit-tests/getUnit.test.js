var ConvertHandler = require("../../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

const getUnit = convertHandler.getUnit;

describe("Function convertHandler.getUnit(input)", () => {
  test("for each valid unit inputs", () => {
    var input = [
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
    input.forEach(ele => {
      expect(getUnit(ele)).toBe(ele);
    });
  });

  test("unknown unit input", () => {
    const input = "xx";
    expect(getUnit(input)).toBeNull();
  });
});
