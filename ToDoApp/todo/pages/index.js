import Layout from "@/components/layout/Layout";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Provider store={store} >
          <Layout />
        </Provider>
      </>
    </>
  );
}
