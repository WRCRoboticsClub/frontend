/** @jsxImportSource @theme-ui/core */
import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "@theme-ui/core";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Robotics Club,WRC" />
        {/* <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard /> */}
      </Layout>

      {/* <footer >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </ThemeProvider>
  );
}
