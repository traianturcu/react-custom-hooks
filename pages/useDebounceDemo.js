import Link from "next/link";
import Search from "@/demo-components/Search";
import styles from "../styles/Demo.module.css";

const useDebounceDemo = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        {" "}
        <Link className={styles.home} href="/">
          &lt;&lt;&nbsp;&nbsp;&nbsp;
        </Link>{" "}
        useDebounce Demo
      </h1>
      <Search />
      <pre className={styles.code}>
        {`import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;`}
      </pre>
    </div>
  );
};

export default useDebounceDemo;
