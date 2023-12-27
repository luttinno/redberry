import React, { useState } from "react";
import axios from "axios";
import SuccessIcon from "../images/success.svg";
import errrorImage from "../images/error.svg";

const Modal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.blog.redberryinternship.ge/api/login",
        {
          email: email,
        }
      );

      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("წარმატებული ავტორიზაცია");
        setError(false);
        setSuccess(true);
        onLogin(true);
      } else {
        // Error response
        setResponseMessage("ელ-ფოსტა არ მოიძებნა");
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setResponseMessage("ელ-ფოსტა არ მოიძებნა");
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        display: isOpen ? "flex" : "none",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(26, 26, 31, 0.5)",
        zIndex: 1,
      }}
    >
      <div className=" w-[480px] h-[300px] rounded-[8px] m-auto">
        <div
          className="flex justify-between items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {success ? (
            <form
              onSubmit={handleSubmit}
              className="w-[480px] h-[300px] bg-[#FFFFFF] rounded-[12px] relative "
            >
              <button
                onClick={onClose}
                className="font-[FiraGO] text-[18px] font-medium leading-[20px] tracking-normal text-center text-[#1A1A1F] absolute top-[20px] right-[20px] hover:bg-[#5D37F3] rounded-[100px] w-[24px] h-[24px] hover:text-white [transition:0.5s]"
              >
                x
              </button>
              <img
                src={SuccessIcon}
                alt="Success"
                className="absolute top-[64px] left-[208px]"
              />

              <h2 className="font-[FiraGO] text-[20px] font-bold leading-[28px] tracking-normal text-center absolute top-[144px] left-[98px] ">
                {responseMessage}
              </h2>
              <button
                onClick={onClose}
                className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-center w-[432px] h-[40px] bg-[#5D37F3] text-[#FFFFFF] rounded-[8px] absolute bottom-[40px] left-[24px] "
              >
                კარგი
              </button>

              {error && (
                <>
                  <img
                    src={errrorImage}
                    alt="err"
                    className="bg-transparent absolute left-[24px] top-[170px]"
                  />
                  <p className="absolute top-[170px] left-[48px] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left text-[#EA1919]">
                    {responseMessage}
                  </p>
                </>
              )}
            </form>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-[480px] h-[272px] bg-[#FFFFFF] rounded-[12px] relative "
            >
              <button
                onClick={onClose}
                className="font-[FiraGO] text-[18px] font-medium leading-[20px] tracking-normal text-center text-[#1A1A1F] absolute top-[20px] right-[20px] hover:bg-[#5D37F3] rounded-[100px] w-[24px] h-[24px] hover:text-white [transition:0.5s]"
              >
                x
              </button>
              <p className="font-[FiraGO] text-[24px] font-bold leading-[32px] tracking-normal text-center text-[#1A1A1F]">
                შესვლა
              </p>
              <label
                htmlFor="email"
                className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left absolute top-[96px] left-[24px]"
              >
                ელ-ფოსტა
              </label>
              <input
                className="w-[432px] h-[44px] bg-[#F7F7FF] border-[#5D37F3] border-[1.5px] rounded-[12px] pl-4 focus:outline-[#5D37F3] absolute top-[124px] left-[24px] "
                placeholder="Example@redberry.ge"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-[432px] h-[40px] rounded-[8px] bg-[#5D37F3] font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-[#FFFFFF] absolute bottom-[40px] left-[24px] "
              >
                შესვლა
              </button>
              {error && (
                <>
                  <img
                    src={errrorImage}
                    alt="err"
                    className="bg-transparent absolute left-[24px] top-[170px]"
                  />
                  <p className="absolute top-[170px] left-[48px] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left text-[#EA1919]">
                    {responseMessage}
                  </p>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
