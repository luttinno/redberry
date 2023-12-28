import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import back from "../images/back.svg";
import CarouselSlider from "./Slider";
import { Link } from "react-router-dom";

const MoreAbout = () => {
  const location = useLocation();
  const { state } = location;
  const [cardData, setCardData] = useState(null);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get("https://api.blog.redberryinternship.ge/api/blogs", {
        headers: {
          Authorization: `Bearer f588e1ea4ab749169c32af4183b3bd955467fa1692f8ce7939fa6ddd8befe960`,
        },
      })
      .then((response) => {
        const getData = response.data.data;
        setOriginalData(getData);
      })
      .catch((error) => {
        console.error(error);
      });

    // Set card data if available
    if (state && state.cardData) {
      setCardData(state.cardData);
    }
  }, [state]);

  if (!cardData) {
    return <></>;
  }

  const { image, auth, date, title, cate, desc } = cardData;

  // Filter blogs based on the category title of the rendered card
  const filteredBlogs = originalData.filter((blog) =>
    cate.some((categoryId) =>
      blog.categories.some((category) => category.id === categoryId)
    )
  );
  console.log(filteredBlogs);
  return (
    <>
      <Header />
      <div className="bg-cover bg-[#F3F2Fa]">
        <div className="w-[1440px] h-[1290px] m-auto">
          <div className="w-[1440px] h-[1290px] relative bg-[#F3F2FA] ">
            <button className="w-[44px] h-[44px] absolute top-[40px] left-[76px] bg-[#FFFFFF] rounded-[24px] ">
              <Link to="/">
                <img src={back} alt="back" />
              </Link>
            </button>
            <div className="w-[720px] h-[1152px] text-center relative m-auto pt-10">
              <img
                src={image}
                alt="pic"
                className="w-full h-[328px] object-cover  rounded-[12px] "
              />
              <p className="font-[FiraGO] text-[16px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[408px] left-0">
                {auth}
              </p>
              <h5 className="font-[FiraGO] text-[12px] font-normal leading-[16px] tracking-normal text-left text-[#85858D] absolute top-[436px] left-0 ">
                {date}
              </h5>
              <h2 className="font-[FiraGO] text-[32px] font-bold leading-[40px] tracking-normal text-left text-[#1A1A1F] absolute top-[476px] left-0 ">
                {title}
              </h2>
              <ul className="w-[354px] h-[28px] gap-[16px] flex flex-row absolute top-[580px] left-0 ">
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
              <p className="font-[FiraGO] text-[16px] font-normal leading-[28px] tracking-normal text-left absolute top-[648px] left-0">
                {desc} <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit libero officiis unde magnam, accusamus ex fuga
                perferendis quas laudantium, soluta ea illum animi tempora iure
                totam assumenda dignissimos veritatis praesentium.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos accusantium necessitatibus illum, ipsa itaque
                veritatis iste laboriosam doloribus officia quae, eligendi magni
                quos dicta qui corrupti laudantium corporis et deserunt!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt dolor vero aspernatur iure? Quibusdam itaque
                repellendus suscipit? Nisi, exercitationem fuga! Minus
                reiciendis accusamus nesciunt eaque quibusdam perspiciatis iure
                fuga assumenda? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Corporis officiis perspiciatis dolorum
                asperiores eos, illum ducimus itaque laudantium, omnis molestiae
                explicabo numquam possimus eaque ullam nam quaerat, quo suscipit
                ea!
              </p>
            </div>
          </div>
        </div>
        <CarouselSlider blogs={filteredBlogs} />
      </div>
    </>
  );
};

export default MoreAbout;
