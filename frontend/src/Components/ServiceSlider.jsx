import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../index.css";

import produce from "../assets/imgs/produce.png";
import meat from "../assets/imgs/meat.png";
import dairy from "../assets/imgs/dairy.png";
import grain from "../assets/imgs/grain.png";


const ServiceSlider = () => {
    const images = [
      { src: produce, alt: 'Image 1', text: 'Produce' },
      { src: meat, alt: 'Image 2', text: 'Meat' },
      { src: dairy, alt: 'Image 3', text: 'Dairy' },
      { src: grain, alt: 'Image 4', text: 'Grains' },
      { src: 'image5.jpg', alt: 'Image 5', text: 'Spices' },
      { src: 'image6.jpg', alt: 'Image 6', text: 'Fruits' },
      { src: 'image7.jpg', alt: 'Image 7', text: 'Vegetables' },
      { src: 'image8.jpg', alt: 'Image 8', text: 'Image 8 Description' },
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
  
    const visibleImages = [
      images[(currentIndex) % images.length],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length],
      images[(currentIndex + 3) % images.length],
    ];

  return (    
<div className="carousel-container">
      <div className="carousel">
        <div className="carousel-images">
          {visibleImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={image.alt} className="carousel-image" />
              <div className="overlay">
                <div className="overlay-text">{image.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button className="control-btn prev" onClick={prevImage}>
          <FaArrowLeft />
        </button>
        <button className="control-btn next" onClick={nextImage}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
