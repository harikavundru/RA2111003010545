import React, { useState, useEffect } from 'react';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      
      const firstResponseData = {
        "windowPrevState": [],
        "windowCurrState": [2, 4, 6, 8],
        "numbers": [2, 4, 6, 8],
        "avg": 5.00
      };

      setWindowPrevState(firstResponseData.windowPrevState);
      setWindowCurrState(firstResponseData.windowCurrState);
      setNumbers(firstResponseData.numbers);
      setAvg(firstResponseData.avg);

      setTimeout(() => {
        const secondResponseData = {
          "windowPrevState": [2, 4, 6, 8],
          "windowCurrState": [12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
          "numbers": [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
          "avg": 23.40
        };

        setWindowPrevState(secondResponseData.windowPrevState);
        setWindowCurrState(secondResponseData.windowCurrState);
        setNumbers(secondResponseData.numbers);
        setAvg(secondResponseData.avg);
      }, 2000);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <p>{`windowPrevState: [${windowPrevState}]`}</p>
      <p>{`windowCurrState: [${windowCurrState}]`}</p>
      <p>{`numbers: [${numbers}]`}</p>
      <p>{`avg: ${avg.toFixed(2)}`}</p>
    </div>
  );
};

export default AverageCalculator;
