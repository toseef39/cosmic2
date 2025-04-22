import React from "react";

export const MainFooter = () => {
  return (
    <footer className="bg-black text-amber-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl mb-3 font-semibold">Contact Detail</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-300 transition">929-242-6868</li>
            <li className="hover:text-blue-300 transition">contact@info.com</li>
            <li className="hover:text-blue-300 transition">
              123 Fifth Avenue, New York, NY 10160
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl font-bold">Cosmetic</h1>
        </div>

        <div>
          <h2 className="text-2xl mb-3 font-semibold">Quick Links</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-300 transition">Shipping & Returns</li>
            <li className="hover:text-blue-300 transition">Contact</li>
            <li className="hover:text-blue-300 transition">Customer Service</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; 2025 Cosmetics Store | Powered by Cosmetics Store
      </div>
    </footer>
  );
};
