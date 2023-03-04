import type { AppProps } from "next/app";
import Content from "@/layout/Content";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Content>
        <Component {...pageProps} />
      </Content>
    </Layout>
  );
}
