import React from "react";


const AdminHeader = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-300">
            Admin Panel
          </a>
        </div>

        
        <nav className="hidden md:flex space-x-6">
          <a href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </a>
          <a href="/users" className="hover:text-gray-300">
            Users
          </a>
          <a href="/settings" className="hover:text-gray-300">
            Settings
          </a>
          <a href="/products" className="hover:text-gray-300">
            Products
          </a>
        </nav>

      
        <div className="flex items-center space-x-4">
          
          <button
            className="relative p-2 rounded-full hover:bg-gray-700 focus:outline-none"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405a2.032 2.032 0 01-.595-1.415V11c0-2.21-1.79-4-4-4S10 8.79 10 11v3.18c0 .53-.214 1.04-.595 1.415L8 17h5m2 0a3 3 0 11-6 0h6z"
              />
            </svg>
          </button>

          
          <div className="relative">
            <button className="flex items-center space-x-2 focus:outline-none">
              <img
                src="https://via.placeholder.com/32"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block">Admin</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
