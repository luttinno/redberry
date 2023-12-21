import React from "react";
import Blog from "../images/Blog.svg";

const FirstSection = () => {
  return (
    <div className="bg-[#F3F2FA] bg-cover">
      <div className="w-[1440px] h-[424px] bg-[#F3F2FA] relative m-auto">
        <h1 className="absolute w-[225px] h-[72px] top-[128px] left-[89px] font-[FiraGO] text-[64px] font-bold leading-[72px] tracking-normal text-left">
          ბლოგი
        </h1>
        <img
          src={Blog}
          alt="pic"
          className="w-[624px] h-[200px] top-[64px] right-[76px] absolute"
        />
        <ul className="w-[684px] h-[32px] top-[328px] left-[378px] gap-[24px] flex flex-row absolute">
          <li className="w-[83px] h-[32px] pl-[16px] pr-[16px] pt-[8px] rounded-[30px]  bg-[#FFB82F14] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#D6961C]">
            მარკეტი
          </li>
          <li className="font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left w-[97px] h-[32px] pl-[16px] pr-[16px] py-[8px] rounded-[30px] gap-[10px] bg-[#1CD67D14] text-[#15C972]">
            აპლიკაცია
          </li>
          <li className="w-[178px] h-[32px] pl-[16px]  pt-[8px] rounded-[30px] gap-[10px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#B71FDD] bg-[#EEE1F7]">
            ხელოვნური ინტელექტი
          </li>
          <li className="w-[65px] h-[32px] rounded-[30px] pt-[8px] pl-[16px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#DC2828] bg-[#FA575714] ">
            UI/UX
          </li>
          <li className="w-[77px] h-[32px] rounded-[30px]  pt-[8px] pl-[16px]  bg-[#E9EFE9] text-[#60BE16] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left">
            კვლევა
          </li>
          <li className="w-[64px] h-[32px] rounded-[30px] pt-2 pl-4 bg-[#08D2AE14] text-[#1AC7A8] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left ">
            Figma
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstSection;
