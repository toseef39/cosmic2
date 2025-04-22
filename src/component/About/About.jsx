import React from "react";
import { Navbar } from "../common/Navbar";
import img from "../../assets/images/pic4.jpg";
import slide from "../../assets/images/slide.jpg";
import Footer from "../common/Footer";
import logoimg from "../../assets/images/logo-2.svg";
import logoimg2 from "../../assets/images/logo-3.svg";
import logoimg3 from "../../assets/images/logo-6.svg";
import logoimg4 from "../../assets/images/logo-4.svg";
import logoimg5 from "../../assets/images/logo-5.svg";
import logoimg6 from "../../assets/images/logo-7.svg";
import { MainFooter } from "../common/MainFooter";

export const About = () => {
  const brandLogos = [logoimg, logoimg2, logoimg3, logoimg4, logoimg5, logoimg6, logoimg];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-cyan-900 text-white py-24 text-center">
        <Navbar />
        <h4 className="text-5xl font-bold mt-12">About</h4>
      </div>

      {/* About Content */}
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 py-20">
        <div>
          <h4 className="text-sky-500 text-xl mb-4">Helping You Look Good</h4>
          <h2 className="text-black text-3xl font-semibold mb-6">
            Let's Talk about Beauty
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <p className="text-gray-700 mb-8">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat
            ipsum, nec sagittis sem nibh id elit.
          </p>
          <h4 className="text-sky-500 text-xl mb-4">Features of Our Products</h4>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-800">
            <li>Duis aute irure dolor</li>
            <li>Sed do eius mod</li>
            <li>Sed do eius mod</li>
            <li>Duis aute irure dolor</li>
            <li>Sed do eius mod</li>
            <li>Laboris nisi ut aliquip</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img src={img} alt="About" className="rounded-lg shadow-xl max-h-[500px] object-cover" />
        </div>
      </div>

      {/* Slide Image */}
      <div className="my-16 px-6">
        <img
          src={slide}
          alt="Slide"
          className="w-full max-w-6xl mx-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 px-6 py-10 bg-gray-100">
        {brandLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Brand ${index + 1}`} className="h-16" />
        ))}
      </div>

      {/* Footer Sections */}
      <Footer />
      <MainFooter />
    </>
  );
};
