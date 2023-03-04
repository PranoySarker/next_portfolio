import Image from 'next/image';
import React, { useState } from 'react';
import { BiToggleLeft, BiToggleRight, BiSun, BiMoon } from 'react-icons/bi';
import github from '../assets/github (1).png';
import linkedin from '../assets/linkedin (3).png';
import instagram from '../assets/instagram.png';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="absolute left-0 top-20 bg-contain bg-no-repeat w-40 h-40 bg-[url('../assets/firsthand.webp')]">
        {' '}
      </div>
      <div className="pt-[12rem] pl-12 ">
        <div className="max-w-xl ">
          <p className="text-4xl leading-10 ">
            Hi I am <span className="text-violet-800">Pranoy</span>
          </p>
          <p className="text-4xl leading-10">Front End Developer</p>
          <p className="text-xl leading-10">
            Turning ideas into real life <span>projects</span> is my calling
          </p>
        </div>
        <div className="pt-20 max-w-[7rem]">
          <p className="text-[14px] cursor-pointer">VIEW PROJETCS</p>
          <div className="border-b max-w-[2rem] pt-1 hover:max-w-[6rem] ease-in duration-500"></div>
        </div>
        <div className="flex justify-between">
          <div className="pt-28 " onClick={() => setIsOpen(!isOpen)}>
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
          <div className="flex pt-28">
            <div className="w-7 h-7">
              <Image src={github} />
            </div>
            <div className="w-7 h-7">
              <Image src={linkedin} />
            </div>
            <div className="w-7 h-7">
              <Image src={instagram} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-24 top-[15rem] bg-contain bg-no-repeat w-60 h-60 bg-[url('../assets/secondhand.webp')]">
        {' '}
      </div>
    </div>
  );
};

export default Hero;
