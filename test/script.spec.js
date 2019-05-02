const script = require('../src/script');
const { assert } = require('chai');
describe('calculateTax', function () {
    it('should return an error if input is not a number', function() {
        assert.throws(script.calculateTax, 'Input is not a number');
    });

    it ('should return 0 if the input is 0', function() {
        assert.equal(script.calculateTax(0), 0);
    });

    it ('should return 2,500,000 (5% of 50,000,000) if the input is 50,000,000', function() {
        assert.equal(script.calculateTax(50000000),2500000);
    })

    it ('should return 32,500,000 (5% of 50,000,000 + 15% of 200,000,000) if the input is 250,000,000', function() {
        assert.equal(script.calculateTax(250000000), 32500000);
    })

    it ('should return 95,000,000 (5% of 50,000,000 + 15% of 200,000,000 + 25% of 250,000,000) if the input is 500,000,000', function() {
        assert.equal(script.calculateTax(500000000), 95000000);
    })

    it ('should return 245,000,000 (5% of 50,000,000 + 15% of 200,000,000 + 25% of 250,000,000 + 30% of 500,000,000) if the input is 1,000,000,000', function() {
        assert.equal(script.calculateTax(1000000000), 245000000);
    })
});