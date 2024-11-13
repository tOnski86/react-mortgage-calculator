import { useState } from 'react';

import Calculator from './components/Calculator';
import Placeholder from './components/Placeholder';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState(false);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <Calculator />
      {results ? <Placeholder /> : <Results />}
    </div>
  );
}

export default App;
