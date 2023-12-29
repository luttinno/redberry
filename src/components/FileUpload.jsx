import React, { useState } from "react";
import upload from "../images/upload.svg";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    // Optionally, you can also reset the file input value
    document.getElementById("fileUpload").value = "";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div
      className="border-dashed border-2 border-gray-300 rounded-[12px] text-center w-[600px] h-[180px] bg-[#F4F3FF] flex justify-evenly items-center flex-col absolute top-[108px] left-0"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={upload} alt="upld" />
      {selectedFile ? (
        <div className="flex flex-row">
          <p className="text-gray-600">{selectedFile.name}</p>
          <button
            className="text-[#1A1A1F]  cursor-pointer ml-2"
            onClick={handleCancelUpload}
          >
            X
          </button>
        </div>
      ) : (
        <label
          htmlFor="fileUpload"
          className="cursor-pointer block mb-4 text-sm font-[FiraGO] text-[14px] font-normal leading-[20px] tracking-normal text-left"
        >
          ჩააგდეთ ფაილი აქ ან{" "}
          <span className="font-[FiraGO] text-[14px] font-medium leading-[20px] tracking-normal text-left underline text-[#1A1A1F] ">
            აირჩიეთ ფაილი
          </span>
        </label>
      )}

      {/* File input */}
      <input
        type="file"
        id="fileUpload"
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
