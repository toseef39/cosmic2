import React from "react";

const Cards = ({ list }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list?.map((item, ind) => (
          <div
            key={ind}
            className="bg-gray-300 rounded-2xl border border-gray-600 p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="w-full max-w-[150px] h-auto mb-4 object-contain"
            />
            <h4 className="font-semibold">{item.heading}</h4>
            <h4 className="text-blue-700 font-bold">{item.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
