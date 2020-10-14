import Head from "next/head";
import styles from "../styles/Home.module.css";
// components
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fooder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <br />
        Food
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
