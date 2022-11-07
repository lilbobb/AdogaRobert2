import React, { useReducer } from "react";
import Navbar from "./navbar";

const initialState = 0;
const Reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(Reducer, initialState);

  return (
    <div  className="counter">
      <Navbar />
      <div>
        <h1>Count = {count}</h1>
      </div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterReducer;
