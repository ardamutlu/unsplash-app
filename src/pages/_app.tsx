import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Content from "@/layout/Content";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Provider>
  );
}
