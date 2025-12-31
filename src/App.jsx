import { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="row">
            <button className="bold">-</button>
            <span className="bold">Step: {step}</span>
            <button className="bold">+</button>
          </div>

          <div className="row">
            <button className="bold">-</button>
            <span className="bold">Count: </span>
            <button className="bold">+</button>
          </div>
          <p className="bold">Date</p>
        </div>
      </div>
    </>
  );
}

export default App;
