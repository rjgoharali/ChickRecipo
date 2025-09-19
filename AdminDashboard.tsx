import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
          Logout
        </button>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-gray-600">Menu Items</h3>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-gray-600">Customers</h3>
            <p className="text-3xl font-bold text-gray-800">89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-gray-600">Orders</h3>
            <p className="text-3xl font-bold text-gray-800">214</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-gray-600">Gallery</h3>
            <p className="text-3xl font-bold text-gray-800">24</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Menu</h2>
          <div className="space-y-4">
            {[
              { name: "Spicy Fried Chicken", category: "Main", price: "$12.99" },
              { name: "Chicken Biryani", category: "Main", price: "$14.99" },
              { name: "Chicken Nuggets", category: "Appetizer", price: "$8.99" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-4 border rounded">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-sm text-gray-500">{item.category} • {item.price}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">Edit</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
            Add New Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
