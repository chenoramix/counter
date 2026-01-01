import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  function stepUp() {
    setStep((step) => step + 1);
  }

  function stepDown() {
    setStep((step) => step - 1);
  }

  function countUp() {
    setCount((prevCount) => {
      const newCount = prevCount + step;
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + newCount);
      setDate(newDate);
      return newCount;
    });
  }

  function countDown() {
    setCount((count) => {
      const newCount = count - step;
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + newCount);
      setDate(newDate);
      return newCount;
    });
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="row">
            <button className="bold" onClick={stepDown}>
              -
            </button>
            <span className="bold">Step: {step}</span>
            <button className="bold" onClick={stepUp}>
              +
            </button>
          </div>

          <div className="row">
            <button className="bold" onClick={countDown}>
              -
            </button>
            <span className="bold">Count: {count}</span>
            <button className="bold" onClick={countUp}>
              +
            </button>
          </div>
          <p className="bold">{date.toDateString("pl-PL")}</p>
        </div>
      </div>
    </>
  );
}

export default App;
