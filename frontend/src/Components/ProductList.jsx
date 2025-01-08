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
import mandarines from '../assets/imgs/products/Mandarines.jpg';
import meat from '../assets/imgs/products/meat.png';
import nectarines from '../assets/imgs/products/Nectarines.jpg';
import oranges from '../assets/imgs/products/Oranges.jpg';
import pecans from '../assets/imgs/products/Pecans.jpg';
import pumpkins from '../assets/imgs/products/Pumpkins.jpg';
import raspberries from '../assets/imgs/products/Raspberries.jpg';
import spinach from '../assets/imgs/products/Spinach.jpg';
import tomatoes from '../assets/imgs/products/Tomatoes.jpg';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products data:', error));
  }, []);

  // Map over products and add the corresponding image
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
    }else if (product.name === 'Dairy') {
      image = dairy;
    } else if (product.name === 'Eggs') {
      image = eggs;
    } else if (product.name === 'Mandarines') {
      image = mandarines;
    } else if (product.name === 'Meat') {
      image = meat;
    } else if (product.name === 'Nectarines') {
      image = nectarines;
    } else if (product.name === 'Oranges') {
      image = oranges;
    } else if (product.name === 'Pecans') {
      image = pecans;
    }else if (product.name === 'Pumpkins') {
      image = pumpkins;
    } else if (product.name === 'Raspbereies') {
      image = raspberries;
    } else if (product.name === 'Spinach') {
      image = spinach;
    } else if (product.name === 'Tomatoes') {
      image = tomatoes;
    }
    return { ...product, image };
  });

  // Filter products based on search query
  const filteredProducts = productsWithImages.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="flex justify-center m-5 text-5xl">Product Library</h1>

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
