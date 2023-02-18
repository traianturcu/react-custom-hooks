import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Custom Hooks</title>
        <meta name="description" content="React Custom Hooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React Custom Hooks</h1>

        <div className={styles.grid}>
          <a href="/useIntervalDemo" className={styles.card}>
            <h2>useInterval</h2>
            <p>
              <code>a declarative version of setInterval</code>
            </p>
          </a>

          <a href="/useDebounceDemo" className={styles.card}>
            <h2>useDebounce</h2>
            <p>
              <code>debounce / throttle values</code>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        credits in <code>README.md</code>
      </footer>
    </div>
  );
}
