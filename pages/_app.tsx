import type { AppProps } from "next/app";
import "../styles/global.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store";
import Head from "next/head";
import LocalStorage from "@/components/LocalStorage/LocalStorage";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>eCommerce</title>
        <meta
          name="description"
          content="My personal eCommerce project for a job"
        />
        <meta
          name="description"
          content="My personal eCommerce project for a job with a query string filtering"
        ></meta>
        <meta name="keywords" content="e-commerce,ecommerce,shop,market" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#242424" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.webp"></link>
      </Head>
      <Provider store={store}>
        <LocalStorage></LocalStorage>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </SessionProvider>
  );
}
