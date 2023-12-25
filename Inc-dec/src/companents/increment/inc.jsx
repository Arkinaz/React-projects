import "./inc.scss";

import React from "react";

const Increment = ({ setCount, count }) => {
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};

export default Increment;
