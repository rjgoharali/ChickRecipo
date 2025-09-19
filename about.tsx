import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Chick Recipo</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
          Welcome to Chick Recipo — where flavor meets tradition. We serve hand-crafted chicken dishes with love, 
          using only the freshest ingredients and secret family recipes passed down for generations.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Family Recipes</h2>
            <p className="text-gray-600">Generations of culinary wisdom in every bite.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fresh Ingredients</h2>
            <p className="text-gray-600">Daily sourced, never frozen, always delicious.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warm Service</h2>
            <p className="text-gray-600">Hospitality that feels like home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
