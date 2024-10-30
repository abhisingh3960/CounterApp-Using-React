import { useState } from "react";

function CountApp() {
  const [count, setCount] = useState(0);

  function onAdd() {
    setCount(count + 1);
  }

  function onsub() {
    setCount(count - 1);
  }

  return (
    <>
    <div className="counter_div">
    <h1>Counter App Using React</h1>
      <h2>{count}</h2>
      <div className="plus_minus">
        <button className="plus" onClick={onAdd}>
          +
        </button>
        <button className="minus" onClick={onsub}>
          -
        </button>
      </div>
    </div>
      
    </>
  );
}
export default CountApp;
