import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-50";
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-800">
            Mini Project
          </Link>
          
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/")}`}
            >
              Home
            </Link>
            <Link
              to="/course"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/course")}`}
            >
              Course
            </Link>
            <Link
              to="/lesson"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/lesson")}`}
            >
              Lesson
            </Link>            
            <Link
              to="/profile"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${isActive("/profile")}`}
            >
              Profile
            </Link>                        
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
