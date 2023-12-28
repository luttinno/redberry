import upload from "../images/upload.svg";
import React, { useState } from "react";
import axios from "axios";
import MultiSelectCategories from "./MultiSelectCategories";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";
import back from "../images/back-2.svg";

const BlogUploadForm = ({ onUpload, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // Send formData to your API endpoint for handling the upload
      const response = await axios.post(
        "YOUR_API_ENDPOINT", // Replace with your actual API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response as needed
      console.log("Upload successful:", response.data);

      // Clear form fields and close the modal
      setSelectedFile(null);
      setError(null);

      // Trigger a callback to update the parent component or perform other actions
      onUpload();
      onClose();
    } catch (error) {
      console.error("Error:", error.message);
      setError("An error occurred while uploading the file.");
    }
  };

  const [selectedDate, setSelectedDate] = useState("2023-12-12");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] bg-cover  border-b-[#E4E3EB] border-b-[1px] sticky top-0 z-50">
        <div className="w-[1440px] h-[80px] bg-[#FFFFFF] flex flex-row relative justify-center items-center m-auto ">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className=" w-[150px] h-[24px]  cursor-pointer"
            />
          </Link>
        </div>
      </div>

      <button className="absolute top-[120px] left-[308px] ">
        <Link to="/">
          <img src={back} alt="bck" className="bg-[#E4E3EB] rounded-[24px]" />
        </Link>
      </button>
      <div className="bg-cover bg-[#FBFAFF] h-[1078px] pt-10  ">
        <form
          onSubmit={handleSubmit}
          className="w-[600px] h-[928px] relative m-auto translate translate-x-[-60px] "
        >
          <h1 className="font-[FiraGO] text-[32px] font-bold leading-[40px] tracking-normal text-left absolute top-0 left-0 ">
            ბლოგის დამატება
          </h1>
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left absolute left-0 top-[80px] ">
            ატვირთეთ ფოტო
          </h2>

          {/* Drag-and-drop area */}
          <div
            className="border-dashed border-2 border-gray-300   rounded-[12px] text-center w-[600px] h-[180px] bg-[#F4F3FF] flex justify-evenly items-center flex-col absolute top-[108px] left-0 "
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img src={upload} alt="upload" />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer block mb-4 text-sm font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left"
            >
              ჩააგდეთ ფაილი აქ ან{" "}
              <span className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left underline text-[#1A1A1F] ">
                აირჩიეთ ფაილი
              </span>
            </label>

            {/* File input */}
            <input
              type="file"
              id="fileUpload"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {selectedFile && (
              <p className="text-gray-600">{selectedFile.name}</p>
            )}
          </div>
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[312px] left-0 ">
            ავტორი *
          </h2>
          <input
            type="text"
            placeholder="შეიყვნეთ ავტორი"
            className="font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left text-[#85858D] w-[288px] h-[44px] border-[1px]  border-[#E4E3EB] absolute top-[340px] left-0 pl-[16px] rounded-[12px] focus:outline-[#5D37F3] "
          />
          <ol className="absolute top-[392px] left-[16px] list-disc w-[216px] h-[60px] ">
            <li className="text-[#85858D] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left">
              მინიმუმ 4 სიმბოლო
            </li>
            <li className="text-[#85858D] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left">
              მინიმუმ ორი სიტყვა
            </li>
            <li className="text-[#85858D] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left">
              მხოლოდ ქართული სიმბოლოები
            </li>
          </ol>
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[312px] right-[224px] ">
            სათური *
          </h2>
          <input
            type="text"
            placeholder="შეიყვნეთ სათაური"
            className="font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left text-[#85858D] w-[288px] h-[44px] border-[1px]  border-[#E4E3EB] absolute top-[340px] right-0 pl-[16px] rounded-[12px] focus:outline-[#5D37F3] "
          />
          <ul className="absolute top-[392px] right-[169px] ">
            <li className="text-[#85858D] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left">
              მინიმუმ 2 სიმბოლო
            </li>
          </ul>
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[476px] left-0 ">
            აღწერა *
          </h2>
          <textarea
            type="text"
            placeholder="შეიყვნეთ აღწერა"
            className="font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left text-[#85858D] w-[600px] h-[124px] border-[1px]  border-[#E4E3EB] absolute top-[504px] right-0 pl-[16px] rounded-[12px] focus:outline-[#5D37F3] resize-none "
          ></textarea>
          <ul className="absolute top-[636px] left-0 ">
            <li className="text-[#85858D] font-[FiraGO] text-[12px] font-normal leading-[20px] tracking-normal text-left">
              მინიმუმ 2 სიმბოლო
            </li>
          </ul>
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute top-[680px] left-0 ">
            გამოქვეყნების თარიღი *
          </h2>
          <input
            type="date"
            value={selectedDate}
            min="2023-29-12"
            max="2024-12-31"
            onChange={handleDateChange}
            className="w-[288px] h-[44px] rounded-[12px] border-[1px] border-[#E4E3EB] font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left text-[#1A1A1F] bg-[#FCFCFD] absolute bottom-[176px] pl-[16px] pr-[16px] flex flex-row-reverse "
          />
          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute bottom-[228px] right-[201px] ">
            კატეგორია *
          </h2>
          <MultiSelectCategories />

          <h2 className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left text-[#1A1A1F] absolute bottom-[132px] left-0 ">
            ელ-ფოსტა
          </h2>
          <input
            className="w-[288px] h-[44px] bg-[#F7F7FF] border-[#5D37F3] border-[1.5px] rounded-[12px] pl-4 focus:outline-[#5D37F3] absolute bottom-[80px] left-0 "
            placeholder="Example@redberry.ge"
            type="email"
            id="email"
            required
          />

          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-[288px] h-[40px] absolute right-0 bottom-0 text-[#FFFFFF] bg-[#E4E3EB] font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-center rounded-[8px] "
          >
            გამოქვეყნება
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogUploadForm;
