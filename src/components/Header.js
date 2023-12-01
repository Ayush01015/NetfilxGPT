import React from "react";
import { LOGO, BG_IMG } from "./utils/constant";
const Header = () => {
  return (
    <nav className="text-black p-1 w-full flex space-x-28 items-center  bg-opacity-50 absolute">
      <img className="w-40 cursor-pointer" src={LOGO} />
    </nav>
  );
};

export default Header;
