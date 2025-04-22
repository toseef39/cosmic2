import React from "react";
import { Navbar } from "../common/Navbar";
import { MainFooter } from "../common/MainFooter";

export const Testimonials = () => {
  const testimonials = Array(5).fill({
    name: "Touseef Rehman",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis voluptas blanditiis.",
  });

  return (
    <>
      <div className="bg-cyan-900 text-white min-h-screen">
        <Navbar />

        {/* Title */}
        <h4 className="text-5xl md:text-6xl font-bold text-center mt-16 mb-12">
          Testimonials
        </h4>

        {/* Testimonial Box */}
        <div className="bg-white text-black max-w-4xl mx-auto p-8 rounded-lg shadow-2xl space-y-8">
          {testimonials.map((t, index) => (
            <div key={index}>
              <p className="text-lg">{t.content}</p>
              <h4 className="mt-4 font-semibold text-right pr-4 text-cyan-800">
                — {t.name}
              </h4>
              {index !== testimonials.length - 1 && (
                <hr className="my-4 border-cyan-700" />
              )}
            </div>
          ))}
        </div>

        {/* Sign-up Section */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mt-24 p-6 bg-cyan-800 rounded-xl text-white">
          <h5 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-0">
            Sign-up to the <br /> Makeup Fan Club
          </h5>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              className="h-12 w-72 px-4 text-black rounded border border-blue-300 outline-none"
              placeholder="Enter your Email"
            />
            <button className="bg-sky-500 hover:bg-black text-white px-6 py-2 rounded transition">
              Subscribe
            </button>
          </div>
        </div>

        <MainFooter />
      </div>
    </>
  );
};
