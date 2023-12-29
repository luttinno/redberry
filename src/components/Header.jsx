import React, { useState } from "react";
import Logo from "../images/Logo.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="bg-[#FFFFFF] bg-cover  border-b-[#E4E3EB] border-b-[1px] sticky top-0 z-50">
      <div className="w-[1440px] h-[80px] bg-[#FFFFFF] flex flex-row relative m-auto ">
        <Link to="/redberry">
          <img
            src={Logo}
            alt="logo"
            className="absolute w-[150px] h-[24px] top-[29px] left-[76px] cursor-pointer"
          />
        </Link>
        {isLoggedIn && (
          <Link to="/add-blog">
            <button className="w-[140px] h-[40px] top-[21px] right-[76px] bg-[#5D37F3] rounded-[8px] font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal absolute text-[#FFFFFF]">
              დაამატე ბლოგი
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <button
            className="w-[140px] h-[40px] top-[21px] right-[76px] bg-[#5D37F3] rounded-[8px] font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal absolute text-[#FFFFFF]"
            onClick={toggleLoginForm}
          >
            შესვლა
          </button>
        )}
        <Modal
          isOpen={showLoginForm}
          onClose={toggleLoginForm}
          onLogin={handleLoginStatusChange}
        />
      </div>
    </div>
  );
};

export default Header;
