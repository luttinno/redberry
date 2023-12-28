import React, { useState } from "react";

const CustomSelect = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      {selected ? (
        <input
          className="w-[288px] h-[44px] border-[1px] border-[#E4E3EB] rounded-[12px] text-[#85858D] font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left pl-4 focus:outline-[#5D37F3]"
          onClick={() => setIsOpen(!isOpen)}
        ></input>
      ) : (
        <input
          placeholder="აირჩიეთ კატეგორია"
          onClick={() => setIsOpen(!isOpen)}
          className="w-[288px] h-[44px] border-[1px] border-[#E4E3EB] rounded-[12px] text-[#85858D] font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left pl-4 focus:outline-[#5D37F3] "
        ></input>
      )}
      {isOpen && (
        <ul className="absolute top-[42px]">
          {options.map((option, i) => (
            <li key={option} onClick={() => handleSelect(option)}>
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
    <div className=" flex flex-row absolute bottom-[176px] right-0 items-center ">
      <CustomSelect
        options={categoryOptions}
        selected={selectedCategory}
        onSelect={handleCategoryChange}
      />

      <ul className="flex flex-row absolute left-0">
        {selectedCategories.map((category) => (
          <li
            key={category}
            className="w-[83px] h-[32px]   rounded-[30px]  bg-[#FFB82F] font-[FiraGO] text-[12px] font-medium leading-[16px] tracking-normal text-center text-[#FFFFFF] cursor-pointer pt-2"
          >
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
