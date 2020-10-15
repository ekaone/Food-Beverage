import Head from "next/head";
import { Text } from "@chakra-ui/core";
// components
import Header from "../src/components/header";
import Container from "../src/components/container";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fooder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <main>
          <Header />
          {Array(100)
            .fill("")
            .map((_, i) => (
              <Text>Main content</Text>
            ))}
        </main>
      </Container>

      <footer>Footer</footer>
    </div>
  );
}
