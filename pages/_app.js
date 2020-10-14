import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* <ColorModeProvider> */}
      <CSSReset />
      <Component {...pageProps} />
      {/* </ColorModeProvider> */}
    </ThemeProvider>
  );
}

export default MyApp;
