import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div className="bg-[url('/assets/images/your-header-bg.jpg')] bg-cover bg-center text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10 md:py-20 bg-fuchsia-800">
        <h3 className="text-lg md:text-2xl mb-2 font-medium tracking-wide">A Whole New Look</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Beauty <br /> Pronounced
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-gray-200 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat
          adipisci itaque pariatur accusantium, quod inventore, eligendi
          necessitatibus, placeat architecto eius qui saepe iure fugiat magnam?
          Ipsam qui quaerat aperiam.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
          View more
        </button>
      </section>
    </div>
  );
};
