import React from 'react'

const Product = React.memo(({ name, description }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md w-64">
        <h2 className="text-2xl font-semibold text-green-600">{name}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    );
  });

export default Product