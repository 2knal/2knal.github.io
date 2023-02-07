import { type NextPage } from "next";
import Head from "next/head";

import Menu from "../components/Menu";
import Landing from "../components/Landing";
import { useState } from "react";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home: NextPage = () => {

  const [selectedOption, setSelectedOption] = useState('home');

  const handleMenuOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Head>
        <title>Kunal</title>
        <meta name="description" content="kunals space on the internet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto md:max-w-3xl lg:max-w-6xl">
        <Menu onMenuOptionSelect={handleMenuOptionChange}/>
        { selectedOption === 'home' 
          ? <Landing /> 
          : (selectedOption === 'work') ? <Work /> : <Projects /> }
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
