import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between  px-14 bg-slate-900 h-24 w-full">
      <div className="text-2xl font-bold m-0 p-0 text-white">
        <Link>My<span className="text-orange-500 m-0 p-0">Zone</span>.com</Link>
      </div>
      <div className="m-0 p-0 text-white inline-flex gap-3 font-semibold">
        <Link className="hover:text-orange-500" to="/">Home</Link>
        <Link className="hover:text-orange-500" to="/shop">Shop</Link>
        <Link className="hover:text-orange-500" to="/order">Order</Link>
        <Link className="hover:text-orange-500" to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
