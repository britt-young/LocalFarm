import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import produce from "../assets/imgs/produce.png";
import meat from "../assets/imgs/meat.png";
import dairy from "../assets/imgs/dairy.png";
import grain from "../assets/imgs/grain.png";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ServiceSlider = () => {
  const slides = [
    { title: "Produce", image: produce },
    { title: "Meat", image: meat },
    { title: "Dairy", image: dairy },
    { title: "Grains", image: grain },
    { title: "Spices", image: "/path/to/spices.jpg" },
    { title: "Beverages", image: "/path/to/beverages.jpg" },
    { title: "Snacks", image: "/path/to/snacks.jpg" },
    { title: "Frozen", image: "/path/to/frozen.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8"> {/* Tailwind for container layout */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative group">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover rounded-sm"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300 rounded-sm" />
            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceSlider;
