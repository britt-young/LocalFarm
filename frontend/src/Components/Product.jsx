import React from 'react';

const Product = React.memo(({ name, description, image, seasonImage, inSeason }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 h-full flex flex-col justify-between relative">
      {/* In Season Badge */}
      {inSeason && (
        <div className="absolute top-2 left-2 bg-[#fff600] text-black text-xs uppercase font-semibold px-2 py-1 rounded-full shadow-md z-10">
          In Season
        </div>
      )}

      {/* Product Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      {/* Product Details Section */}
      <div className="flex-grow mb-6">
        <h4 className="text-green-900">{name}</h4>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Season Image Section */}
      {seasonImage && (
        <img
          src={seasonImage}
          alt={`Seasonal for ${name}`}
          className="w-6 h-6 object-cover absolute bottom-4 right-4"
        />
      )}
    </div>
  );
});

export default Product;
