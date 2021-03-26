import Head from "next/head";
import Link from "next/link";
import { FunctionComponent } from "react";
import { PageContainer } from "../components";
import Dashboard from "../components/Dashboard";

const Home: FunctionComponent = ({}) => {
  return (
    // <>
    //   <Head>
    //     <title>Marc's Next Apps</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    <PageContainer>
      <Dashboard />
    </PageContainer>
    // </>
  );
};

export default Home;
