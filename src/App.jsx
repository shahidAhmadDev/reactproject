import styles from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [calval, setCalVal] = useState([]);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalVal(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calval} />
      <Button onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
