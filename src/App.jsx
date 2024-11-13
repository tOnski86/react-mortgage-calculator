import { useState } from 'react';

import Calculator from './components/Calculator';
import Placeholder from './components/Placeholder';
import Results from './components/Results';

function App() {
  const [results, setResults] = useState(true);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
      <Calculator />
      {results ? <Results /> : <Placeholder />}
    </div>
  );
}

export default App;
