import Link from "next/link";
import Search from "@/demo-components/Search";
import styles from "../styles/Demo.module.css";
import { FaHome } from "react-icons/fa";

const UseDebounceDemoPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.home} href="/">
        <FaHome />
      </Link>
      <h1 className={styles.header}>useDebounce</h1>
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
      <p>
        <Link href="/readme">credits</Link>
      </p>
    </div>
  );
};

export default UseDebounceDemoPage;
