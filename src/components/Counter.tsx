import { useState } from "react";
import css from "./counter.module.scss";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <button className={css.button} onClick={increment}>
        {counter}
      </button>
    </div>
  );
}
