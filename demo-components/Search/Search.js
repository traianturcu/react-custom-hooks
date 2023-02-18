import { useState } from "react";
import useDebounce from "../../custom-hooks/useDebounce";
import styles from "./Search.module.css";

const Stopwatch = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <>
      <input className={styles.input} value={search} onChange={(e) => setSearch(e.target.value)} />
      <span className={styles.search}>{debouncedSearch}</span>
    </>
  );
};

export default Stopwatch;
