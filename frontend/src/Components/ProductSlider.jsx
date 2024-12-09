import { React, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import veggies from "../assets/imgs/veggies.png";
import meat from "../assets/imgs/meat.png";
import dairy from "../assets/imgs/dairy.png";
import grain from "../assets/imgs/grain.png";
import spices from "../assets/imgs/spices.png";
import fruit from "../assets/imgs/fruit.png";
import eggs from "../assets/imgs/eggs.png";
import feed from "../assets/imgs/feed.png";

const ProductSlider = () => {
  const navigate = useNavigate();

  /*  const handleClick = () => {
    navigate(image.path); // Navigate to the path of the clicked item
  }; */

  const images = [
    { src: veggies, alt: "veggies", text: "Vegetables"},
    { src: meat, alt: "meat", text: "Meat" },
    { src: dairy, alt: "dairy", text: "Dairy" },
    { src: eggs, alt: "eggs", text: "Eggs" },
    { src: fruit, alt: "fruit", text: "Fruits" },
    { src: spices, alt: "spices", text: "Spices"},
    { src: grain, alt: "grain", text: "Grains"},
    { src: feed, alt: "feed", text: "Feed"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Show the next 4 images
  const visibleImages = [
    images[currentIndex % images.length],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
    images[(currentIndex + 3) % images.length],
    images[(currentIndex + 4) % images.length],
  ];

  // Function to handle navigation when text is clicked
  const handleNavigate = () => {
    navigate('/products');
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden mb-20">
      <div className="flex flex-row">
        <button
          className="text-black p-2 rounded-full text-2xl"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <div className="carousel flex transition-transform duration-1000 ease-in-out">
          <div className="carousel-images flex">
            {visibleImages.map((image, index) => (
              <div key={index} className="relative w-full md:w-1/4 p-1">
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-35 flex justify-center items-center opacity-100 rounded-lg">
                    <div
                      className="text-white text-lg font-bold text-center cursor-pointer z-10"
                      onClick={() => handleNavigate()}
                    >
                      {image.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className=" text-black p-2 rounded-full text-2xl"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
