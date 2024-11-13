import Button from './Button';

import iconCalculator from '/icon-calculator.svg';

function Form() {
  return (
    <div>
      <form action='#' formNoValidate>
        <div className='grid grid-cols-1 gap-6'>
          {/* mortgage amount */}
          <div className='flex flex-col gap-3'>
            <label htmlFor='#' className='text-slate-700 font-medium'>
              Mortgage Amount
            </label>

            <div className='relative overflow-hidden'>
              <input
                type='text'
                className='peer pl-14 w-full border border-slate-500 px-4 py-2 rounded-md hover:cursor-pointer transition-colors hover:border-slate-900 focus:border-yellow focus-visible:outline-none font-bold text-slate-900 text-lg'
              />
              <span className='absolute bg-slate-100 top-1/2 -translate-y-1/2 left-[1px] p-[14px] leading-none rounded-tl-[5px] rounded-bl-[5px] box-content font-bold text-slate-700 peer-focus:bg-yellow transition-colors'>
                £
              </span>
            </div>
          </div>

          {/* mortgage term */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='#' className='text-slate-700 font-medium'>
              Mortgage Term
            </label>

            <div className='relative overflow-hidden'>
              <input
                type='text'
                className='peer pl-4 w-full border border-slate-500 px-4 py-2 rounded-md hover:cursor-pointer transition-colors hover:border-slate-900 focus:border-yellow focus-visible:outline-none font-bold text-slate-900 text-lg'
              />
              <span className='absolute bg-slate-100 top-1/2 -translate-y-1/2 right-[1px] p-[14px] leading-none rounded-tr-[5px] rounded-br-[5px] box-content font-bold text-slate-700 peer-focus:bg-yellow transition-colors'>
                years
              </span>
            </div>
          </div>

          {/* interest only */}
          <div className='flex flex-col gap-2'>
            <label htmlFor='#' className='text-slate-700 font-medium'>
              Interest Rate
            </label>

            <div className='relative overflow-hidden'>
              <input
                type='text'
                className='peer pl-4 w-full border border-slate-500 px-4 py-2 rounded-md hover:cursor-pointer transition-colors hover:border-slate-900 focus:border-yellow focus-visible:outline-none font-bold text-slate-900 text-lg'
              />
              <span className='absolute bg-slate-100 top-1/2 -translate-y-1/2 right-[1px] p-[14px] leading-none rounded-tr-[5px] rounded-br-[5px] box-content font-bold text-slate-700 peer-focus:bg-yellow transition-colors'>
                %
              </span>
            </div>
          </div>

          {/* mortgage type */}
          <div className='flex flex-col gap-2.5'>
            <label className='text-slate-700 font-medium'>Mortgage Type</label>
            <div className='px-4 py-2 w-full border border-slate-500 rounded-md text-lg flex gap-4 relative hover:border-yellow transition-colors'>
              <input
                type='radio'
                name='mortgageType'
                value='repayment'
                id='repayment'
                className='absolute top-1/2 -translate-y-1/2 h-5 w-5 accent-[#95972e] opacity-70'
              />
              <label
                htmlFor='repayment'
                className='w-full hover:cursor-pointer px-8'
              >
                Repayment
              </label>
            </div>

            <div className='px-4 py-2 w-full border border-slate-500 rounded-md text-lg flex gap-4 relative hover:border-yellow transition-colors'>
              <input
                type='radio'
                name='mortgageType'
                value='interestOnly'
                id='interestOnly'
                className='absolute top-1/2 -translate-y-1/2 h-5 w-5 accent-[#95972e] opacity-70 transition-colors'
              />
              <label
                htmlFor='interestOnly'
                className='w-full hover:cursor-pointer px-8'
              >
                Interest Only
              </label>
            </div>
          </div>
        </div>

        {/* submit */}
        <Button type='pill' icon={iconCalculator} className='mt-6 mb-2'>
          Calculate Repayments
        </Button>
      </form>
    </div>
  );
}

export default Form;

{
  /* <div className='flex flex-col gap-2'>
<label htmlFor='#' className='text-slate-700 font-medium'>
  Mortgage Amount
</label>
<div className='relative overflow-hidden flex'>
  <span className='pointer-events-none absolute font-bold text-slate-700 bg-slate-100 p-4 inset-y-0 left-0 flex items-center'>
    £
  </span>

  <input
    type='text'
    name=''
    id=''
    className='pl-14 transition-colors rounded-md hover:cursor-pointer border-slate-500 focus:border-yellow focus:ring-0 hover:border-slate-900 w-full font-bold text-slate-900 text-lg'
  />
</div>
</div> */
}
{
  /* <span className=' h-4 w-4 border border-slate-500 rounded-full inline-block absolute top-1/2 -translate-y-1/2 left-0 after:absolute after:block after:h-2.5 after:w-2.5 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:left-1/2 after:bg-slate-500 after:transition-opacity after:opacity-0'></span> */
}
