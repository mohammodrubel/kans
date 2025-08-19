"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import "./slick.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { Skeleton } from "./ui/skeleton";

// ✅ Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
    aria-label="Next slide"
  >
    <ChevronRight className="w-5 h-5 text-gray-800" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-5 h-5 text-gray-800" />
  </button>
);

const SlickCarousel = () => {
  // ✅ Hooks always at top-level
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentLang } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://egg.dordham.com/api/v1/sliders");
        if (!res.ok) throw new Error("Failed to fetch sliders");
        const json = await res.json();
        setData(json?.data || []);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const hasMultiple = data.length > 1;

  const settings = {
    dots: false,
    infinite: hasMultiple,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: hasMultiple,
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
          centerMode: hasMultiple,
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

  const slideHeight = "400px";

  // ✅ Conditional rendering for UI only
  if (loading) {
    return (
      <div className="container mx-auto mt-3">
        <Skeleton
          className="w-full rounded-xl"
          style={{ height: slideHeight }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-3 p-4 bg-red-50 text-red-600 rounded-xl">
        Error loading carousel: {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="container mx-auto mt-3 p-4 bg-gray-50 text-gray-600 rounded-xl">
        No slides available
      </div>
    );
  }

  if (data.length === 1) {
    const one = data[0];
    return (
      <div className="container mx-auto">
        <div
          className="overflow-hidden rounded-xl"
          style={{ height: slideHeight }}
        >
          <Image
            src={one?.photo?.original_url}
            alt={one?.title || "Slide"}
            width={1200}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  // ✅ Default multi-slide
  return (
    <div
      className="container mt-3 mx-auto"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="px-2">
            <Link href={item?.url || "#"} passHref>
              <div
                className="relative w-full overflow-hidden rounded-xl"
                style={{ height: slideHeight }}
              >
                <Image
                  src={item?.photo?.original_url}
                  alt={item?.title || "Slide"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
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
