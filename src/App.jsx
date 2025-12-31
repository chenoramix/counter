import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button>-</button>
      <span>Step {step}</span>
    </div>
  );
}

export default App;
