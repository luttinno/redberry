import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Validation States
  const [isValidSymbol, setIsValidSymbol] = useState(true);
  const [isValidWord, setIsValidWord] = useState(true);
  const [isValidGeorgian, setIsValidGeorgian] = useState(true);

  const validateInput = () => {
    setIsTouched(true);

    const georgianRegex = /^[\u10D0-\u10FA\s]+$/; // Georgian Unicode range
    const words = inputValue.split(/\s+/);

    // Validate each condition separately
    setIsValidSymbol(inputValue.length >= 3);
    setIsValidWord(words.length >= 2);
    setIsValidGeorgian(georgianRegex.test(inputValue));
  };

  return (
    <div className="p-4 flex flex-col w-[600px] h-[400px]">
      <h2 className="text-xl font-bold mb-2">სათური *</h2>
      <input
        type="text"
        placeholder="შეიყვნეთ სათაური"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          validateInput();
        }}
        className={`focus:outline-none border p-2 ${
          isTouched
            ? isValidSymbol && isValidGeorgian
              ? "border-green-500 text-green-500 bg-[#F8FFF8]"
              : "border-red-500 text-red-500 bg-[#FAF2F3]"
            : "border-grey text-grey"
        }`}
      />
      <ul className="inline-block">
        <li
          className={`inline-block text-sm ${
            isTouched
              ? isValidSymbol && isValidGeorgian
                ? "text-green-500 bg-[#F8FFF8]"
                : "text-red-500 bg-[#FAF2F3]"
              : "text-grey"
          }`}
        >
          მინიმუმ 4 სიმბოლო
        </li>{" "}
        <br />
        <li
          className={`inline-block text-sm ${
            isTouched
              ? isValidWord
                ? "text-green-500 bg-[#F8FFF8]"
                : "text-red-500 bg-[#FAF2F3]"
              : "text-grey"
          }`}
        >
          მინიმუმ 2 სიტყვა
        </li>{" "}
        <br />
        <li
          className={`inline-block text-sm ${
            isTouched
              ? isValidGeorgian
                ? "text-green-500 bg-[#F8FFF8]"
                : "text-red-500 bg-[#FAF2F3]"
              : "text-grey"
          }`}
        >
          მხოლოდ ქართული სიმბოლოები
        </li>
      </ul>
    </div>
  );
};

export default App;
