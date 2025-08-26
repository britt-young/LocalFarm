import LazyLoad from 'react-lazyload';
import { useState, useEffect } from 'react';
import Product from './Product';

// Images
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

const ProductLibrary = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products data:', error));
  }, []);

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
        return annual;
    }
  };

  const isCurrentlyInSeason = (season) => {
    const month = new Date().getMonth(); // 0 = January
    const seasonMap = {
      Winter: [11, 0, 1], // Dec, Jan, Feb
      Spring: [2, 3, 4],
      Summer: [5, 6, 7],
      Fall: [8, 9, 10],
      Annual: [...Array(12).keys()] // All months
    };
    return seasonMap[season]?.includes(month) ?? false;
  };

  const getProductImage = (name) => {
    const images = {
      Dairy: dairy,
      Apples: apples,
      Apricots: apricots,
      Avocados: avocados,
      Blackberries: blackberries,
      Blueberries: blueberries,
      Cabbage: cabbage,
      Carrots: carrots,
      Corn: corn,
      Eggs: eggs,
      Lettuce: lettuce,
      Mandarins: mandarins,
      Meat: meat,
      Nectarines: nectarines,
      Oranges: oranges,
      Pecans: pecans,
      Pumpkins: pumpkins,
      Raspberries: raspberries,
      Spinach: spinach,
      Strawberries: strawberries,
      Tomatoes: tomatoes
    };
    return images[name];
  };

  const productsWithImages = products.map((product) => {
    const image = getProductImage(product.name);
    const seasonImage = getSeasonImage(product.season);
    const inSeason = isCurrentlyInSeason(product.season);
    return { ...product, image, seasonImage, inSeason };
  });

  const filteredProducts = productsWithImages.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 lg:py-20 py-16">
      <h3 className="flex justify-center">Product Library</h3>

      {/* Search */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="search products..."
          className="px-2 py-0 w-80 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Imported Product.jsx */}
      <div className="flex flex-wrap gap-6 justify-center mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <LazyLoad key={product.name} height={200} offset={100}>
              <Product
                name={product.name}
                description={product.description}
                image={product.image}
                seasonImage={product.seasonImage}
                inSeason={product.inSeason}
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

export default ProductLibrary;
