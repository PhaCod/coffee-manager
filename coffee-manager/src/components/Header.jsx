import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const menuItems = [
    { 
      id: '/employee', 
      label: 'Employee Management',
      icon: '👥',
      path: '/employee'
    },
    { 
      id: '/revenue', 
      label: 'Revenue',
      icon: '💰',
      path: '/revenue'
    },
    { 
      id: '/promotion', 
      label: 'Top Promotion',
      icon: '🏆',
      path: '/promotion'
    }
  ];

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            Coffee Manager
          </div>

          {/* Navigation Menu */}
          <div className="flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setActiveTab(item.path)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${location.pathname === item.path 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}
                `}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="https://via.placeholder.com/40" 
                alt="User Profile" 
                className="w-10 h-10 rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;