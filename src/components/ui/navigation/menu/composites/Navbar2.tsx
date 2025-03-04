'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Yushi Yamamoto
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-gray-900 dark:text-white">Home</a>
              <a href="/about" className="text-gray-900 dark:text-white">About</a>
              <a href="/projects" className="text-gray-900 dark:text-white">Projects</a>
              <a href="/contact" className="text-gray-900 dark:text-white">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-gray-900 dark:text-white">Home</a>
              <a href="/about" className="text-gray-900 dark:text-white">About</a>
              <a href="/projects" className="text-gray-900 dark:text-white">Projects</a>
              <a href="/contact" className="text-gray-900 dark:text-white">Contact</a>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex flex-col space-y-2">
                <a href="/" className="text-gray-900 dark:text-white">Home</a>
                <a href="/about" className="text-gray-900 dark:text-white">About</a>
                <a href="/projects" className="text-gray-900 dark:text-white">Projects</a>
                <a href="/contact" className="text-gray-900 dark:text-white">Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
