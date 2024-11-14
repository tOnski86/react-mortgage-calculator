/* eslint-disable react/prop-types */
import Form from './Form';

function Calculator({ onResult }) {
  return (
    <div className='bg-white px-6 py-8 md:px-10'>
      <Form onResult={onResult} />
    </div>
  );
}

export default Calculator;
