import React from "react";

const Footer = () => (
  // <footer className="fixed bottom-0 mt-auto py-3 bg-gray-800">
  // <footer className="flex justify-center fixed bottom-0 w-screen mt-auto py-0 bg-gray-800">
  <footer className="flex justify-center bottom-0 w-screen mt-auto py-0 bg-gray-800">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-white">
        © {new Date().getFullYear()}, {` `} HRSCAMP
      </p>
    </div>
  </footer>
);

export default Footer;
