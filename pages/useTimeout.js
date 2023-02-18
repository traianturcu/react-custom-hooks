import Link from "next/link";
import Bomb from "@/demo-components/Bomb";
import styles from "../styles/Demo.module.css";
import { FaHome } from "react-icons/fa";

const UseTimeoutPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.home} href="/">
        <FaHome />
      </Link>
      <h1 className={styles.header}>useTimeout</h1>
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
      <p>
        <Link href="/readme">credits</Link>
      </p>
    </div>
  );
};

export default UseTimeoutPage;
