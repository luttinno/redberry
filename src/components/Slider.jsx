import React, { useState } from "react";
import Card from "./Card";

const CarouselSlider = ({ blogs }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? blogs.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === blogs.length - 1 ? 0 : prevSlide + 1
    );
  };

  const filteredBlogs = blogs.slice(currentSlide, currentSlide + 3);

  return (
    <div className="w-[1440px] h-[1175px] relative bg-[#F3F2FA] m-auto">
      {/* Your existing content */}
      <p className="font-[FiraGO] text-[32px] font-bold leading-[40px] tracking-normal text-left absolute top-0 left-[76px]">
        მსგავსი სტატიები
      </p>
      <button
        className="bg-[#E4E3EB] text-[#F3F2FA] w-[44px] h-[44px] rounded-[24px] font-[FiraGO] text-[24px] font-bold leading-[40px] hover:bg-[#5D37F3] hover:text-[#FFFFFF] [transition:0.5s_ease-in-out] absolute right-[144px]"
        onClick={handlePrevSlide}
      >
        &lt;
      </button>
      <button
        className="bg-[#E4E3EB] text-[#F3F2FA] w-[44px] h-[44px] rounded-[24px] font-[FiraGO] text-[24px] font-bold leading-[40px] hover:bg-[#5D37F3] hover:text-[#FFFFFF] [transition:0.5s_ease-in-out] absolute right-[76px] "
        onClick={handleNextSlide}
      >
        &gt;
      </button>
      <div
        className="w-auto h-[620px] flex flex-row absolute left-[76px] top-[80px] overflow-hidden [transition:0.5s_ease-in-out]"
        style={{
          transition: "transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)", // Adjust the cubic-bezier values
        }}
      >
        {filteredBlogs.map((item) => (
          <div
            key={item.id}
            className="mr-[32px] [transition:0.5s_ease-in-out]"
          >
            <Card
              auth={item.author}
              image={item.image}
              date={item.publish_date}
              title={item.title}
              desc={item.description}
              cate={item.categories.map((cat, i) => cat.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
