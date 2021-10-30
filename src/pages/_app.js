import "../../styles/globals.css";
import { ThemeProvider } from "@theme-ui/core";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Robotics Club,WRC" />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
