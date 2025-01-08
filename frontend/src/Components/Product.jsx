import React from 'react';


const Product = React.memo(({ name, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-64 overflow-hidden">
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      {/* Product Details Section */}
      <h2 className="text-2xl font-semibold text-green-900">{name}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
});

export default Product;