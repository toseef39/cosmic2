import React from "react";
import { Navbar } from "../common/Navbar";
import { MainFooter } from "../common/MainFooter";

export const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-cyan-900 text-amber-50 py-20">
        <Navbar />
        <h4 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mt-10">
          Contact
        </h4>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <form className="bg-white shadow-md p-8 rounded-xl">
          <h4 className="text-sky-500 text-xl text-center mb-4">Message Us</h4>
          <h2 className="text-gray-800 text-3xl font-semibold mb-8 text-center">
            Get in Touch
          </h2>

          {/* Name Inputs */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-600">First Name</label>
              <input
                type="text"
                placeholder="First"
                className="w-full border-b border-gray-400 focus:outline-none py-2 px-3"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                placeholder="Last"
                className="w-full border-b border-gray-400 focus:outline-none py-2 px-3"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border-b border-gray-400 focus:outline-none py-2 px-3"
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-600">Message</label>
            <textarea
              placeholder="Your message..."
              rows="4"
              className="w-full border-b border-gray-400 focus:outline-none py-2 px-3 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-black transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <MainFooter />
    </>
  );
};
