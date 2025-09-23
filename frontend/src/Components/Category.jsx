import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CategoryContext } from "../context/Categorycontext";
import "swiper/css";

function Category({ cat }) {
  const { setSlectedCategory } = useContext(CategoryContext);
  const [clickIndex, setClickIndex] = useState(null);
  const swiperRef = useRef(null);

  const handleClicked = (i, title) => {
    setClickIndex(i);
    setSlectedCategory(title.toLowerCase());
    swiperRef.current.autoplay.stop();
  };

  return (
    <div className="mt-10 w-full max-w-[1400px] mx-auto shadow-2xl rounded-md">
      <h1 className="mb-10 text-[25px] tracking-widest font-bold absolute ml-5 md:ml-10">
        Category
      </h1>
      {/* Swiper wrapper */}
      <div className="w-[70%] h-[180px] mx-auto pt-12 bg-transparent overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={5}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          speed={2000} // adjust for smooth speed
          autoplay={{
            delay: 0, // no delay
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {cat.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative flex flex-col items-center group w-[120px] cursor-pointer"
                onClick={() => handleClicked(i, item.title)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={`Slide${i}`}
                  className={`w-[80%] h-[80px] object-cover transform transition-all duration-300 
                    group-hover:-translate-y-2
                    ${clickIndex === i ? "grayscale" : ""}`}
                />

                {/* Title */}
                <div className="relative w-full text-center mt-2">
                  <span className="absolute left-0 top-0 w-0 h-full bg-red-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
                  <span
                    className={`relative z-10 text-sm font-medium transition-all duration-300 
                      ${
                        clickIndex === i
                          ? "text-gray-700"
                          : "text-black group-hover:text-white"
                      }`}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
