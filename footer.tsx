import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">Chick Recipo</h3>
        <p className="text-gray-300 mb-4">Serving delicious chicken dishes since 2018</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-orange-400 transition">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition">Instagram</a>
          <a href="#" className="text-gray-300 hover:text-orange-400 transition">Twitter</a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Chick Recipo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
