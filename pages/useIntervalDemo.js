import Link from "next/link";
import Stopwatch from "@/demo-components/Stopwatch";
import styles from "../styles/Demo.module.css";

const useIntervalDemo = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        {" "}
        <Link className={styles.home} href="/">
          &lt;&lt;&nbsp;&nbsp;&nbsp;
        </Link>{" "}
        useInterval Demo
      </h1>
      <Stopwatch />
      <pre className={styles.code}>
        {`import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      const intervalId = setInterval(savedCallback.current, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
};

export default useInterval;`}
      </pre>
    </div>
  );
};

export default useIntervalDemo;
