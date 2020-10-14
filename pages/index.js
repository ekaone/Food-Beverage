import Head from "next/head";
import styles from "../styles/Home.module.css";
// components
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fooder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        Main content
      </main>

      <footer>Footer</footer>
    </div>
  );
}
