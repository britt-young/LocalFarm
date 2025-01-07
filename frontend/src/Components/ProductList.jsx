import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from 'react';
import Product from './Product';

import dairy from '../assets/imgs/products/dairy.png';
import eggs from '../assets/imgs/products/eggs.png';
import feed from '../assets/imgs/products/feed.png';
import fruit from '../assets/imgs/products/fruit.png';
import grain from '../assets/imgs/products/grain.png';
import meat from '../assets/imgs/products/meat.png';
import spices from '../assets/imgs/products/spices.png';
import veggies from '../assets/imgs/products/veggies.png';

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
    } else if (product.name === 'Eggs') {
      image = eggs;
    } else if (product.name === 'Feed') {
      image = feed;
    } else if (product.name === 'Fruit') {
      image = fruit;
    } else if (product.name === 'Grain') {
      image = grain;
    } else if (product.name === 'Meat') {
      image = meat;
    } else if (product.name === 'Spices') {
      image = spices;
    } else if (product.name === 'Veggies') {
      image = veggies;
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
