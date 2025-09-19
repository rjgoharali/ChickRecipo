import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Restaurant</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={`https://via.placeholder.com/400x300?text=Gallery+${i}`}
                alt={`Gallery item ${i}`}
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
