import "../styles/globals.css";
import { Work_Sans } from "@next/font/google";

const work_sans = Work_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={work_sans.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
