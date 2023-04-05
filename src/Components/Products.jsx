import React from "react";

const Products = ({ product }) => {
  const {
    id,
    price,
    rating,
    stock,
    thumbnail,
    brand,
    title,
    discountPercentage,
  } = product;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <img className="w-full" src={thumbnail} alt={title} />
      <div className="p-4">
        <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
        <div className="text-gray-600 text-sm mb-2">{brand}</div>
        <div className="text-gray-600 text-sm mb-2">{`Product ID: ${id}`}</div>
        <div className="text-gray-600 text-sm mb-2">{`Price: $${price}`}</div>
        <div className="text-gray-600 text-sm mb-2">{`Rating: ${rating}/5`}</div>
        <div className="text-gray-600 text-sm mb-2">{`Stock: ${stock}`}</div>
        {discountPercentage && (
          <div className="text-gray-600 text-sm mb-2">{`Discount: ${discountPercentage}%`}</div>
        )}
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
          <button className="text-gray-600 text-sm">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
