import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Validation States
  const [isValidSymbol, setIsValidSymbol] = useState(true);

  const validateInput = () => {
    setIsTouched(true);

    // Validate each condition separately
    setIsValidSymbol(inputValue.length >= 1); // Update to 2 symbols for validity
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
            ? isValidSymbol
              ? "border-green-500 text-green-500 bg-[#F8FFF8]"
              : "border-red-500 text-red-500 bg-[#FAF2F3]"
            : "border-grey text-grey"
        }`}
      />
      <ul className="inline-block">
        <li
          className={`inline-block text-sm ${
            isTouched
              ? isValidSymbol
                ? "text-green-500 bg-[#F8FFF8]"
                : "text-red-500 bg-[#FAF2F3]"
              : "text-grey"
          }`}
        >
          მინიმუმ 2 სიმბოლო
        </li>
      </ul>
    </div>
  );
};

export default App;
