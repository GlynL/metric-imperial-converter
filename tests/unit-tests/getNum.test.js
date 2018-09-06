var ConvertHandler = require("../../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();

const getNum = convertHandler.getNum;

describe("getNum", () => {
  test("return number from input", () => {
    const input = "32L";
    expect(getNum(input)).toBe(32);
  });

  test("handle a decimal input", () => {
    const input = "0.3mi";
    expect(convertHandler.getNum(input)).toBe(0.3);
  });
  test("handle a fraction", () => {
    const input = "1/3L";
    expect(convertHandler.getNum(input)).toBeCloseTo(0.33);
  });
  test("handle fraction w/ decimal", () => {
    const input = "1.0/3mi";
    expect(convertHandler.getNum(input)).toBeCloseTo(0.33);
  });
  test("handle invalid input (double fraction)", () => {
    const input = "2/2/2mi";
    // toBe(null), toBeNull() - think is same
    expect(convertHandler.getNum(input)).toBeNull();
  });
  test("no numerical input", () => {
    const input = "dkaflda";
    expect(convertHandler.getNum(input)).toBeNull();
  });
});
