import { useState } from 'react';

import Calculator from './components/Calculator';
import Placeholder from './components/Placeholder';
import Results from './components/Results';

function App() {
  const [resultsObject, setResultsObject] = useState(false);
  const { result } = resultsObject;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 sm:max-w-xl md:max-w-[62rem] sm:mx-auto lg:rounded-2xl lg:overflow-hidden lg:bg-white'>
      <Calculator onResult={setResultsObject} />
      {resultsObject ? <Results result={result} /> : <Placeholder />}
    </div>
  );
}

export default App;
