import React from 'react';

const Navbar: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">Chick Recipo</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600 transition">Menu</a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-600 transition">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
            <button onClick={onLoginClick} className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
              Login
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-700">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
