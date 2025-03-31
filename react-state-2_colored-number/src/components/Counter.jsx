import React, { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount(count + 1);
  };

  const handleMinusOne = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handlePlusOne}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleMinusOne}
        >
          -
        </button>
      </div>
    </div>
  );
}
