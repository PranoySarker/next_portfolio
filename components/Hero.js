import Image from 'next/image';
import React, { useState } from 'react';
import { BiToggleLeft, BiToggleRight, BiSun, BiMoon } from 'react-icons/bi';
import github from '../assets/github (1).png';
import linkedin from '../assets/linkedin (3).png';
import instagram from '../assets/instagram.png';
import headerImage from '../assets/header-img.svg';
import Link from 'next/link';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="absolute left-0 top-20 bg-contain bg-no-repeat w-40 h-40 md:w-64 md:h-64  bg-[url('../assets/firsthand.webp')]">
        {' '}
      </div>
      <div className="pt-[13.5rem] pl-10 md:pl-28 ">
        <div className="flex flex-row gap-24">
          <div className="max-w-2xl ">
            <p className="text-[45px] md:text-7xl leading-[55px] md:leading-16 ">
              Hi I am <span id="nam">Pranoy</span>
            </p>
            <p className="text-[45px] md:text-7xl leading-[55px] md:leading-16">
              Front End Developer
            </p>
            <p className="text-3xl md:text-4xl leading-12 md:leading-16">
              Turning ideas into real life <span id="products">projects</span>{' '}
              is my calling
            </p>
          </div>

          <div className="w-96 h-96 hidden md:block" id="box">
            <Image src={headerImage} />
          </div>
        </div>
        <div className="pt-20 max-w-[8rem] group">
          <p className="text-[16px] leading-8 cursor-pointer">
            <Link href="https://github.com/PranoySarker" target="_blank">
              VIEW PROJETCS
            </Link>
          </p>
          <div className="border-b max-w-[2rem] pt-1 group-hover:max-w-[7rem] ease-out duration-500"></div>
        </div>
        <div className="flex justify-between">
          <div className="pt-20 " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <div className="relative cursor-pointer">
                <BiToggleRight className="w-[3.5rem] h-[3.5rem]" />
                <div className="absolute top-5 left-3">
                  <BiSun />
                </div>
              </div>
            ) : (
              <div className="relative cursor-pointer">
                <BiToggleLeft className="w-[3.5rem] h-[3.5rem]" />
                <div className="absolute top-5 left-7">
                  <BiMoon />
                </div>
              </div>
            )}
          </div>
          <div className="flex space-x-6 pt-24 mr-8 md:mr-20">
            <Link href="https://github.com/PranoySarker" target="_blank">
              <div className="cursor-pointer relative">
                <Image src={github} width={30} height={30} objectFit="cover" />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/pranoy-chandra-sarker-032b62118/"
              target="_blank"
            >
              <div className="cursor-pointer relative">
                <Image
                  src={linkedin}
                  width={30}
                  height={30}
                  objectFit="cover"
                />
              </div>
            </Link>
            <div className=" cursor-pointer relative">
              <Image src={instagram} width={30} height={30} objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bg-right top-[28rem] md:top-[24rem] bg-contain bg-no-repeat w-40 md:w-80 h-40 md:h-80 bg-[url('../assets/secondhand.webp')]">
        {' '}
      </div>
    </div>
  );
};

export default Hero;
