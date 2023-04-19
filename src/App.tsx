import React, { useState } from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    setCount(count + 1);
  }; 
  const handleDecreaseCount = () => {
    setCount(count -1);
  };
  const handleResetCount = () => {
    setCount(0);
  };

return(
  <div>
    <h2>Counter App</h2>
    <h1>{count}</h1>
    <table>
      <thead>
        <tr>
          <th><button onClick={handleDecreaseCount}> Decrease </button></th>
          <th><button onClick={handleResetCount}> Reset </button></th>
          <th><button onClick={handleIncreaseCount}> Increase </button></th>
        </tr>
      </thead>
    </table>
  </div>
)
};
export default App;
