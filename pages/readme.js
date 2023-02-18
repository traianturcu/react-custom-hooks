import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Demo.module.css";

const ReadMePage = () => {
  const [txt, setTxt] = useState("");

  useEffect(() => {
    const getReadme = async () => {
      const txt = await fetch("/api/readme").then((res) => res.text());
      setTxt(txt);
    };

    getReadme();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>
        {" "}
        <Link className={styles.home} href="/">
          &lt;&lt;&nbsp;&nbsp;&nbsp;
        </Link>{" "}
        README.md
      </h1>
      <pre className={styles.code}>{txt}</pre>
    </div>
  );
};

export default ReadMePage;
