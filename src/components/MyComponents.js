import React, { useState } from 'react';

function SumCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [sum, setSum] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    }
  };

  const calculateSum = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      setSum(numA + numB);
    } else {
      setSum('Invalid input');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>

      <div>
        <label htmlFor="inputA">Enter number a: </label>
        <input type="text" id="inputA" name="a" value={a} onChange={handleInputChange} />
      </div>

      <div>
        <label htmlFor="inputB">Enter number b: </label>
        <input type="text" id="inputB" name="b" value={b} onChange={handleInputChange} />
      </div>

      <button onClick={calculateSum}>Calculate Sum</button>
      
      <div>
        <label>Sum: </label>
        <span>{sum}</span>
      </div>

    </div>
  );
}

export default SumCalculator;