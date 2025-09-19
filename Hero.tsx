import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Taste the Tradition</h1>
          <p className="text-xl md:text-2xl mb-8">Handcrafted Chicken Dishes with Secret Family Recipes</p>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
