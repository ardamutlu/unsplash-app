import Head from "next/head";
import SearchBox from "@/features/SearchBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unsplash Application</title>
        <meta name="description" content="Unsplash Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBox />
      </main>
    </>
  );
}
