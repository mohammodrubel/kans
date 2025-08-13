"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import "./slick.css";
import Link from "next/link";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
  >
    <ChevronRight className="w-5 h-5 text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
  >
    <ChevronLeft className="w-5 h-5 text-gray-800" />
  </button>
);

const SlickCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://egg.dordham.com/api/v1/sliders");
        const json = await res.json();
        setData(json?.data || []);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
console.log(data,'data')
  const hasMultiple = data.length > 1;

  const settings = {
    dots: false,
    infinite: hasMultiple,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: hasMultiple,
    centerPadding: hasMultiple ? "20%" : "0",
    speed: 500,
    focusOnSelect: true,
    arrows: hasMultiple,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: hasMultiple ? "10%" : "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  };

  // Fixed height for all slides
  const slideHeight = "400px";

  if (data.length === 1) {
    const one = data[0];
    return (
      <div className="container mx-auto">
        <div className={`h-[${slideHeight}] overflow-hidden rounded-xl`}>
          <Image
            src={one?.photo?.original_url}
            alt={one?.title || ''}
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-3 mx-auto">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2"> {/* Add horizontal padding */}
            <Link href={`${item?.url}`}>
            <div 
              className={`h-[${slideHeight}] overflow-hidden rounded-xl`}
              style={{ height: slideHeight }} // Ensure exact height
            >
              <Image
                src={item?.photo?.original_url}
                alt={item?.title || ''}
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;