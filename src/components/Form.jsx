import Button from './Button';

import iconCalculator from '/icon-calculator.svg';

function Form() {
  return (
    <div>
      <form action='#'>
        <div>
          <label htmlFor='#'>Mortgage Amount</label>
          <input type='text' name='' id='' />
        </div>

        <div>
          <label htmlFor='#'>Mortgage Term</label>
          <input type='text' name='' id='' />
        </div>

        <div>
          <label htmlFor='#'>Interest Rate</label>
          <input type='text' name='' id='' />
        </div>

        <div>
          <input type='radio' name='mortgageType' value='repayment' />
          <label htmlFor='#'>Repayment</label>

          <input type='radio' name='mortgageType' value='interestOnly' />
          <label htmlFor='#'>Interest Only</label>
        </div>

        <Button type='pill' icon={iconCalculator}>
          Calculate Repayments
        </Button>
      </form>
    </div>
  );
}

export default Form;
