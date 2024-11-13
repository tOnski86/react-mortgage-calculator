import Button from './Button';

import iconCalculator from '/icon-calculator.svg';

function Form() {
  return (
    <div>
      <h2>Form</h2>

      <Button type='pill' icon={iconCalculator}>
        Calculate Repayments
      </Button>
    </div>
  );
}

export default Form;
