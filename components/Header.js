import React from 'react';

const Header = () => {
  return (
    <div className="text-white fixed flex items-center justify-center w-full pt-8">
      <div className="bg-slate-800 flex items-center justify-center space-x-12 h-12 w-[18rem] rounded-[1.5rem] border border-slate-600">
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