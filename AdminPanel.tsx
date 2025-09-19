import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
          <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
          <nav className="space-y-2">
            <a href="#menu" className="block p-3 rounded hover:bg-gray-700">Menu Management</a>
            <a href="#gallery" className="block p-3 rounded hover:bg-gray-700">Gallery</a>
            <a href="#contact" className="block p-3 rounded hover:bg-gray-700">Contact Info</a>
            <a href="#settings" className="block p-3 rounded hover:bg-gray-700">Restaurant Settings</a>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Menu Management</h1>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Item Name</label>
                <input type="text" className="w-full p-3 border rounded" placeholder="Enter item name" />
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <select className="w-full p-3 border rounded">
                  <option>Appetizer</option>
                  <option>Main</option>
                  <option>Dessert</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Price</label>
                <input type="number" className="w-full p-3 border rounded" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-gray-700">Description</label>
                <textarea className="w-full p-3 border rounded" rows={4}></textarea>
              </div>
              <div>
                <label className="block text-gray-700">Image URL</label>
                <input type="text" className="w-full p-3 border rounded" placeholder="https://example.com/image.jpg" />
              </div>
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                Save Item
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
