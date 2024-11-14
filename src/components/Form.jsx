/* eslint-disable react/prop-types */
import { useEffect, useReducer } from 'react';
import Button from './Button';

import iconCalculator from '/icon-calculator.svg';

const initialState = {
  amount: '',
  term: '',
  rate: '',
  type: '',
  result: {},
  clear: false,
};

const MONTHS_IN_YEAR = 12;

function calculateMortgage(amount, rate, term, type) {
  const monthlyRate = rate / 100 / MONTHS_IN_YEAR;
  const payments = term * MONTHS_IN_YEAR;
  const factor = Math.pow(1 + monthlyRate, payments);

  const monthlyRepayment =
    type === 'repayment'
      ? (amount * monthlyRate * factor) / (factor - 1)
      : amount * monthlyRate;

  return {
    monthly: Number(monthlyRepayment.toFixed(2)),
    total: Number((monthlyRepayment * payments).toFixed(2)),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'setAmount':
      return { ...state, amount: action.payload };
    case 'setTerm':
      return { ...state, term: action.payload };
    case 'setRate':
      return { ...state, rate: action.payload };
    case 'setType':
      return { ...state, type: action.payload };
    case 'calculate':
      if (!state.amount || !state.rate || !state.term || !state.type)
        return state;

      return {
        ...state,
        result: calculateMortgage(
          state.amount,
          state.rate,
          state.term,
          state.type
        ),
        clear: true,
      };
    // implement clear for <Calculator/> to be passed to button
    case 'clear':
      if (action.payload !== 'clearButton') return;
      return initialState;

    default:
      return 'Action not found';
  }
}

function Form({ onResult }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { amount, rate, term, type, result, clear } = state;

  useEffect(() => {
    function handleFormEntry() {
      if (!amount || !rate || !term || !type || !Object.keys(result).length)
        return;
      onResult(state);
    }
    handleFormEntry();
  }, [onResult, amount, rate, term, type, result, state]);

  useEffect(() => {
    function handleClear() {
      !clear && onResult(false);
    }
    handleClear();
  });

  return (
    <div className='md:mt-6'>
      <div className='lg:flex lg:items-center lg:justify-between gap-2 md:mb-6'>
        <h2 className='text-slate-900 text-2xl font-bold mb-1 sm:mb-0'>
          Mortgage Calculator
        </h2>
        <Button
          type='text'
          className='mt-1 mb-6 md:mb-0'
          onClick={() => dispatch({ type: 'clear', payload: 'clearButton' })}
        >
          Clear All
        </Button>
      </div>

      <form action='#' formNoValidate>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-5'>
          {/* mortgage amount */}
          <div className='flex flex-col gap-3 lg:col-span-2'>
            <label htmlFor='#' className='text-slate-700 font-medium'>
              Mortgage Amount
            </label>

            <div className='relative overflow-hidden'>
              <input
                type='number'
                value={amount}
                onChange={e =>
                  dispatch({
                    type: 'setAmount',
                    payload: Number(e.target.value),
                  })
                }
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
                type='number'
                value={term}
                onChange={e =>
                  dispatch({ type: 'setTerm', payload: Number(e.target.value) })
                }
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
                type='number'
                value={rate}
                onChange={e =>
                  dispatch({
                    type: 'setRate',
                    payload: Number(e.target.value),
                  })
                }
                className='peer pl-4 w-full border border-slate-500 px-4 py-2 rounded-md hover:cursor-pointer transition-colors hover:border-slate-900 focus:border-yellow focus-visible:outline-none font-bold text-slate-900 text-lg'
              />
              <span className='absolute bg-slate-100 top-1/2 -translate-y-1/2 right-[1px] p-[14px] leading-none rounded-tr-[5px] rounded-br-[5px] box-content font-bold text-slate-700 peer-focus:bg-yellow transition-colors'>
                %
              </span>
            </div>
          </div>

          {/* mortgage type */}
          <div className='flex flex-col md:gap-2 gap-2.5 lg:col-span-2'>
            <label className='text-slate-700 font-medium'>Mortgage Type</label>
            <div className='px-4 py-2 w-full border border-slate-500 rounded-md text-lg flex gap-4 relative hover:border-yellow transition-colors'>
              <input
                type='radio'
                name='mortgageType'
                id='repayment'
                checked={type === 'repayment'}
                value='repayment'
                onChange={e =>
                  dispatch({ type: 'setType', payload: e.target.value })
                }
                className='absolute top-1/2 -translate-y-1/2 h-5 w-5 accent-[#95972e] opacity-70 transition-all'
              />
              <label
                htmlFor='repayment'
                className='w-full hover:cursor-pointer px-8 font-bold text-slate-900 text-lg'
              >
                Repayment
              </label>
            </div>

            <div className='px-4 py-2 w-full border border-slate-500 rounded-md text-lg flex gap-4 relative hover:border-yellow transition-colors'>
              <input
                type='radio'
                name='mortgageType'
                id='interestOnly'
                checked={type === 'interestOnly'}
                value='interestOnly'
                onChange={e =>
                  dispatch({ type: 'setType', payload: e.target.value })
                }
                className='absolute top-1/2 -translate-y-1/2 h-5 w-5 accent-[#95972e] opacity-70'
              />
              <label
                htmlFor='interestOnly'
                className='w-full hover:cursor-pointer px-8 font-bold text-slate-900 text-lg'
              >
                Interest Only
              </label>
            </div>
          </div>
        </div>

        {/* submit */}
        <Button
          type='pill'
          onClick={e => {
            e.preventDefault();
            dispatch({ type: 'calculate', payload: 'calculateButton' });
          }}
          icon={iconCalculator}
          className='mt-6 mb-2 md:mt-8'
        >
          Calculate Repayments
        </Button>
      </form>
    </div>
  );
}

export default Form;
