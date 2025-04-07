import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter >= 20) {
      alert("Counter cannot be greater than 20");
      return 20;
    } else {
      setCounter(counter + 1);
    }
    console.log(counter);
  };
  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter cannot be less than 0");
      return 0;
    } else {
      setCounter(counter - 1);
    }
    console.log(counter);
  };

  return (
    <>
      <h1>Hello Vite + React! {counter} </h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
