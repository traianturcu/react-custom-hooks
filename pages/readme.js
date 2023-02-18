import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Demo.module.css";
import { FaHome } from "react-icons/fa";

const ReadMePage = ({ txt }) => {
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

export async function getServerSideProps(context) {
  const txt = await fetch("https://raw.githubusercontent.com/traianturcu/react-custom-hooks/main/README.md").then((res) => res.text());

  if (!txt) {
    return {
      notFound: true,
    };
  }

  return {
    props: { txt }, // will be passed to the page component as props
  };
}
