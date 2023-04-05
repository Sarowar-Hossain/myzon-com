import React from "react";
import { Link } from "react-router-dom";


const Products = ({ product }) => {
  console.log(product);
  const {
    id,
    price,
    rating,
    stock,
    thumbnail,
    brand,
    title,
    discountPercentage,
    description,
  } = product;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[550px] w-full relative">
      <img className="w-full h-64" src={thumbnail} alt={title} />
      <div className="p-4 ">
        <div className="font-bold text-gray-800 text-xl mb-2">{title}</div>
        <Link className="text-gray-600 text-sm mb-2">{description}</Link>
        <div className="text-yellow-500 text-sm font-bold mb-2">
            {`Rating: ${rating}/5`}</div>
        <div className="text-black text-2xl font-normal mb-2 flex items-center justify-between">
          <div>{`$${price}`}</div>
          <span>
            {discountPercentage && (
              <div className="text-pink-600 text-xl font-normal">{`${discountPercentage}% Off`}</div>
            )}
          </span>
        </div>
        <p>Free Shipping</p>
        <button className="absolute bottom-0 left-0 w-full bg-yellow-400 hover:bg-yellow-500 hover:text-black text-gray-700 py-2 px-4 rounded">
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Products;
