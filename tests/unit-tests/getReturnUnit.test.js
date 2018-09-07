//   suite("Function convertHandler.getReturnUnit(initUnit)", function() {
//     test("For Each Valid Unit Inputs", function(done) {
//       var input = ["gal", "l", "mi", "km", "lbs", "kg"];
//       var expect = ["l", "gal", "km", "mi", "kg", "lbs"];
//       input.forEach(function(ele, i) {
//         assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
//       });
//       done();
//     });
//   });

const ConvertHandler = require("../../controllers/convertHandler");
const convertHandler = new ConvertHandler();

const getReturnUnit = convertHandler.getReturnUnit;

describe("Function convertHandler.getReturnUnit(initUnit)", () => {
  test("for each valid unit inputs", () => {
    const input = ["gal", "l", "mi", "km", "lbs", "kg"];
    const output = ["l", "gal", "km", "mi", "kg", "lbs"];
    input.forEach((val, i) => {
      expect(getReturnUnit(val)).toBe(output[i]);
    });
  });
});
