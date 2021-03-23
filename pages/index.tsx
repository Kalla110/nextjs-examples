import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";

const Home: FunctionComponent = ({}) => {
  return (
    <div>
      <Head>
        <title>Marc's Next Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="clock">GO TO CLOCK</Link>
    </div>
  );
};

export default Home;
