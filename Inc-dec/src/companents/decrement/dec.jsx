import "./dec.scss";

import React from "react";

const Decrement = ({setCount, count}) => {
  return <button onClick={() => setCount(count - 1)}>Decrement</button>;
};

export default Decrement;
