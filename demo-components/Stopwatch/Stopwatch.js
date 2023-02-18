import { useState } from "react";
import useInterval from "../../custom-hooks/useInterval";
import styles from "./Stopwatch.module.css";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useInterval(
    () => {
      setTime((time) => time + 1);
    },
    isActive ? 1000 : null
  );

  return (
    <>
      <span className={styles.label}>
        <span className={styles.time}>{time}</span>
      </span>
      <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        {isActive ? "Pause" : "Start"}
      </button>
    </>
  );
};

export default Stopwatch;
