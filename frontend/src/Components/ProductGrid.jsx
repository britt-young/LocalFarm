import { useNavigate } from "react-router-dom";

import veggies from "../assets/imgs/products/veggies.png";
import meat from "../assets/imgs/products/meat.png";
import dairy from "../assets/imgs/products/dairy.png";
import eggs from "../assets/imgs/products/eggs.png";
import fruit from "../assets/imgs/products/fruit.png";
import spices from "../assets/imgs/products/spices.png";
import grain from "../assets/imgs/products/grain.png";
import feed from "../assets/imgs/products/feed.png";

const ProductGrid = () => {
  const navigate = useNavigate();

  const images = [
    { src: veggies, alt: "veggies", text: "Vegetables" },
    { src: meat, alt: "meat", text: "Meat" },
    { src: dairy, alt: "dairy", text: "Dairy" },
    { src: eggs, alt: "eggs", text: "Eggs" },
    { src: fruit, alt: "fruit", text: "Fruits" },
    { src: spices, alt: "spices", text: "Spices" },
    { src: grain, alt: "grain", text: "Grains" },
    { src: feed, alt: "feed", text: "Feed" },
  ];

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mb-20">
      <div className="grid lg:grid-cols-8 grid-cols-2 mx-10 lg:mx-0 gap-6 justify-center items-center">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
              <p className="text-white font-semibold text-lg">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button onClick={handleNavigate}>View product library</button>
      </div>
    </div>
  );
};

export default ProductGrid;
