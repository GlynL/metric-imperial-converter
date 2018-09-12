require("isomorphic-fetch");
// suite('GET /api/convert => conversion object', function () {

function fetchData(input) {
  return fetch(`http://localhost:8080/api/convert?input=${input}`).then(
    res => res
  );
}
describe("GET /api/convert => conversion object", () => {
  test("Convert 10L (valid input)", async () => {
    expect.assertions(6);
    const res = await fetchData("10l");
    expect(res.status).toBe(200);
    const gallons = await res.json();
    expect(gallons.initNum).toBe(10);
    expect(gallons.initUnit).toBe("l");
    expect(gallons.returnNum).toBeCloseTo(2.64172);
    expect(gallons.returnUnit).toBe("gal");
    expect(gallons.string).toBe("10l is 2.6417217685798895gal");
  });

  test("Convert 32g (invalid input unit)", async () => {
    const response = await fetchData("32g");
    expect(response.status).toBe(200);
    const conversion = await response.json();
    expect(conversion.string).toBe("invalid unit");
  });

  test("Convert 3/7.2/4kg (invalid number)", async () => {
    const response = await fetchData("3/7.2/4kg");
    expect(response.status).toBe(200);
    const conversion = await response.json();
    expect(conversion.string).toBe("invalid number");
  });

  test("Convert 3/7.2/4kilomegagram (invalid number and unit)", async () => {
    const response = await fetchData("3/7.2/4kilomegagram");
    expect(response.status).toBe(200);
    const conversion = await response.json();
    expect(conversion.string).toBe("invalid number and unit");
  });

  test("Convert kg (no number)", async () => {
    const response = await fetchData("kg");
    expect(response.status).toBe(200);
    const conversion = await response.json();
    expect(conversion.string).toBe("1kg is 2.2046244201837775lbs");
  });
});

//   test('Convert 10L (valid input)', function (done) {
//     chai.request(server)
//       .get('/api/convert')
//       .query({ input: '10L' })
//       .end(function (err, res) {
//         assert.equal(res.status, 200);
//         assert.equal(res.body.initNum, 10);
//         assert.equal(res.body.initUnit, 'L');
//         assert.approximately(res.body.returnNum, 2.64172, 0.1);
//         assert.equal(res.body.returnUnit, 'gal');
//         done();
//       });
//   });

//   });
