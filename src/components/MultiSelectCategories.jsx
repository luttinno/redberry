import React, { useState } from "react";

const CustomSelect = ({ options, selected, onSelect, categoryStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const isCategorySelected = selected !== "";
  return (
    <div className="custom-select">
      {isCategorySelected ? (
        <input
          className={`w-[288px] h-[64px] border-[1px] border-[#E4E3EB] rounded-[12px] text-[#85858D] font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left pl-4 focus:outline-none ${
            isCategorySelected
              ? "border-[#14D81C] bg-[#F8FFF8]"
              : "border-[#E4E3EB]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        ></input>
      ) : (
        <input
          placeholder="აირჩიეთ კატეგორია"
          onClick={() => setIsOpen(!isOpen)}
          className="w-[288px] h-[64px] border-[1px] border-[#E4E3EB] rounded-[12px] text-[#85858D] font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left pl-4 focus:outline-none  "
        ></input>
      )}
      {isOpen && (
        <ul className="absolute top-[64px]">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`category-item-${option} ${categoryStyles[option]}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MultiSelectCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoryOptions = [
    "მარკეტი",
    "აპლიკაცია",
    "ხელოვნური ინტელექტი",
    "UI/UX",
    "კვლევა",
    "Figma",
    // Add more categories as needed
  ];

  const categoryStyles = {
    მარკეტი:
      "w-[71px] h-[28px] rounded-[30px]  bg-[#D6961C] text-[#FFFFFF] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-center pt-[8px] cursor-pointer",
    აპლიკაცია:
      "w-[85px] h-[28px] rounded-[30px]  bg-[#15C972] text-[#FFFFFF] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-center pt-[8px] cursor-pointer",
    "ხელოვნური ინტელექტი":
      "w-[166px] h-[28px] rounded-[30px]  bg-[#B71FDD] text-[#FFFFFF] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-center pt-[8px] cursor-pointer",
    "UI/UX":
      "w-[53px] h-[28px]    rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#DC2828] text-[#FFFFFF] text-center pt-[8px] cursor-pointer",
    კვლევა:
      "w-[60px] h-[28px]    rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#60BE16] text-[#FFFFFF] text-center pt-[8px] cursor-pointer ",
    Figma:
      "w-[53px] h-[28px]    rounded-[30px] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal  bg-[#1AC7A8] text-[#FFFFFF] text-center pt-[8px] cursor-pointer",
    // Add more styles as needed
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveCategory = (categoryToRemove) => {
    const updatedCategories = selectedCategories.filter(
      (category) => category !== categoryToRemove
    );
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className=" flex flex-row absolute bottom-[210px] right-0  ">
      <CustomSelect
        options={categoryOptions}
        selected={selectedCategory}
        onSelect={handleCategoryChange}
        categoryStyles={categoryStyles}
      />

      <ul className="flex flex-row absolute left-0 flex-wrap ">
        {selectedCategories.map((category) => (
          <li key={category} className={` ${categoryStyles[category]}`}>
            {category}{" "}
            <button
              type="button"
              onClick={() => handleRemoveCategory(category)}
              className="text-[#FFFFFF]"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectCategories;
