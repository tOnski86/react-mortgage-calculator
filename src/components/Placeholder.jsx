import iconPlaceholder from '/illustration-empty.svg';

function Placeholder() {
  return (
    <div className='bg-slate-900 px-6 py-8 flex flex-col items-center text-center gap-4'>
      <img src={iconPlaceholder} alt='' />
      <h1 className='text-2xl font-bold text-white'>Results shown here</h1>
      <p className='text-slate-300'>
        Complete the form and click &quot;calculate repayments&quot; to see what
        your monthly repayments would be.
      </p>
    </div>
  );
}

export default Placeholder;
