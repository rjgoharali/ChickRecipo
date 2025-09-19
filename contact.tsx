import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-4">We’d love to hear from you</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-4">📍 123 Flavor Street, Lahore, Pakistan</p>
            <p className="text-gray-600 mb-4">📞 +92 344 4416211</p>
            <p className="text-gray-600 mb-4">✉️ info@chickrecipo.com</p>
            <p className="text-gray-600">🕒 Mon–Sun: 10 AM – 11 PM</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" rows={5} placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
