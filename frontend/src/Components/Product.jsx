import React from 'react';

const Product = React.memo(({ name, description, image, seasonImage }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 h-full flex flex-col justify-between relative">
      {/* Product Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      {/* Product Details Section */}
      <div className="flex-grow mb-6">
        <h2 className="text-2xl font-semibold text-green-900">{name}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Season Image Section at the bottom-right */}
      <p></p>
      {seasonImage && (
        <img
          src={seasonImage}
          alt={`Seasonal for ${name}`}
          className=" w-6 h-6 object-cover absolute bottom-4 right-4"
        />
      )}
    </div>
  );
});

export default Product;
