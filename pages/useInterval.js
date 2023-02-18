import Link from "next/link";
import Stopwatch from "@/demo-components/Stopwatch";
import styles from "../styles/Demo.module.css";
import { FaHome } from "react-icons/fa";

const UseIntervalDemoPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.home} href="/">
        <FaHome />
      </Link>
      <h1 className={styles.header}>useInterval</h1>
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
      <p>
        <Link href="/readme">credits</Link>
      </p>
    </div>
  );
};

export default UseIntervalDemoPage;
