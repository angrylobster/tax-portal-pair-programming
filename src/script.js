const WRONG_INPUT_ERROR = 'Input is not a number';
const DEFAULT_RESULT = 0;
const TAX_BRACKETS = [
  {
    min: 0,
    max: 50000000,
    rate: 0.05,
  }, 
  {
    min: 50000000,
    max: 250000000,
    rate: 0.15,
  },
  {
    min: 250000000,
    max: 500000000,
    rate: 0.25,
  },
  {
    min: 500000000,
    max: Infinity,
    rate: 0.30
  }
];

function calculateTax(taxableIncome){
  if (typeof taxableIncome !== 'number') throw new Error(WRONG_INPUT_ERROR);
  let payableTax = DEFAULT_RESULT;

  for (let bracket of TAX_BRACKETS){
    if (taxableIncome > bracket.max){
      payableTax += (bracket.max - bracket.min) * bracket.rate;
    } else {
      payableTax += (taxableIncome - bracket.min) * bracket.rate;
      break;
    }
  }

  return payableTax;
}

module.exports = { 
  calculateTax
}