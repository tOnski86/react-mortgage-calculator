import { useState } from 'react';

import Calculator from './components/Calculator';
import Placeholder from './components/Placeholder';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState(false);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 sm:max-w-xl md:max-w-[62rem] sm:mx-auto lg:rounded-2xl lg:overflow-hidden lg:bg-white'>
      <Calculator />
      {results ? <Results /> : <Placeholder />}
    </div>
  );
}

export default App;
