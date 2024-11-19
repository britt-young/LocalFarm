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

const ServiceSlider = () => {
  const navigate = useNavigate();

 /*  const handleClick = () => {
    navigate(image.path); // Navigate to the path of the clicked item
  }; */

  const images = [
    { src: veggies, alt: "veggies", text: "Vegetables", path: "services/veggies" },
    { src: meat, alt: "meat", text: "Meat", path: "services/meat" },
    { src: dairy, alt: "dairy", text: "Dairy", path: "services/dairy" },
    { src: eggs, alt: "eggs", text: "Eggs", path: "services/eggs" },
    { src: fruit, alt: "fruit", text: "Fruits", path: "services/fruits" },
    { src: spices, alt: "spices", text: "Spices", path: "services/spices" },
    { src: grain, alt: "grain", text: "Grains", path: "services/grains" },
    { src: feed, alt: "feed", text: "Feed", path: "services/feed" },
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
  ];

  // Function to handle navigation when text is clicked
  const handleNavigate = (path) => {
    navigate(path); // Navigate to the path of the clicked item
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto overflow-hidden mb-20">
      <div className="carousel flex transition-transform duration-300 ease-in-out">
        <div className="carousel-images flex">
          {visibleImages.map((image, index) => (
            <div key={index} className="relative w-1/2 md:w-1/4 p-1">
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[250px] h-[250px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-100 rounded-lg">
                  <div
                    className="text-white text-lg font-bold text-center cursor-pointer z-10"
                    onClick={() => handleNavigate(image.path)}
                  >
                    {image.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
        <button
          className="bg-black bg-opacity-50 text-white p-2 rounded-full text-2xl hover:bg-opacity-80 transition duration-300"
          onClick={prevImage}
        >
          <FaArrowLeft />
        </button>
        <button
          className="bg-black bg-opacity-50 text-white p-2 rounded-full text-2xl hover:bg-opacity-80 transition duration-300"
          onClick={nextImage}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
