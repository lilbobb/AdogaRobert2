import React from "react";
import UseCustomHook from "./UseCustomHook";
import Navbar from "./navbar";

function CounterCustom() {
  const [count, increment, decrement, reset] = UseCustomHook(0);

  return (
    <div className="counter2">
      <Navbar />
      <h1>Count = {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterCustom;
