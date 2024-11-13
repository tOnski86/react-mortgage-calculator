import Button from './Button';
import Form from './Form';

function Calculator() {
  return (
    <div className='bg-white p-6'>
      <div className='sm:flex sm:items-center sm:justify-between sm:gap-2'>
        <h2 className='text-slate-900 text-2xl font-bold mb-1 sm:mb-0'>
          Mortgage Calculator
        </h2>
        <Button type='text' className='mt-1 mb-6'>
          Clear All
        </Button>
      </div>
      <Form />
    </div>
  );
}

export default Calculator;
