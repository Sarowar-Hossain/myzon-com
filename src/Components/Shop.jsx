import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import OrderSummary from "./OrderSummary";

const Shop = () => {
  const data = useLoaderData();
  const products = data.products;
  return (
    <div className="flex">
      <div className="grid grid-cols-3 gap-3 w-4/5 m-10">
        {products.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
      <div className="w-1/5 h-full ">
        {
            <OrderSummary></OrderSummary>
        }
      </div>
    </div>
  );
};

export default Shop;
