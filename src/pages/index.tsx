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
      <div className="flex flex-col items-start h-full pt-10">
        <div className="text-3xl font-medium mb-2">Unsplash</div>
        <div>The internet’s source for visuals.</div>
        <div className="mb-2">Powered by creators everywhere.</div>
        <SearchBox />
      </div>
    </>
  );
}
