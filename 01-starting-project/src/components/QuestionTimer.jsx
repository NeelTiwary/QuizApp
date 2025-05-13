import React, { useState, useEffect } from 'react';

function QuestionTimer({ time, onTimeOut ,mode }) {
  const [remainingTime, setRemainingTime] = useState(time);

  // Set the timeout for auto submit / skip
  useEffect(() => {
    const timer = setTimeout(onTimeOut, time , mode);
    return () => {
      clearTimeout(timer);
    };
  }, [time, onTimeOut]);

  // Set the interval for countdown display
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 100) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <progress id="question-time" max={time} value={remainingTime} className={mode}/>
  );
}

export default QuestionTimer;
