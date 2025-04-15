import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from 'react';
import Product from './Product';

import apples from '../assets/imgs/products/Apples.jpg';
import apricots from '../assets/imgs/products/Apricots.jpg';
import avocados from '../assets/imgs/products/Avocados.jpg';
import blackberries from '../assets/imgs/products/Blackberries.jpg';
import blueberries from '../assets/imgs/products/Blueberries.jpg';
import cabbage from '../assets/imgs/products/Cabbage.jpg';
import carrots from '../assets/imgs/products/Carrots.jpg';
import corn from '../assets/imgs/products/Corn.jpg';
import dairy from '../assets/imgs/products/dairy.png';
import eggs from '../assets/imgs/products/eggs.png';
import lettuce from '../assets/imgs/products/Lettuce.jpg';
import mandarins from '../assets/imgs/products/Mandarins.jpg';
import meat from '../assets/imgs/products/meat.png';
import nectarines from '../assets/imgs/products/Nectarines.jpg';
import oranges from '../assets/imgs/products/Oranges.jpg';
import pecans from '../assets/imgs/products/Pecans.jpg';
import pumpkins from '../assets/imgs/products/Pumpkins.jpg';
import raspberries from '../assets/imgs/products/Raspberries.jpg';
import spinach from '../assets/imgs/products/Spinach.jpg';
import strawberries from '../assets/imgs/products/Strawberries.jpg';
import tomatoes from '../assets/imgs/products/Tomatoes.jpg';

import annual from '../assets/imgs/seasons/annual.png';
import winter from '../assets/imgs/seasons/winter.png';
import spring from '../assets/imgs/seasons/spring.png';
import summer from '../assets/imgs/seasons/summer.png';
import fall from '../assets/imgs/seasons/fall.png';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products data:', error));
  }, []);

  // Function to get season image based on product season
  const getSeasonImage = (season) => {
    switch (season) {
      case 'Winter':
        return winter;
      case 'Spring':
        return spring;
      case 'Summer':
        return summer;
      case 'Fall':
        return fall;
      default:
        return annual; // For products that are available year-round
    }
  };

  // Map over products and add the corresponding image and season
  const productsWithImages = products.map((product) => {
    let image;

    if (product.name === 'Dairy') {
      image = dairy;
    } else if (product.name === 'Apples') {
      image = apples;
    } else if (product.name === 'Apricots') {
      image = apricots;
    } else if (product.name === 'Avocados') {
      image = avocados;
    } else if (product.name === 'Blackberries') {
      image = blackberries;
    } else if (product.name === 'Blueberries') {
      image = blueberries;
    } else if (product.name === 'Cabbage') {
      image = cabbage;
    } else if (product.name === 'Carrots') {
      image = carrots;
    } else if (product.name === 'Corn') {
      image = corn;
    } else if (product.name === 'Eggs') {
      image = eggs;
    } else if (product.name === 'Lettuce') {
      image = lettuce;
    } else if (product.name === 'Mandarins') {
      image = mandarins;
    } else if (product.name === 'Meat') {
      image = meat;
    } else if (product.name === 'Nectarines') {
      image = nectarines;
    } else if (product.name === 'Oranges') {
      image = oranges;
    } else if (product.name === 'Pecans') {
      image = pecans;
    } else if (product.name === 'Pumpkins') {
      image = pumpkins;
    } else if (product.name === 'Raspberries') {
      image = raspberries;
    } else if (product.name === 'Spinach') {
      image = spinach;
    } else if (product.name === 'Strawberries') {
      image = strawberries;
    } else if (product.name === 'Tomatoes') {
      image = tomatoes;
    }

    // Add the season image based on the product's season
    const seasonImage = getSeasonImage(product.season);

    return { ...product, image, seasonImage };
  });

  // Filter products based on search query
  const filteredProducts = productsWithImages.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="flex justify-center m-5">Product Library</h2>

      {/* Search Input */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 w-80 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <LazyLoad key={product.name} height={200} offset={100}>
              <Product
                name={product.name}
                description={product.description}
                image={product.image}
                seasonImage={product.seasonImage} 
              />
            </LazyLoad>
          ))
        ) : (
          <p className="text-center text-lg text-gray-700">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
