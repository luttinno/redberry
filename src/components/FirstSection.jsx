import React from "react";
import Blog from "../images/Blog.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const FirstSection = () => {
  // const [data, setData] = useState([]);
  const [isBorderVisible1, setIsBorderVisible1] = useState(false);
  const [isBorderVisible2, setIsBorderVisible2] = useState(false);
  const [isBorderVisible3, setIsBorderVisible3] = useState(false);
  const [isBorderVisible4, setIsBorderVisible4] = useState(false);
  const [isBorderVisible5, setIsBorderVisible5] = useState(false);
  const [isBorderVisible6, setIsBorderVisible6] = useState(false);

  const toggleBorder1 = () => {
    setIsBorderVisible1((prevState) => !prevState);
  };

  const toggleBorder2 = () => {
    setIsBorderVisible2((prevState) => !prevState);
  };
  const toggleBorder3 = () => {
    setIsBorderVisible3((prevState) => !prevState);
  };
  const toggleBorder4 = () => {
    setIsBorderVisible4((prevState) => !prevState);
  };
  const toggleBorder5 = () => {
    setIsBorderVisible5((prevState) => !prevState);
  };
  const toggleBorder6 = () => {
    setIsBorderVisible6((prevState) => !prevState);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://api.blog.redberryinternship.ge/api/blogs", {
  //       headers: {
  //         Authorization: `Bearer f588e1ea4ab749169c32af4183b3bd955467fa1692f8ce7939fa6ddd8befe960`,
  //       },
  //     })
  //     .then((response) => {
  //       const getData = response.data.data;
  //       setData(getData);
  //       console.log(getData);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // const filteredData = (cate) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.categories.some((category) => category.id === cate);
  //     })
  //   );
  // };

  const [originalData, setOriginalData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
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
  }, []);

  const handleToggleFilter = (categoryId) => {
    // Check if the category is already selected
    const isCategorySelected = selectedCategories.includes(categoryId);

    // Update the selected categories array
    if (isCategorySelected) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        categoryId,
      ]);
    }
  };

  // Apply filters to the original data based on selected category IDs
  const filteredData = originalData.filter((item) =>
    selectedCategories.every((categoryId) =>
      item.categories.some((category) => category.id === categoryId)
    )
  );

  return (
    <>
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
            <li
              onClick={() => {
                handleToggleFilter(1);
                toggleBorder1();
              }}
              style={{
                border: isBorderVisible1 ? "1px solid black" : "none",
              }}
              className="w-[83px] h-[32px] pl-[16px] pr-[16px] pt-[8px] rounded-[30px]  bg-[#FFB82F14] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#D6961C] cursor-pointer"
            >
              მარკეტი
            </li>
            <li
              onClick={() => {
                handleToggleFilter(2);
                toggleBorder2();
              }}
              style={{
                border: isBorderVisible2 ? "1px solid black" : "none",
              }}
              className="font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left w-[97px] h-[32px] pl-[16px] pr-[16px] py-[8px] rounded-[30px] gap-[10px] bg-[#1CD67D14] text-[#15C972] cursor-pointer"
            >
              აპლიკაცია
            </li>
            <li
              onClick={() => {
                handleToggleFilter(3);
                toggleBorder3();
              }}
              style={{
                border: isBorderVisible3 ? "1px solid black" : "none",
              }}
              className="w-[178px] h-[32px] pl-[16px]  pt-[8px] rounded-[30px] gap-[10px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#B71FDD] bg-[#EEE1F7] cursor-pointer"
            >
              ხელოვნური ინტელექტი
            </li>
            <li
              onClick={() => {
                handleToggleFilter(4);
                toggleBorder4();
              }}
              style={{
                border: isBorderVisible4 ? "1px solid black" : "none",
              }}
              className="w-[65px] h-[32px] rounded-[30px] pt-[8px] pl-[16px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left text-[#DC2828] bg-[#FA575714] cursor-pointer "
            >
              UI/UX
            </li>
            <li
              onClick={() => {
                handleToggleFilter(5);
                toggleBorder5();
              }}
              style={{
                border: isBorderVisible5 ? "1px solid black" : "none",
              }}
              className="w-[77px] h-[32px] rounded-[30px]  pt-[8px] pl-[16px]  bg-[#E9EFE9] text-[#60BE16] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left cursor-pointer"
            >
              კვლევა
            </li>
            <li
              onClick={() => {
                handleToggleFilter(6);
                toggleBorder6();
              }}
              style={{
                border: isBorderVisible6 ? "1px solid black" : "none",
              }}
              className="w-[64px] h-[32px] rounded-[30px] pt-2 pl-4 bg-[#08D2AE14] text-[#1AC7A8] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-left cursor-pointer "
            >
              Figma
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F3F2FA] bg-cover">
        <div className="w-[1440px] h-[2714px] flex justify-center bg-[#F3F2FA] m-auto">
          <div className="w-[1288px] h-[2648px] bg-[#F3F2FA] grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(4,_1fr)] gap-y-[56px] gap-x-[32px] ">
            {filteredData.map((item) => (
              <Card
                key={item.id}
                auth={item.author}
                image={item.image}
                date={item.publish_date}
                title={item.title}
                desc={item.description}
                cate={item.categories.map((cat, i) => {
                  return cat.id;
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
