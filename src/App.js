import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  const colorChange = useRef(null);
  const changing = () => {
    document.body.style.backgroundColor = colorChange.current.value;
    setColor(() => colorChange.current.value);
  };

  return (
    <div className="App">
      <p>Enter Color</p>
      <input type="text" ref={colorChange} onChange={changing} />
      <p>{color}</p>
    </div>
  );
}

export default App;
