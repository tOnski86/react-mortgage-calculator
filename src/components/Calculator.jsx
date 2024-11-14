/* eslint-disable react/prop-types */
import Button from './Button';
import Form from './Form';

function Calculator({ onResult }) {
  return (
    <div className='bg-white px-6 py-8 md:px-10'>
      <div className='lg:flex lg:items-center lg:justify-between gap-2'>
        <h2 className='text-slate-900 text-2xl font-bold mb-1 sm:mb-0'>
          Mortgage Calculator
        </h2>
        <Button type='text' className='mt-1 mb-6 md:mb-0'>
          Clear All
        </Button>
      </div>
      <Form onResult={onResult} />
    </div>
  );
}

export default Calculator;
