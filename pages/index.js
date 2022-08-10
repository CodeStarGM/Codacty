import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Codacty!</title>
        <link rel="icon" type="image/x-icon" href="/favi.png" />
        <meta
          name="description"
          content="Codacty is #1 template selling website we only sell 100% unique and creative templates that are totally hand-coded by our senior developers."
        />
        <meta
          name="keywords"
          content="codacty, web templates, website designs, ui templates, unique web layouts"
        />
        <meta name="author" content="Ghous Muhammad" />
      </Head>
      <div className="commingSOOnBG">
        <div className="w-[100vw] h-[100vh]"></div>
      </div>
    </>
  );
}
