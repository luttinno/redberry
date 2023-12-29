import React, { useState } from "react";

const EmailInput = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;

    // Validate email format
    const isValidFormat = enteredEmail.endsWith("@redberry.ge");

    // Update email validation state
    setIsEmailValid(isValidFormat);
  };

  return (
    <input
      className={`w-[288px] h-[44px] ${
        isEmailValid
          ? "bg-[#F8FFF8] border-green-500"
          : "bg-white border-gray-300"
      } border rounded-[12px] pl-4 focus:outline-none absolute bottom-[114px] left-0 z-10`}
      placeholder="Example@redberry.ge"
      type="text"
      id="email"
      required
      onChange={handleEmailChange}
    />
  );
};

export default EmailInput;
