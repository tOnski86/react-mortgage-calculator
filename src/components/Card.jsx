/* eslint-disable react/prop-types */
function Card({ calculateMortgage }) {
  const { monthly, total } = calculateMortgage;

  return (
    <div className='[&>:not(:last-child)]:border-b-[1px] [&>:not(:last-child)]:border-b-slate-700/40 bg-[#0E2431] px-4 py-6 rounded-lg border-t-4 border-t-yellow'>
      <div>
        <h3 className='text-slate-300 mb-3'>Your monthly repayments</h3>
        <p className='font-bold text-4xl text-yellow mb-4'>
          £{monthly.toLocaleString('en-GB')}
        </p>
      </div>
      <div>
        <h3 className='text-slate-300 mt-4 mb-2'>
          Total you&apos;ll repay over the term
        </h3>
        <p className='font-semibold text-2xl text-white'>
          £{total.toLocaleString('en-GB')}
        </p>
      </div>
    </div>
  );
}

export default Card;
