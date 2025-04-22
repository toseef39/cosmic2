import React from "react";
import { Header } from "../common/Header";
import Cards from "../common/cards";
import Footer from "../common/Footer";
import { MainFooter } from "../common/MainFooter";
import cardImage from "../../assets/images/computer.jpg";
import logoimg from "../../assets/images/logo-2.svg";
import logoimg2 from "../../assets/images/logo-3.svg";
import logoimg3 from "../../assets/images/logo-6.svg";
import logoimg4 from "../../assets/images/logo-4.svg";
import logoimg5 from "../../assets/images/logo-5.svg";
import logoimg6 from "../../assets/images/logo-7.svg";

const cardList = Array(8).fill({
  image: cardImage,
  heading: "Shampoo",
  price: 30,
});

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <h4 className="text-sky-500 text-xl mb-3">A Brush of Perfection</h4>
        <h2 className="text-4xl font-semibold mb-3">Add a Flavor to Being a Girl</h2>
        <p className="text-gray-600 max-w-md mx-auto">Lorem ipsum dolor sit amet, consectetur.</p>
      </section>

      {/* Cards */}
      <div className="px-4">
        <Cards list={cardList} />
      </div>

      {/* Highlight Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-4 items-center">
        <img src={cardImage} alt="Promo" className="w-full h-auto rounded-xl" />
        <div className="text-center md:text-left ">
          <h3 className="text-sky-800 text-xl mb-2">Be Bold, Be Daring</h3>
          <h2 className="text-4xl font-bold mb-4">A Whole New Look</h2>
          <p className="text-gray-700 mb-6 max-w-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="bg-sky-500 hover:bg-sky-700 text-white px-6 py-2 rounded">
            View More
          </button>
        </div>
      </section>

      {/* Footer Banners */}
      <Footer />

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center gap-6 mt-16 px-4">
        {[logoimg, logoimg2, logoimg3, logoimg4, logoimg5, logoimg6, logoimg].map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} className="w-24 h-auto" />
        ))}
      </div>

      {/* Latest Products */}
      <section className="text-center mt-16 px-4">
        <h4 className="text-sky-500 text-xl mb-2">Blossom into a New You!</h4>
        <h2 className="text-5xl font-bold mb-4">Latest Products</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-10">Lorem ipsum dolor sit amet, consectetur.</p>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-12 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <h5 className="text-3xl font-semibold text-center md:text-left">
          Sign-up the Makeup <br /> Fan Club
        </h5>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-72 h-12 px-4 border border-blue-300 rounded focus:outline-none"
          />
          <button className="bg-sky-500 hover:bg-black text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>

      <MainFooter />
    </>
  );
};

export default Home;
