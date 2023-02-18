import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Demo.module.css";
import { FaHome } from "react-icons/fa";

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
      <Link className={styles.home} href="/">
        <FaHome />
      </Link>
      <h1 className={styles.header}>README.md</h1>
      <pre className={styles.code}>{txt}</pre>
    </div>
  );
};

export default ReadMePage;
