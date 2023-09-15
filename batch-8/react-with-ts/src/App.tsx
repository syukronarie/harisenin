import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count) console.log(count);
  }, [count]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>

      <button type="button" onClick={() => setCount((n) => n + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
