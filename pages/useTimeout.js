import Link from "next/link";
import Bomb from "@/demo-components/Bomb";
import styles from "../styles/Demo.module.css";

const UseTimeoutPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        {" "}
        <Link className={styles.home} href="/">
          &lt;&lt;&nbsp;&nbsp;&nbsp;
        </Link>{" "}
        useTimeout
      </h1>
      <Bomb />
      <pre className={styles.code}>
        {`import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === "number") {
      const timeoutId = setTimeout(savedCallback.current, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [delay]);
};

export default useTimeout;
`}
      </pre>
    </div>
  );
};

export default UseTimeoutPage;
