import React from "react";
import Arrow from "../images/Arrow.svg";

const Card = ({
  image,
  auth,
  date,
  title,
  cate,
  cate2,
  cate3,
  cate4,
  cate5,
  desc,
}) => {
  return (
    <div className="w-[408px] h-[620px] bg-[#F3F2FA] text-center rounded-[12px] relative">
      <img
        src={image}
        alt="unsplash"
        className="w-[408px] h-[328px] rounded-[12px] absolute top-0 left-0"
      />
      <p className="font-[FiraGO] text-[16px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[352px] left-0">
        {auth}
      </p>
      <h5 className="font-[FiraGO] text-[12px] font-normal leading-[16px] tracking-normal text-left text-[#85858D] absolute top-[380px] left-0 ">
        {date}
      </h5>
      <h2 className="font-[FiraGO] text-[20px] font-medium leading-[28px] tracking-normal text-left text-[#1A1A1F] absolute top-[412px] left-0 ">
        {title}
      </h2>
      <ul className="w-[354px] h-[28px] gap-[16px] flex flex-row absolute top-[484px] left-0 ">
        {cate.includes(1) && (
          <li className="w-[71px] h-[28px] rounded-[30px] pt-[6px] pl-[10px] bg-[#FFB82F14] text-[#D6961C] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left ">
            მარკეტი
          </li>
        )}
        {cate.includes(2) && (
          <li className="w-[85px] h-[28px] rounded-[30px] pt-[6px] pl-[10px] bg-[#1CD67D14] text-[#15C972] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left ">
            აპლიკაცია
          </li>
        )}
        {cate.includes(3) && (
          <li className="w-[166px] h-[28px] rounded-[30px] pt-[6px] pl-[10px] bg-[#B11CD614] text-[#B71FDD] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left ">
            ხელოვნური ინტელექტი
          </li>
        )}
        {cate.includes(4) && (
          <li className="w-[53px] h-[28px]   pt-[6px] rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#FA575714] text-[#DC2828] ">
            UI/UX
          </li>
        )}
        {cate.includes(5) && (
          <li className="w-[53px] h-[28px]   pt-[6px] rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#70CF2514] text-[#60BE16] ">
            კვლევა
          </li>
        )}
        {cate.includes(6) && (
          <li className="w-[53px] h-[28px]   pt-[6px] rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#08D2AE14] text-[#1AC7A8] ">
            Figma
          </li>
        )}
      </ul>
      <p className="font-[FiraGO] text-[16px] font-normal leading-[28px] tracking-normal text-left absolute bottom-[36px] left-0">
        {desc}
      </p>
      <div>
        <h4 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#5D37F3] absolute bottom-[-1px] left-0">
          სრულად ნახვა
        </h4>
        <img
          src={Arrow}
          alt="sml-arrow"
          className="absolute bottom-0 left-[107px]"
        />
      </div>
    </div>
  );
};

export default Card;
