const ConvertHandler = require("../../controllers/convertHandler");
const convertHandler = new ConvertHandler();
const getString = convertHandler.getString;

describe("function convertHandler.getString(initNum, initUnit, returnNum, returnUnit", () => {
  test("L to Gal", () => {
    const input = [3.78541, "l", 1, "gal"];
    const output = "3.78541l is 1gal";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });

  test("Gal to L", () => {
    const input = [1, "gal", 3.78541, "l"];
    const output = "1gal is 3.78541l";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });

  test("Mi to Km", () => {
    const input = [1, "mi", 1.60934, "km"];
    const output = "1mi is 1.60934km";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });

  test("Km to Mi", () => {
    const input = [1.60934, "km", 1, "mi"];
    const output = "1.60934km is 1mi";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });

  test("Kg to Lbs", () => {
    const input = [1.5, "kg", 3.306936630275666, "lbs"];
    const output = "1.5kg is 3.306936630275666lbs";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });

  test("Lbs to Kgs", () => {
    const input = [3.306936630275666, "lbs", 1.5, "kg"];
    const output = "3.306936630275666lbs is 1.5kg";
    expect(getString(input[0], input[1], input[2], input[3])).toBe(output);
  });
});

//     test("L to Gal", function(done) {
//       //done();
//     });

//     test("Mi to Km", function(done) {
//       //done();
//     });

//     test("Km to Mi", function(done) {
//       //done();
//     });

//     test("Lbs to Kg", function(done) {
//       //done();
//     });

//     test("Kg to Lbs", function(done) {
//       //done();
//     });
//   });
// });
