import "../App.css";
import React, { useEffect } from "react";

const MaxCount = () => {
  const [count, setCount] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(10);

  useEffect(() => {
    if (timeLeft > 0 ){
        setTimeout(() => {
        setTimeLeft(timeLeft - 1);
    }, 1000);
    } else return;
  }, [timeLeft]);

  return (
    <div>
      <h1>{count}</h1>
      <h3>Time left: {timeLeft} seconds</h3>
      {timeLeft === 0 ? null : 
        <button onClick={() => setCount(count + 1)}> + </button>}
    </div>
  );
};

export default MaxCount;