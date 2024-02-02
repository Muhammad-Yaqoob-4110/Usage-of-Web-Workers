import React, { useState } from "react";

export default function WithOutWebWorkers() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(0);

  function getAnswerToLife() {
    let sum = 0;
    for (let i = 0; i < 5000000000; i++) {
      sum += i;
    }
    setAnswer(42);
  }

  return (
    <>
      <div className="text-3xl flex flex-col gap-4 justify-center border h-screen items-center font-bold">
      <h2>The answer to life is {answer}</h2>
      <h4>The count is {count}</h4>
        <div className="flex flex-row gap-4">
          <button onClick={() => setCount(count + 1)} className="btn btn-active">+1</button>
          <button onClick={getAnswerToLife} className="btn btn-active">Get Answer</button>
        </div>
      </div>
    </>
  );
}
