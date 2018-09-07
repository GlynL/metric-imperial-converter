const ConvertHandler = require("../../controllers/convertHandler");
const convertHandler = new ConvertHandler();
const convert = convertHandler.convert;

describe("Function convertHandler.convert(num, unit", () => {
  test("Gal to L", () => {
    const input = [5, "gal"];
    const expected = 18.9271;
    expect(convert(input[0], input[1])).toBeCloseTo(expected);
  });
});

//   suite("Function convertHandler.convert(num, unit)", function() {
//     test("Gal to L", function(done) {
//       var input = [5, "gal"];
//       var expected = 18.9271;
//       assert.approximately(
//         convertHandler.convert(input[0], input[1]),
//         expected,
//         0.1
//       ); //0.1 tolerance
//       done();
//     });
