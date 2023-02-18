import { useState } from "react";
import useTimeout from "../../custom-hooks/useTimeout";
import styles from "./Bomb.module.css";

const Stopwatch = () => {
  const [boom, setBoom] = useState(false);
  const [abort, setAbort] = useState(false);

  useTimeout(() => setBoom(true), abort ? null : 5000);

  return (
    <>
      <span className={`${styles.label} ${boom ? styles.negative : styles.positive}`}>
        {boom && "Boom!"}
        {!boom && abort && "Aborted!"}
      </span>
      {!boom && (
        <button className={styles.button} onClick={() => setAbort(true)}>
          Abort
        </button>
      )}
    </>
  );
};

export default Stopwatch;
