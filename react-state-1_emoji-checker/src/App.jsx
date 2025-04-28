import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const validCode = "🐡🐠🐋";
  const [code, setCode] = useState("");
  function handleClick(emoji) {
    setCode(code + emoji);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        {/* puffferfish button */}
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        {/* Whale button */}
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        {/* clownfish button */}
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
