import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-[#10101a] h-screen mb-20">
      <Head>
        <title>Pranoy_Sarker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* font  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="">
        <Header></Header>
        <Hero></Hero>
      </div>
    </div>
  );
}
