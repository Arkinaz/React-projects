import "./input.scss";

import React, { useState } from "react";

const IncByValue = ({ setCount, count }) => {
  const [input, setInput] = useState(0);

  return (
    <>
      <input type="number" value={input} onChange={(e) => setInput(e.target.valueAsNumber)} />
      <button onClick={() => setCount(count + input)}>IncByValue</button>
    </>
  );
};

export default IncByValue;
