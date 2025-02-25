import { useState } from "react";
import styles from "./counter.module.scss";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button className={styles.button} onClick={increment}>
        {counter}
      </button>
    </div>
  );
}
