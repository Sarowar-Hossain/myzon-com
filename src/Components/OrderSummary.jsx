import React from "react";

const OrderSummary = () => {
  return (
    <div className="justify-center bg-yellow-200 w-full h-[500px] p-5">
      <div className="font-normal text-xl mb-5">
        <h3>Order Summary</h3>
      </div>
      <div className="mb-5">
        <p>Selected Items: </p>
        <p>Total Price: </p>
        <p>Total Shipping Charge: </p>
        <p>Tax:</p>
      </div>
      <h3 className="font-semibold text-xl mb-6">Grand Total: </h3>

      <div className="grid">
        <button
          className="block focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg 
      text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Clear Cart
        </button>
        <button
          className="block focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg 
      text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Review Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
