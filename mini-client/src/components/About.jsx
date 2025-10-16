import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Our Project</h1>
      
      <div className="prose max-w-none">
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            This mini project is a React-based learning platform designed to provide 
            an interactive educational experience. Built with modern web technologies 
            including React, React Router DOM, and Tailwind CSS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">Frontend Technologies</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React 19.1.1</li>
              <li>• React Router DOM 7.9.4</li>
              <li>• Tailwind CSS 4.1.14</li>
              <li>• Vite 7.1.7</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-green-800">Backend Technologies</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Python</li>
              <li>• JSON Data Storage</li>
              <li>• Asset Management</li>
              <li>• File-based Configuration</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3 text-yellow-800">Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Responsive design with Tailwind CSS</li>
            <li>• Client-side routing with React Router</li>
            <li>• Component-based architecture</li>
            <li>• Modern development workflow with Vite</li>
            <li>• Structured course content display</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default About;
