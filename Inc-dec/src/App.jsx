import { useState } from "react";
import "./App.scss";
import Decrement from "./companents/decrement/dec";
import IncByValue from "./companents/increment-by-input-val/input";
import Increment from "./companents/increment/inc";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="home">
        <div className="container">
          <div className="home">
            <h1>Counter Example</h1>
            <Increment setCount={setCount} count={count} />
            <p>{count}</p>
            <Decrement setCount={setCount} count={count} />
            <hr />
            <IncByValue setCount={setCount} count={count} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
