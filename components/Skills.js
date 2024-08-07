import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import javascript from "../assets/JS.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import node from "../assets/node-js.svg";
import mongo from "../assets/mongodb.svg";
import express from "../assets/express.png";
import github from "../assets/github.svg";
import redux from "../assets/redux.png";
import firebase from "../assets/firebase.png";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5 text-white">
      <div className="pt-12 px-10 md:px-28 ">
        <p className="text-[30px]">Experience</p>
        <p className="text-[18px] text-blue-400">
          The only source of knowlwdge is experience -{" "}
          <span className="text-xs italic font-light">'Abert Einstein'</span>
        </p>
        <div className="mt-16">
          <Slider {...settings}>
            <div>
              <Image
                src={javascript}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div>
              <Image src={react} width={100} height={100} className="mx-auto" />
            </div>
            <div>
              <Image
                src={typescript}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div>
              <Image src={node} width={200} height={200} className="mx-auto" />
            </div>
            <div>
              <Image src={mongo} width={100} height={100} className="mx-auto" />
            </div>
            <div>
              <Image
                src={express}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div>
              <Image
                src={github}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <div>
              <Image src={redux} width={100} height={100} className="mx-auto" />
            </div>
            <div>
              <Image
                src={firebase}
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Skills;
