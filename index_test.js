var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('The output of 5! is equal to 120', () => {
      //Setup
      const inputNum = 5;
      const expected = 120;

      //Exercise
      const exercise = Calculate.factorial(inputNum);

      //Verify
      assert.equal(exercise, expected);
    });
  });
});
