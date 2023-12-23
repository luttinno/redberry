import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#FFFFFF] bg-cover">
      <div className="w-[1440px] h-[80px] bg-[#FFFFFF] flex flex-row relative m-auto">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="absolute w-[150px]h-[24px] top-[29px] left-[76px] cursor-pointer"
          />
        </Link>
        <button className="w-[93px] h-[40px] top-[21px] right-[76px]  bg-[#5D37F3] rounded-[8px] font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal absolute text-[#FFFFFF]">
          შესვლა
        </button>
      </div>
    </div>
  );
};

export default Header;
