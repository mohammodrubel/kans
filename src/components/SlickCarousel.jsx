"use client";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import "./slick.css";

// Custom Arrow Components (Lucide Icons)
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5 text-gray-800" />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5 text-gray-800" />
    </button>
  );
};

const SlickCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    focusOnSelect: true,
    arrows: true, // ← Ensures default arrows are disabled
    nextArrow: <NextArrow />, // ← Your custom arrow
    prevArrow: <PrevArrow />, // ← Your custom arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0%",
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, img: slider1 },
    { id: 2, img: slider2 },
    { id: 3, img: slider3 },
  ];

  return (
    <div className="container mx-auto my-10 relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="slide-box h-[400] overflow-hidden rounded-xl mx-1">
              <Image
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SlickCarousel;