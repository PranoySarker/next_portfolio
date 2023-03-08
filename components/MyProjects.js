import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Project from './Project';
import num1 from '../assets/number1.svg';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://pranoysarker.github.io/projectapi/details.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="text-white ">
      <div className="pt-12 pl-10 md:pl-28">
        <p className="text-[30px]">My Projects</p>
        <p className="text-[18px] text-blue-400">
          Hello strangers! Here is some of my projects and details of them.
        </p>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Project key={project._id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
