import React from 'react';

const Header = () => {
  return (
    <div className="text-white fixed z-10 flex items-center justify-center w-full pt-8">
      <div className="bg-slate-800 flex items-center justify-center  space-x-12 md:space-x-24 h-12 md:h-20 w-[18rem] md:w-[30rem]  rounded-[1.5rem] border border-slate-600 px-8 text-lg md:text-xl">
        <div className="cursor-pointer">
          <p>Projects</p>
        </div>
        <div className="cursor-pointer">
          <p>CV</p>
        </div>
        <div className="cursor-pointer">
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
