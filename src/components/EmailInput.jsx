import React, { useState, useEffect } from "react";

const EmailInput = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  useEffect(() => {
    const savedValue5 = localStorage.getItem("inputFieldValue5");

    // If there is a saved value, set the state
    if (savedValue5) {
      setSelectedEmail(savedValue5);
    }
  }, []);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;

    // Validate email format
    const isValidFormat = enteredEmail.endsWith("@redberry.ge");

    // Update email validation state
    setIsEmailValid(isValidFormat);
    setSelectedEmail(enteredEmail);
    localStorage.setItem("inputFieldValue5", e.target.value);
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
      value={selectedEmail} // Set the value prop to control the input field
    />
  );
};

export default EmailInput;
