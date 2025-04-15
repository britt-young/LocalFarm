import React, {useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import veggies from "../assets/imgs/products/veggies.png"
import meat from "../assets/imgs/products/meat.png"
import dairy from "../assets/imgs/products/dairy.png"
import eggs from "../assets/imgs/products/eggs.png"
import fruit from "../assets/imgs/products/fruit.png"
import spices from "../assets/imgs/products/spices.png"
import grain from "../assets/imgs/products/grain.png"
import feed from "../assets/imgs/products/feed.png"

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
      <div className="flex flex-row items-center">
        <button
          className="h-10 text-black p-2 rounded-full text-2xl"
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
                  <div className="absolute bg-black/30 inset-0 flex justify-center items-center rounded-lg">
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
          className="h-10 text-black p-2 rounded-full text-2xl"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
