import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MyProjects from '../components/MyProjects';
import Skills from '../components/Skills';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="bg-[#10101a]">
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
        {/* <Header></Header> */}
        <div>
          <div className="text-white fixed z-10 flex items-center justify-center w-full pt-8">
            <div className="bg-slate-800 flex items-center justify-center  space-x-12 md:space-x-24 h-12 md:h-20 w-[18rem] md:w-[30rem]  rounded-[1.5rem] border border-slate-600 px-8 text-lg md:text-xl">
              <div className="cursor-pointer">
                <p>
                  <Link href="#projects" scroll={false}>
                    Projects
                  </Link>
                </p>
              </div>
              <div className="cursor-pointer">
                <p>
                  <Link
                    href="https://drive.google.com/file/d/1Nhfj-etqigDqg4xlFd4VkBAUVPG204EW/view?usp=sharing"
                    target="_blank"
                  >
                    CV
                  </Link>
                </p>
              </div>
              <div className="cursor-pointer">
                <p>
                  <Link href="#contact">Contact</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* components */}
        <Hero></Hero>
        <Skills></Skills>

        <div id="projects">
          <MyProjects></MyProjects>
        </div>

        <div id="#contact">
          <Contact></Contact>
        </div>

        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}
