import React, { useState } from "react";
import "../../assets/styles/Shop.css";
import { Navbar } from "../common/Navbar";
import { IoChevronForward } from "react-icons/io5";
import Cards from "../common/cards";
import { MainFooter } from "../common/MainFooter";
import cardImage from "../../assets/images/computer.jpg";

const cardList = Array(8).fill({
  image: cardImage,
  heading: "Shampoo",
  price: 30,
});

const Shop = () => {
  const [Categories, setCategories] = useState(1);

  return (
    <>
      <Navbar />

      {/* Breadcrumb & Search */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 mt-6 gap-4">
        <input
          type="text"
          className="w-full md:w-64 h-10 px-4 border border-blue-300 rounded outline-none"
          placeholder="Search for Products"
        />
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <IoChevronForward />
          <p>
            <a href="#" className="text-blue-500">Home</a> /{" "}
            <a href="#" className="text-blue-500">Shop</a>
          </p>
        </div>
      </div>

      <div className="px-6 mt-8 text-sm text-gray-600">Showing all 8 results</div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-10 px-6 mt-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          {/* Filter by Price */}
          <h2 className="text-2xl font-semibold mb-4">Filter by Price</h2>
          <input type="range" className="w-full mb-4" />
          <button className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded mb-8">
            Apply
          </button>

          {/* Filter by Categories */}
          <h2 className="text-2xl font-semibold mb-4">Filter by Categories</h2>
          <ul className="space-y-2">
            {[
              "Anti-aging Cream",
              "Balms",
              "Face Cream",
              "Paste Masks",
              "Feminine Deodorants",
              "Skin Fresheners",
              "Skin Milk",
              "Skin Toner",
            ].map((item, index) => (
              <li key={index} className="text-gray-700 hover:text-sky-600">
                <a href="#">{item} ({Categories})</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Cards */}
        <div className="w-full md:w-3/4">
          <Cards list={cardList} />
        </div>
      </div>

      <MainFooter />
    </>
  );
};

export default Shop;
