import React from 'react';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Menu</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Spicy Fried Chicken", price: "$12.99", description: "Crispy golden chicken with house spice blend" },
            { name: "Grilled Chicken Wrap", price: "$10.99", description: "Juicy grilled chicken with fresh veggies" },
            { name: "Chicken Biryani", price: "$14.99", description: "Aromatic rice with tender chicken and herbs" },
            { name: "Chicken Nuggets", price: "$8.99", description: "Crispy bites served with honey mustard" },
            { name: "Chicken Burger", price: "$11.99", description: "Juicy patty with cheese, lettuce, and special sauce" },
            { name: "Chicken Shawarma", price: "$13.99", description: "Slow-roasted meat with garlic sauce" }
          ].map((item, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-orange-600 font-bold mb-2">{item.price}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700 transition">
                Add to Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
