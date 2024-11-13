import Card from './Card';

function Results() {
  return (
    <div className='bg-slate-900 px-6 py-8 flex flex-col gap-4'>
      <h2 className='text-2xl font-bold text-white'>Your Results</h2>
      <p className='text-slate-300'>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </p>

      <Card />
    </div>
  );
}

export default Results;
